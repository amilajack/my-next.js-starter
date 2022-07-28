// @ts-nocheck
import formidable from 'formidable-serverless';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const form = new formidable.IncomingForm();

  await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      console.log(err, fields, files);
      if (err) reject(err);
      else resolve(files);
    });
  });

  res.json({ message: 'Hello World' });
};
