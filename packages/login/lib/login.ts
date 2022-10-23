import { serviceAuth } from "packages/service-auth/lib/service-auth";

export function login() {
  console.log(serviceAuth());

  return "Hello from login";
}
