import { Magic } from '@magic-sdk/admin';

let magic = new Magic(process.env.MAGIC_SECRET_KEY);

export default async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end();

  // exchange the DID from Magic for some user data
  const did = magic.utils.parseAuthorizationHeader(req.headers.authorization);
  const user = await magic.users.getMetadataByToken(did);

  // Author a couple of cookies to persist a users session
  // TODO

  res.end();
};
