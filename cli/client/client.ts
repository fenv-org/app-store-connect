import {
  apiConfigOf,
  ApiConfigOptions,
  AppStoreConnectClient,
} from '../../mod.ts';

export function apiClient(): AppStoreConnectClient<unknown> {
  if (!_apiClient) {
    throw new Error('API client did not set up yet');
  }
  return _apiClient;
}

let _apiClient: AppStoreConnectClient<unknown> | undefined = undefined;

export function setupApiClient(
  apiConfigOptions: ApiConfigOptions & { base64?: true },
) {
  _apiClient = new AppStoreConnectClient(apiConfigOf(apiConfigOptions));
}
