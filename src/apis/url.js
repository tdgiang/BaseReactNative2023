export const root = 'https://apigw.dcvfinance.com/api/';

export default {
  // user
  checkPhoneNumber: `${root}app/auth/checkPhone`,

  verifyOTP: `${root}app/auth/checkOtp`,

  signUp: `${root}app/auth/loginNewUser`,

  login: `${root}app/auth/login`,

  logout: `${root}app/auth/logout`,
};
