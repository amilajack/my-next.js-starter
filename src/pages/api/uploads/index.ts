// @ts-nocheck
import formidable from 'formidable-serverless';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const form = new formidable.IncomingForm();
  const filesEntries = [];

  form.onPart = (part) => {
    part.on('data', (buffer) => {
      filesEntries.push([part.name!, buffer]);
    });
  };
  form.parse(req, async function (err, fields, files) {
    console.log(files, fields, filesEntries);
    return res.status(201).send('');
  });
};
