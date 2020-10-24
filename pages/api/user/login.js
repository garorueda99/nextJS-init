import { Magic } from '@magic-sdk/admin';
import Iron from '@hapi/iron';
import CookieService from '../../../lib/cookie';
// console.log('====>', CookieService);

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: 'This route only accepts POST requests' });
  }

  // exchange the did from Magic for some user data
  const did = req.headers.authorization.split('Bearer').pop().trim();
  const user = await new Magic(
    process.env.MAGIC_SECRET_KEY
  ).users.getMetadataByToken(did);

  // Author a couple of cookies to persist a user's session
  const encrypted_token = await Iron.seal(
    user,
    process.env.ENCRYPTION_SECRET,
    Iron.defaults
  );

  CookieService.setTokenCookie(res, encrypted_token);

  res.end();
};
