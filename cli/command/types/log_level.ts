import type { ArgumentValue } from '@cliffy/command';

export function logLevelType(
  { label, name, value }: ArgumentValue,
): 'DEBUG' | 'INFO' {
  switch (value.toLowerCase()) {
    case 'debug':
      return 'DEBUG';
    case 'info':
      return 'INFO';
    default:
      throw new Error(
        `${label} "${name}" must be a valid log level, but got "${value}". ` +
          'Possible values are: debug, info.',
      );
  }
}
