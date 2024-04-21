import * as log from '@std/log';
import { stderr } from './io/standard_io.ts';

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
export function setupLogger(
  { logLevel }: { logLevel?: 'DEBUG' | 'INFO' },
): void {
  if (logLevel) {
    log.setup({
      handlers: {
        console: new StderrConsoleHandler(logLevel, {
          formatter: function (record) {
            const buffer: string[] = [
              `[${record.levelName}] ${record.msg}`,
            ];
            if (record.args) {
              buffer.push(
                record.args
                  .map((arg) => {
                    if (typeof arg === 'string') {
                      return arg;
                    }
                    return JSON.stringify(arg, null, 2);
                  })
                  .join(' '),
              );
            }
            return buffer.join(' ');
          },
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

class StderrConsoleHandler extends log.ConsoleHandler {
  override log(msg: string): void {
    stderr(msg);
  }
}
