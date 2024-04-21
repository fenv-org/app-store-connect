import { Command } from '@cliffy/command';
import { logger, setupLogger } from '../../lib/logger.ts';
import { setupApiClient } from '../client/client.ts';
import { appsCommand } from './apps/command.ts';
import { logLevelType } from './types/log_level.ts';

export const rootCommand = new Command()
  .name('app-store-connect-cli')
  .description('A CLI for the App Store Connect API')
  .version('0.0.1')
  .globalType('logLevel', logLevelType)
  .globalOption('--issuer-id <string:string>', 'The issuer ID', {
    required: true,
  })
  .globalOption('--key-id <string:string>', 'The API key ID', {
    required: true,
  })
  .globalOption(
    '--private-key <string:string>',
    'The private key. If this is encoded in base64, use the --base64 flag.',
    {
      required: true,
    },
  )
  .globalOption('--base64', 'Decode the private key as base64')
  .globalOption(
    '--api-unauthorized-retries <number:number>',
    'Number of retries for 401 unauthorized requests',
    {
      default: 3,
    },
  )
  .globalOption(
    '--api-server-error-retries <number:number>',
    'Number of retries for 5xx server error requests',
    {
      default: 3,
    },
  )
  .globalOption(
    '--log-level <logLevel:logLevel>',
    'Enable logging. Possible values are: debug, info',
  )
  .globalAction(setupGlobal)
  .command('apps', appsCommand);

function setupGlobal(options: GlobalOptions) {
  setupLogger(options);
  setupApiClient(options);
  logger().debug('Global options:', options);
}

type GlobalOptions = {
  issuerId: string;
  keyId: string;
  privateKey: string;
  base64?: true;
  logLevel?: 'DEBUG' | 'INFO';
  apiUnauthorizedRetries: number;
  apiServerErrorRetries: number;
};
