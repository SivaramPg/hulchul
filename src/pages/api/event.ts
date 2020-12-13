import { NextApiRequest, NextApiResponse } from 'next';

import dbConnect from '../../../utils/dbConnect';
import Event from '../../../models/Event';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();

  const event = new Event({
    locationIdentifier: 'mumbai',
    createdBy: 'Sivaram',
  });
  const savedEvent = await event.save();
  res.statusCode = 200;
  res.json({ savedEvent });
};
