import {
  apiConfigOf,
  type ApiConfigOptions,
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
): void {
  _apiClient = new AppStoreConnectClient(
    apiConfigOf({
      issuerId: apiConfigOptions.issuerId,
      keyId: apiConfigOptions.keyId,
      privateKey: apiConfigOptions.base64
        ? atob(apiConfigOptions.privateKey)
        : apiConfigOptions.privateKey,
    }),
  );
}
