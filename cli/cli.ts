#!/usr/bin/env -S deno run -A

import { decodeBase64 } from '@std/encoding/base64';
import { decoder } from '../lib/io/encoder.ts';
import { stdout } from '../lib/io/standard_io.ts';
import { logger } from '../lib/logger.ts';
import * as app_store_connect from '../mod.ts';
import { rootCommand } from './command/root.ts';

// const ISSUER_ID = Deno.env.get('ISSUER_ID')!;
// const API_KEY = Deno.env.get('API_KEY')!;
// const PRIVATE_KEY = Deno.env.get('PRIVATE_KEY')!;

async function main(args: string[]) {
  await rootCommand.parse(args);

  logger().debug('Creating configuration...');
  // const configuration = app_store_connect.apiConfigOf({
  //   issuerId: ISSUER_ID,
  //   keyId: API_KEY,
  //   privateKey: decoder.decode(decodeBase64(PRIVATE_KEY)),
  // });
  // const client = new app_store_connect.AppStoreConnectClient(configuration);
  // const response = await client.apps.getCollection({ limit: 5 });
  // stdout(JSON.stringify(response, null, 2));
}

if (import.meta.main) await main(Deno.args);
