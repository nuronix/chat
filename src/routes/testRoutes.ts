import { Router } from 'express';
import { Request, Response } from "express";

const testRoute = Router();

testRoute.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server 1");
});
export { testRoute }