#!/usr/bin/env -S deno run -A

import * as app_store_connect from '../mod.ts';

async function main() {
  const configuration = app_store_connect.createConfiguration({
    issuerId: 'issuerId',
    apiKey: 'apiKey',
    privateKey: 'privateKey',
  });
  const client = new app_store_connect.AppStoreConnectClient(configuration);
  const response = await client.v1.appsGetInstance('id');
}

if (import.meta.main) await main();
