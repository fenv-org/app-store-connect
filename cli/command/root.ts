import { Command } from '@cliffy/command';
import { setupLogger } from '../../lib/logger.ts';
import { logLevelType } from './types/log_level.ts';

export const rootCommand = new Command()
  .name('app-store-connect-cli')
  .description('A CLI for the App Store Connect API')
  .version('0.0.1')
  .type('logLevel', logLevelType)
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
  .action((options) => {
    setupLogger(options);
  });
