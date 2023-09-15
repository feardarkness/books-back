import type { Request, Response } from "express";

interface Credentials {
  user: string;
  password: string;
}

const login = (req: Request, res: Response) => {
  const { user, password }: Credentials = req.body;
  res.json({
    user,
    password,
  });
};

export { login };
