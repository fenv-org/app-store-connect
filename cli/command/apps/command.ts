import { Command } from '@cliffy/command';

export const appsCommand = new Command()
  .description(
    'An apps resource represents your app that’s currently in development, ' +
      'or available on the App Store through the App Store Connect website. ' +
      'Use the apps resource to manage and maintain your existing apps.\n' +
      'See also: https://developer.apple.com/documentation/appstoreconnectapi/app_store/apps',
  );
