# app-store-connect

This is a pure typescript package that helps manipulate
[App Store Connect][app-store-connect] with
[their RESTful APIs][app-store-connect-api].

This library is designed for being used on [Deno] typescript platform. It's
behavior is not tested on any other typescript platforms such as Node.js, bun,
and etc.

## Usage

```typescript
import {
  apiConfigOf,
  AppStoreConnectClient,
} from '@fenv-org/app-store-connect';

const client = new AppStoreConnectClient(
  apiConfigOf({
    issuerId: 'issuer-id',
    keyId: 'key-id',
    privateKey: 'private-key',
  }),
);

const apps = await client.apps.getCollection({
  'filter[bundleId]': ['com.example.app'],
});

const versions = await client.apps.appStoreVersionsGetToManyRelated(
  apps.data[0].id,
);
```

Where and how to get the API key can be found
[here][creating_api_keys_for_app_store_connect_api].

## Special thanks to

- [swagger-typescript-api](https://www.npmjs.com/package/swagger-typescript-api):
  Used to code generation from Open API specifications.
- [jose](https://www.npmjs.com/package/jose): Used to authentication

<!-- external links -->

[app-store-connect]: https://appstoreconnect.apple.com/
[app-store-connect-api]: https://developer.apple.com/documentation/appstoreconnectapi
[creating_api_keys_for_app_store_connect_api]: https://developer.apple.com/documentation/appstoreconnectapi/creating_api_keys_for_app_store_connect_api
[deno]: https://deno.com/
