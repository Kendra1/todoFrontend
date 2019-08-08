import BaseApiService from "./BaseApiService";
import Token from "../../model/Token";

const ENDPOINTS = {
  LOGIN: "/login",
  REGISTER: "/register"
  // ME: '/users/show',
  // FORGOT_PASSWORD: '/auth/forgot-password',
  // RESET_PASSWORD: '/auth/reset-password',
};
console.log(process.env);
class AuthService extends BaseApiService {
  constructor(props) {
    super(props);

    const token = this.getToken();

    if (token) {
      this.attachAuthHeader(token.value);
    }
  }

  login = async loginData => {
    const { data } = await this.apiClient.post(ENDPOINTS.LOGIN, loginData);
    const token = new Token(data);

    this.createSession(token);

    return token;
  };

  logout = async () => {
    this.destroySession();

    return new Promise(resolve => setTimeout(resolve, 1000));
  };

  register = async registerData => {
    const registerResponse = await this.apiClient.post(
      ENDPOINTS.REGISTER,
      registerData
    );

    return registerResponse;
  };

  // me = async () => {
  //   const response = await this.apiClient.get(ENDPOINTS.ME);

  //   const user = new User(response.data);

  //   return user;
  // };

  // requirePasswordResetLink = async forgotPasswordData => {
  //   const linkRequestResponse = await this.apiClient.post(
  //     ENDPOINTS.FORGOT_PASSWORD,
  //     forgotPasswordData,
  //   );

  //   return linkRequestResponse;
  // };

  // resetPassword = async resetPasswordData => {
  //   const resetPasswordResponse = await this.apiClient.put(
  //     ENDPOINTS.RESET_PASSWORD,
  //     resetPasswordData,
  //   );

  //   return resetPasswordResponse;
  // };

  createSession = token => {
    console.log(token);
    this.tokencic = JSON.stringify(token);
    localStorage.setItem("token", this.tokencic);

    this.attachAuthHeader(token.value);
  };

  destroySession = () => {
    localStorage.removeItem("token");

    this.removeAuthHeader();
  };

  attachAuthHeader = token => {
    this.http.attachHeaders({
      Authorization: `Bearer ${token}`
    });
  };

  removeAuthHeader = () => {
    this.http.removeHeaders(["Authorization"]);
  };

  getToken = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    return token ? new Token(token) : null;
  };

  check = () => !!localStorage.getItem("token");
}

export default new AuthService();
