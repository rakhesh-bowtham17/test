import { apiInstance } from "../api/axios-instance";
import { LOGIN_ENDPOINT } from "../constants/url-constants";

export default async function loginService(userCreds) {
  try {
    const response = await apiInstance.post(LOGIN_ENDPOINT, userCreds);
    return response;
  } catch (error) {
    return error.response;
  }
}
