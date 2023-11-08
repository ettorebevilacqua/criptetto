import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req : NextApiRequest, res : NextApiResponse) {
  console.log('serve xx')
    res.status(200).json({ text: 'Hello' });
  }