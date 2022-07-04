import { createContext } from "react";

export interface IAuthContext {
  authToken?: string | null;
  setAuthToken: (token: string) => void;
}

export const AuthContext = createContext<IAuthContext>({
  authToken: "",
  setAuthToken() {},
});
