import { AuthChecker } from "type-graphql/dist/interfaces/AuthChecker";
import { Hero } from "../entities/hero";

export const authChecker: AuthChecker<Hero> = (
    { root, args, context, info },
    roles,
) => {
    // here we can read the user from context
    // and check his permission in the db against the `roles` argument
    // that comes from the `@Authorized` decorator, eg. ["ADMIN", "MODERATOR"]

    return true; // or false if access is denied
};


/*
export const authChecker: AuthChecker<Hero> = ({ context: { id } }, roles) => {
    if (roles.length === 0) {
      // if `@Authorized()`, check only if user exists
      return id !== undefined;
    }
    // there are some roles defined now

    if (!id) {
      // and if no user, restrict access
      return false;
    }
    if (roles.some(role => roles.includes(role))) {
      // grant access if the roles overlap
      return true;
    }

    // no roles matched, restrict access
    return false;
  };
  */