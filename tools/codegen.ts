#!/usr/bin/env -S deno run -A

import $ from '@david/dax';
import { join } from 'jsr:@std/path@^0.221.0';
import { stderr } from '../lib/io/standard_io.ts';

const APP_STORE_CONNECT_OPENAPI_URL =
  'https://developer.apple.com/sample-code/app-store-connect/app-store-connect-openapi-specification.zip';

async function main(): Promise<void> {
  const tempDir = await Deno.makeTempDir();
  try {
    stderr('Downloading App Store Connect OpenAPI specification...');
    const openApiSpecFilePath = await getAppStoreConnectApiSpecification(
      tempDir,
    );

    const args = [
      'run',
      '--allow-all',
      'npm:swagger-typescript-api@13.0.3',
      '-o',
      'gen',
      '-n',
      'api.ts',
      '-p',
      openApiSpecFilePath,
      '--api-class-name',
      'AppStoreConnectClient',
      '--module-name-index',
      '1',
      '--unwrap-response-data',
    ];
    await $`deno ${args}`;
  } finally {
    await Deno.remove(tempDir, { recursive: true });
  }
}

async function getAppStoreConnectApiSpecification(
  dir: string,
): Promise<string> {
  const zipFilePath = join(dir, 'temp.zip');
  await $`curl -o ${zipFilePath} ${APP_STORE_CONNECT_OPENAPI_URL}`;
  await $`unzip -d ${dir} ${zipFilePath}`;
  return join(dir, 'openapi.json');
}

if (import.meta.main) await main();
