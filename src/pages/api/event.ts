import { NextApiRequest, NextApiResponse } from 'next';

import dbConnect from '../utils/dbConnect';
import Event from '../models/Event';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;

    if (method?.toLowerCase() === 'get') {
      await dbConnect();
      const events = await Event.find({});
      res.statusCode = 200;
      res.json({ data: events });
    } else if (method?.toLowerCase() === 'post') {
      await dbConnect();

      const { locationIdentifier, createdBy } = req.body;

      const event = new Event({
        locationIdentifier,
        createdBy,
      });
      const savedEvent = await event.save();
      res.statusCode = 200;
      res.json({ data: savedEvent });
    } else {
      throw Error('Not Found');
    }
  } catch (error) {
    res.status(500).json({ error: error.message || error });
  }
};
