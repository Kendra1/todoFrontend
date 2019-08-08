import BaseApiService from "./BaseApiService";
import Token from "../../model/Token";

const ENDPOINTS = {
  LOGIN: "/login",
  REGISTER: "/register",
  TODOS: "/todo"
};
class AuthService extends BaseApiService {
  constructor(props) {
    super(props);

    const token = this.getToken();

    if (token) {
      this.attachAuthHeader(token.value);
    }
  }

  login = async loginData => {
    const loginResponse = await this.apiClient.post(ENDPOINTS.LOGIN, loginData);
    const token = new Token(loginResponse.data);

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

  createSession = token => {
    localStorage.setItem("token", JSON.stringify(token));

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
