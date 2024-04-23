#!/usr/bin/env -S deno run -A

import { apiClient } from './client/client.ts';
import { rootCommand } from './command/root.ts';

async function main(args: string[]): Promise<void> {
  await rootCommand.parse(args);

  const apps = await apiClient().apps.getCollection({
    'filter[bundleId]': ['com.example.app'],
  });

  const versions = await apiClient().apps.appStoreVersionsGetToManyRelated(apps.data[0].id);
}

if (import.meta.main) await main(Deno.args);
