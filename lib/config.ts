import { ApiConfig } from '../gen/api.ts';
import { bearerToken } from './auth.ts';
import { delay } from '@std/async';
import { logger } from './logger.ts';

export type ApiConfigOptions = {
  issuerId: string;
  keyId: string;
  privateKey: string;
  /**
   * The number of times to retry a request if it fails with a 401 Unauthorized
   * status code. Defaults to 3.
   */
  apiUnauthorizedRetries?: number;
  /**
   * The number of times to retry a request if it fails with a 5xx Server Error
   * status code. Defaults to 3.
   */
  apiServerErrorRetries?: number;
};

export function createConfiguration({
  issuerId,
  keyId,
  privateKey,
  apiUnauthorizedRetries = 3,
  apiServerErrorRetries = 3,
}: ApiConfigOptions): ApiConfig {
  return { customFetch };

  async function customFetch(
    input: Request | URL | string,
    init?: RequestInit,
  ): Promise<Response> {
    const token = await bearerToken({ issuerId, keyId, privateKey });
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
  }

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
}
