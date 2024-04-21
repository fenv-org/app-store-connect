import { ApiConfig } from '../gen/api.ts';
import { customFetchOf } from './custom_fetch.ts';

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

export function apiConfigOf({
  issuerId,
  keyId,
  privateKey,
  apiUnauthorizedRetries = 3,
  apiServerErrorRetries = 3,
}: ApiConfigOptions): ApiConfig {
  return {
    customFetch: customFetchOf(
      { issuerId, keyId, privateKey },
      { apiUnauthorizedRetries, apiServerErrorRetries },
    ),
  };
}
