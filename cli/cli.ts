#!/usr/bin/env -S deno run -A

import { rootCommand } from './command/root.ts';

async function main(args: string[]): Promise<void> {
  await rootCommand.parse(args);
}

if (import.meta.main) await main(Deno.args);
