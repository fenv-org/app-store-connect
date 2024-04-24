#!/usr/bin/env -S deno run -A

import { readDenoJsonc } from './deno_jsonc_utils.ts';

const versionRegex = /^v(\d+\.\d+\.\d+)/;
const fullRefRegex = /^refs\/tags\/v(\d+\.\d+\.\d+)/;

async function main(args: string[]): Promise<void> {
  if (args.length === 0) {
    console.error('Usage: check_version_tag.ts <tag>');
    Deno.exit(1);
  }

  let tag = args[0];
  if (versionRegex.test(args[0])) {
    tag = versionRegex.exec(args[0])![1];
  } else if (fullRefRegex.test(tag)) {
    tag = fullRefRegex.exec(tag)![1];
  } else {
    console.error(`Invalid tag: ${tag}`);
    Deno.exit(1);
  }

  console.log(`Checking version tag: ${tag}`);

  const denoJsonc = await readDenoJsonc();
  if (denoJsonc.version !== tag) {
    console.error(
      `Version tag ${tag} does not match deno.jsonc version ${denoJsonc.version}`,
    );
    Deno.exit(1);
  } else {
    console.log('Version tag is correct');
  }
}

if (import.meta.main) await main(Deno.args);
