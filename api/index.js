import request from "@/utils/request";

// auth
export function login() {
  return request.options("/auth/login", []);
}
export function registeUser(data) {
  return request.post("/auth/register", data);
}
export function forgotpass(data) {
  return request.post("/auth/forgotpass", data);
}
