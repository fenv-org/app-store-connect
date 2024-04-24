export type DenoJsonc = {
  version: string;
};

export async function readDenoJsonc(): Promise<DenoJsonc> {
  return JSON.parse(await Deno.readTextFile('deno.jsonc')) as DenoJsonc;
}
