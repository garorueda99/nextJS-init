import Iron from '@hapi/iron';
import CookieService from '../../../lib/cookie';

/**
 * This route checks if a user is autheticated
 */

export default async (req, res) => {
  if (req.method !== 'GET') {
    return res
      .status(405)
      .json({ message: 'This route only accepts GET requests' });
  }

  let userFromCookie;
  try {
    userFromCookie = await Iron.unseal(
      CookieService.getAuthToken(req.cookies),
      process.env.ENCRYPTION_SECRET,
      Iron.defaults
    );
  } catch (error) {
    res.status(401).end();
  }

  // now we have access to the data inside of user
  // and we could make database calls or just send back what we have
  // in the token.
  //   console.log('HERE USER ===>', user);
  res.json(userFromCookie);
};
