#!/usr/bin/env -S deno run -A

import { decodeBase64 } from '@std/encoding/base64';
import { decoder } from '../lib/io/encoder.ts';
import { stdout } from '../lib/io/standard_io.ts';
import * as app_store_connect from '../mod.ts';

const ISSUER_ID = Deno.env.get('ISSUER_ID')!;
const API_KEY = Deno.env.get('API_KEY')!;
const PRIVATE_KEY = Deno.env.get('PRIVATE_KEY')!;

async function main() {
  stdout(`ISSUER_ID: ${ISSUER_ID}`);
  stdout(`API_KEY: ${API_KEY}`);
  stdout(`PRIVATE_KEY: ${PRIVATE_KEY}`);
  const configuration = app_store_connect.createConfiguration({
    issuerId: ISSUER_ID,
    keyId: API_KEY,
    privateKey: decoder.decode(decodeBase64(PRIVATE_KEY)),
  });
  const client = new app_store_connect.AppStoreConnectClient(configuration);
  const response = await client.apps.getInstance('');
  stdout(JSON.stringify(response, null, 2));
}

if (import.meta.main) await main();
