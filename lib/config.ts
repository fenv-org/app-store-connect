import { ApiConfig } from '../gen/api.ts';
import { bearerToken } from './auth.ts';

export function createConfiguration(
  options: {
    issuerId: string;
    apiKey: string;
    privateKey: string;
  },
): ApiConfig {
  async function customFetch(
    input: Request | URL | string,
    init?: RequestInit,
  ): Promise<Response> {
    return fetch(input, {
      ...init,
      headers: {
        Authorization: `Bearer ${await bearerToken(options)}`,
        ...init?.headers,
      },
    });
  }
  return { customFetch };
}
