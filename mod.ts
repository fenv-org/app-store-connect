/**
 * @module
 *
 * This module contains functions and models to manipulate App Store Connect
 * API.
 *
 * To use this module, you need to set up the API client with the following
 * code:
 *
 * ```typescript
 * import {
 *  apiConfigOf,
 *  AppStoreConnectClient,
 * } from '@fenv-org/app-store-connect';
 *
 * const client = new AppStoreConnectClient(
 *   apiConfigOf({
 *     issuerId: 'issuer-id',
 *     keyId: 'key-id',
 *     privateKey: 'private-key',
 *   }),
 * );
 * ```
 *
 * Please see the Apple's official documentation for more information:
 *
 * - https://developer.apple.com/documentation/appstoreconnectapi/creating_api_keys_for_app_store_connect_api
 */

export * from './gen/api.ts';
export { apiConfigOf, type ApiConfigOptions } from './lib/config.ts';
