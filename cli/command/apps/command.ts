import { Command, EnumType } from '@cliffy/command';
import { logger } from '../../../lib/logger.ts';
import { AppStoreVersionState } from '../../../mod.ts';

const listCommand = new Command()
  .description(
    'Find and list apps in App Store Connect.\n' +
      'See also: https://developer.apple.com/documentation/appstoreconnectapi/list_apps',
  )
  .type('appStoreVersionState', new EnumType(AppStoreVersionState))
  .type('appVersionState', new EnumType(AppStoreVersionState))
  .option(
    '--limit <number:number>',
    'The maximum number of resources to return. Maximum 200. Default 10.',
    {
      default: 10,
    },
  )
  .option(
    '--bundle-id <string:string>',
    'A filter that limits the resources to the one that matches ' +
      'the specified bundle ID. Can be repeated.',
    {
      collect: true,
    },
  )
  .option(
    '--id <string:string>',
    'A filter that limits the resources to the one that matches ' +
      'the specified app ID. Can be repeated.',
    {
      collect: true,
    },
  )
  .option(
    '--name <string:string>',
    'A filter that limits the resources to the one that matches ' +
      'the specified app name. Can be repeated.',
    {
      collect: true,
    },
  )
  .option(
    '--sku <string:string>',
    'A filter that limits the resources to the one that matches ' +
      'the specified SKU. Can be repeated.',
    {
      collect: true,
    },
  )
  .option(
    '--app-store-version <string:string>',
    'A filter that limits the resources to the one that matches ' +
      'the specified app store version. Can be repeated.',
    {
      collect: true,
    },
  )
  .option(
    '--app-store-version-state <string:appStoreVersionState>',
    'A filter that limits the resources to the one that matches ' +
      'the specified app store version state. Can be repeated.',
    {
      collect: true,
    },
  )
  .option(
    '--app-version-state <string:appVersionState>',
    'A filter that limits the resources to the one that matches ' +
      'the specified app version state. Can be repeated.',
    {
      collect: true,
    },
  )
  .action((options) => {
    logger().info('List apps', options);
  });

export const appsCommand = new Command()
  .description(
    'An apps resource represents your app that’s currently in development, ' +
      'or available on the App Store through the App Store Connect website. ' +
      'Use the apps resource to manage and maintain your existing apps.\n' +
      'See also: https://developer.apple.com/documentation/appstoreconnectapi/app_store/apps',
  )
  .command('list', listCommand);
