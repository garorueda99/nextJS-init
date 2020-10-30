import { connectToDatabase } from '../../../lib/mongodb';
export default async (req, res) => {
  const { db } = await connectToDatabase();
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: 'This route only accepts GET requests' });
  }
  console.log('BODY:', req.body);
  const result = await db.collection('assets').insertOne(JSON.parse(req.body));
  console.log('RESULT', result);
  res.json({ result: 'ok' });
};
