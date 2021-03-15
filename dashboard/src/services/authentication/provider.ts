import { IAuthProfile } from "./user";

export const OnlineProvider = {
  id: "onlineweb4",
  name: "Onlineweb4",
  type: "oauth",
  version: "2.0",
  scope: "openid profile email onlineweb4",
  params: {
    grant_type: "authorization_code",
  },
  accessTokenUrl: "https://online.ntnu.no/openid/token",
  requestTokenUrl: '"https://online.ntnu.no/openid/authorize',
  authorizationUrl:
    "https://online.ntnu.no/openid/authorize?response_type=code",
  profileUrl: "https://online.ntnu.no/openid/userinfo",
  profile: (profile: IAuthProfile) => {
    return {
      ...profile,
      id: profile.sub,
      image: profile.picture,
      email: profile.email,
    };
  },
  clientId: process.env.OW_CLIENT_ID,
  clientSecret: process.env.OW_CLIENT_SECRET,
  debug: true,
  idToken: false,
};
