import { isEmpty } from 'src/validations';

// const deployDomain = ``;
const deployDomain = `/webadmin.taptapon.me-v2`;

export const PATHS = {
  root: isEmpty(deployDomain) ? `/` : `${deployDomain}`,
  dev: `${deployDomain}/dev`,
  signIn: `${deployDomain}/sign-in`,
  signUp: `${deployDomain}/sign-up`,

  home: `${deployDomain}/home`,
  overview: `${deployDomain}/overview`,
  users: `${deployDomain}/users`,

  orders: `${deployDomain}/orders`,
  myProfile: `${deployDomain}/me`,
};
