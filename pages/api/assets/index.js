export default async (req, res) => {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: 'This route only accepts GET requests' });
  }
  res.json((result: 'ok'));
};
