import { Hero } from "../entities/hero";
import { Request } from "express";


export interface MyContext {
  req: Request;
  hero?: Hero; 
}