//import { ObjectType, Field } from 'type-graphql';
import { AuthChecker } from "type-graphql/dist/interfaces/AuthChecker";
//import { Hero } from "../entities/hero";
import { MyContext } from "./myContext.interface";


export const authChecker: AuthChecker<MyContext> = async ({ context }, roles, ) => {

  //console.log(context.req.headers.authorization)
  //console.log(roles)// vault
  //console.log(context.req)

  
  /*
  if (roles.some(role => roles.includes(role))) {
    //console.log(context.hero.roles)
    return true;
  }
  */
 
  // no roles matched, restrict access
  return false;
};
