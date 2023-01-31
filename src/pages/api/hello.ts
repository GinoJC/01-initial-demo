import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
  age: number;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe', age: 21 });
}
