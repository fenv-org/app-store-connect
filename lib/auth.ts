import { importPKCS8, SignJWT } from 'npm:jose@5.2.4';

const alg = 'ES256';
const typ = 'JWT';
const audience = 'appstoreconnect-v1';
const expirationTime = '5m';

/**
 * Generates a bearer token for the App Store Connect API.
 */
export async function bearerToken({ issuerId, keyId, privateKey }: {
  issuerId: string;
  keyId: string;
  privateKey: string;
}): Promise<string> {
  const secret = await importPKCS8(privateKey, alg);
  const jwt = await new SignJWT({})
    .setProtectedHeader({ kid: keyId, alg, typ })
    .setIssuedAt()
    .setIssuer(issuerId)
    .setAudience(audience)
    .setExpirationTime(expirationTime)
    .sign(secret);
  return jwt;
}
