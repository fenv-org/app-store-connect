import { Command } from '@cliffy/command';
import { setupLogger } from '../../lib/logger.ts';
import { setupApiClient } from '../client/client.ts';
import { appsCommand } from './apps/command.ts';
import { logLevelType } from './types/log_level.ts';

export const rootCommand = new Command()
  .name('app-store-connect-cli')
  .description('A CLI for the App Store Connect API')
  .version('0.0.1')
  .globalType('logLevel', logLevelType)
  .globalOption('--issuer-id <issuerId:string>', 'The issuer ID', {
    required: true,
  })
  .globalOption('--key-id <keyId:string>', 'The API key ID', {
    required: true,
  })
  .globalOption('--private-key <privateKey:string>', 'The private key', {
    required: true,
  })
  .globalOption('--base64', 'Decode the private key as base64')
  .globalOption(
    '--log-level <logLevel:logLevel>',
    'Enable logging. Possible values are: debug, info',
  )
  .globalAction(setupGlobal)
  .command(
    'apps',
    appsCommand.action((_) => {
    }),
  );

function setupGlobal(options: GlobalOptions) {
  setupLogger(options);
  setupApiClient(options);
}

type GlobalOptions = {
  issuerId: string;
  keyId: string;
  privateKey: string;
  base64?: true;
  logLevel?: 'DEBUG' | 'INFO';
};
