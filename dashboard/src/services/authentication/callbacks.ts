import { Callbacks } from "next-auth";
import { SessionBase } from "next-auth/_utils";
import { IAuthUser } from "./user";

interface Token {
  name?: string;
  email?: string;
  picture?: string; // url to image
  accessToken?: string;
  iat: number;
  exp: number;
}

interface Account {
  provider: string | null;
  type: string | null;
  id: number | null;
  refreshToken: string | null;
  accessToken: string | null;
  accessTokenExpires: null;
}

export const authCallback: Callbacks = {
  session: async (session: SessionBase, token: Token) => {
    const { iat, exp, accessToken, ...rest } = token;
    if (token.accessToken) {
      // TODO: Rewrite accessToken to access_token everywhere.
      (session as any).user.access_token = token.accessToken;
    } else {
      (session as any).user.access_token = undefined;
    }
    (session as any).user.profile = rest;
    return Promise.resolve(session);
  },
  jwt: async (token: Token, _: Token, account: Account, profile: IAuthUser) => {
    if (account && account.accessToken) {
      token.accessToken = account.accessToken;
    }
    return Promise.resolve({ ...token, ...profile });
  },
  isNewUser: (isNew) => {
    console.log(isNew);
  },
};
