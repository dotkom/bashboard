import { IAuthProfile } from "@services/authentication/user";
import NextAuth from "next-auth";
import AuthOptions from "@services/authentication/auth_config";

export default NextAuth(AuthOptions);
