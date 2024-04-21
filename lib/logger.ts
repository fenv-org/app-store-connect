import * as log from '@std/log';

/**
 * The default logger for the library.
 */
export let logger = log.getLogger('app-store-connect');

/**
 * Sets up the default logger for the library.
 *
 * @param name The name of the logger.
 */
export function setupLogger(name: string, config: log.LogConfig) {
  log.setup(config);
  logger = log.getLogger(name);
}
