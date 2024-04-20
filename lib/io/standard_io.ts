import { writeAll, Writer } from 'jsr:@std/io@^0.221.0';
import { encoder } from './encoder.ts';

export function stdout(
  text: string,
  { lineFeed = true }: { lineFeed?: boolean } = {},
): Promise<void> {
  return output(Deno.stdout, text, { lineFeed });
}

export function stderr(
  text: string,
  { lineFeed = true }: { lineFeed?: boolean } = {},
): Promise<void> {
  return output(Deno.stderr, text, { lineFeed });
}

export async function output(
  writer: Writer,
  text: string,
  { lineFeed = true }: { lineFeed?: boolean } = {},
): Promise<void> {
  await writeAll(writer, encoder.encode(text + (lineFeed ? '\n' : '')));
}
