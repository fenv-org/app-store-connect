import { delay } from '@std/async';
import { logger } from './logger.ts';
import { bearerToken } from './auth.ts';

export function customFetchOf(
  auth: { issuerId: string; keyId: string; privateKey: string },
  retries: { apiUnauthorizedRetries: number; apiServerErrorRetries: number },
): typeof fetch {
  const { issuerId, keyId, privateKey } = auth;

  return async function customFetch(
    input: Request | URL | string,
    init?: RequestInit,
  ): Promise<Response> {
    const token = await bearerToken({ issuerId, keyId, privateKey });
    let { apiUnauthorizedRetries, apiServerErrorRetries } = retries;
    let response: Response;
    do {
      logger.debug(`Fetching "${input}"`);
      response = await fetch(input, {
        ...init,
        headers: {
          Authorization: `Bearer ${token}`,
          ...init?.headers,
        },
      });
    } while (await shouldRetry(response));
    return response;

    async function shouldRetry(response: Response): Promise<boolean> {
      const backoffMs = 2_000;

      if (response.status === 401 && apiUnauthorizedRetries > 0) {
        logger.info('Received 401 Unauthorized, retrying in 2s...');
        apiUnauthorizedRetries--;
        await delay(backoffMs);
        return true;
      }
      if (
        response.status >= 500 &&
        response.status < 600 &&
        apiServerErrorRetries > 0
      ) {
        logger.info(
          `Received ${response.status} Server Error, retrying in 2s...`,
        );
        apiServerErrorRetries--;
        await delay(backoffMs);
        return true;
      }
      return false;
    }
  };
}
