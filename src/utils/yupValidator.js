import * as yup from "yup";
import { ErrorConstants } from "../constants/error-constants";

const { USERNAME_REQUIRED_MSG, PASSWORD_REQUIRED_MSG } = ErrorConstants.ACCOUNT;
export const loginSchema = yup.object().shape({
  Username: yup.string().required(USERNAME_REQUIRED_MSG),
  Password: yup.string().required(PASSWORD_REQUIRED_MSG),
});
