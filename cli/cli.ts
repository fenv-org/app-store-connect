#!/usr/bin/env -S deno run -A

import * as app_store_connect from '../mod.ts';

async function main() {
  const configuration = app_store_connect.createConfiguration({
    issuerId: 'issuerId',
    apiKey: 'apiKey',
    privateKey: 'privateKey',
  });
  const client = new app_store_connect.AppStoreConnectClient(configuration);
  const response = await client.apps.appsGetInstance('');
  client.appStoreVersions.appStoreVersionsCreateInstance({
    data: {
      type: 'appStoreVersions',
      attributes: {
        platform: app_store_connect.Platform.IOS,
        versionString: '1.0',
        releaseType: 'MANUAL',
      },
      relationships: {
        app: {
          data: {
            type: 'apps',
            id: 'appId',
          },
        },
      },
    },
  });
}

if (import.meta.main) await main();
