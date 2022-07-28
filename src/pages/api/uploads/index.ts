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

  // await new Promise((resolve, reject) => {
  //   form.parse(req, (err, fields, files) => {
  //     console.log(err, fields, files);
  //     if (err) reject(err);
  //     else resolve(files);
  //   });
  // });

  form.parse(req, async function (err, fields, files) {
    // await saveFile(files.file);
    console.log(files);
    return res.status(201).send('');
  });

  // return res.json({ message: 'Hello World' });
};
