import * as log from '@std/log';

const loggerName = 'app-store-connect';

/**
 * The default logger for the library.
 */
export function logger(): log.Logger {
  return _logger;
}

let _logger = log.getLogger(loggerName);

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
        'app-store-connect': {
          level: logLevel,
          handlers: ['console'],
        },
      },
    });
    _logger = log.getLogger(loggerName);
  }
}
