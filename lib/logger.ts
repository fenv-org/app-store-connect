import * as log from '@std/log';

const loggerName = 'app-store-connect';

/**
 * The default logger for the library.
 */
export let logger = log.getLogger(loggerName);

/**
 * Sets up the default logger for the library.
 */
export function setupLogger({ logLevel }: { logLevel?: 'DEBUG' | 'INFO' }) {
  if (logLevel) {
    log.setup({
      handlers: {
        console: new log.ConsoleHandler(logLevel, {
          formatter: (record) => `[${record.levelName}] ${record.msg}`,
          useColors: true,
        }),
      },
      loggers: {
        loggerName: {
          level: logLevel,
          handlers: ['console'],
        },
      },
    });
  }
  logger = log.getLogger(loggerName);
}
