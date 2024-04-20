#!/usr/bin/env -S deno run -A

import $ from '@david/dax';
import { join } from 'jsr:@std/path@^0.221.0';
import { stderr } from '../lib/io/standart_io.ts';

const OPENAPI_GENERATOR_CLI_URL =
  'https://repo1.maven.org/maven2/org/openapitools/openapi-generator-cli/7.5.0/openapi-generator-cli-7.5.0.jar';

const APP_STORE_CONNECT_OPENAPI_URL =
  'https://developer.apple.com/sample-code/app-store-connect/app-store-connect-openapi-specification.zip';

async function main(): Promise<void> {
  const tempDir = await Deno.makeTempDir();
  try {
    stderr('Downloading OpenAPI Generator CLI...');
    const executable = await getOpenApiGenerator(tempDir);

    stderr('Downloading App Store Connect OpenAPI specification...');
    const openApiSpecFilePath = await getAppStoreConnectApiSpecification(
      tempDir,
    );

    await $`java -jar ${executable} generate -i ${openApiSpecFilePath} -g typescript --additional-properties=platform=deno -o generated-src`;
  } finally {
    await Deno.remove(tempDir, { recursive: true });
  }
}

async function getOpenApiGenerator(dir: string): Promise<string> {
  const jarFilePath = join(dir, 'openapi-generator-cli.jar');
  await $`curl -o ${jarFilePath} ${OPENAPI_GENERATOR_CLI_URL}`;
  return jarFilePath;
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
