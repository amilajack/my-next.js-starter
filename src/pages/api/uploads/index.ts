// @ts-nocheck
// import formidable from 'formidable-serverless';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  req.rawBody = '';
  req.setEncoding('utf8');

  req.on('data', function (chunk) {
    req.rawBody += chunk;
  });

  req.on('end', function () {
    console.log(req.rawBody.length);
    return res.status(201).send(req.rawBody.length);
  });

  // form.onPart = (part) => {
  //   part.on('data', (buffer) => {
  //     filesEntries.push([part.name!, buffer]);
  //   });
  // };
  // form.parse(req, async function (err, fields, files) {
  //   console.log(files, fields, filesEntries);
  //   return res.status(201).send('');
  // });
};
