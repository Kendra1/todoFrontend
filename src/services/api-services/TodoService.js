import BaseApiService from "./BaseApiService";
import AuthService from "./AuthService";
import Token from "../../model/Token";

const ENDPOINTS = {
  TODOS: "/todo"
};

class TodoService extends BaseApiService {
  constructor(props) {
    super(props);

    const token = AuthService.getToken();

    if (token) {
      AuthService.attachAuthHeader(token.value);
    }
  }

  getTodos = async () => {
    const todosResponse = await this.apiClient.get(ENDPOINTS.TODOS);
    const todos = todosResponse.data;
    return todos;
  };

  makeTodo = async todoData => {
    const todosResponse = await this.apiClient.post(ENDPOINTS.TODOS, todoData);
    return todosResponse;
  };
}

export default new TodoService();
