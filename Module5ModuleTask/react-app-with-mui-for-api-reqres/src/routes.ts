import Home from "./pages/Home";
import User from "./pages/User";

import { FC } from "react";
import ResourceList from "./pages/ResourceList";
import Resource from "./pages/Resource";
import CreateEmployee from "./pages/Employee/CreateEmployee";
import UpdateEmployee from "./pages/Employee/UpdateEmployee";
import NoMatchComponent from "./pages/NoMatch/NoMatch";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EmployeeList from "./pages/Employee/EmployeeList";

interface Route {
  key: string;
  title: string;
  path: string;
  enabled: boolean;
  component: FC<{}>;
}

export const routes: Array<Route> = [
  {
    key: "home-route",
    title: "Home",
    path: "/",
    enabled: true,
    component: Home,
  },
  {
    key: "user-route",
    title: "User",
    path: "/user/:id",
    enabled: false,
    component: User,
  },
  {
    key: "resource-list-route",
    title: "Resource List",
    path: "/resource",
    enabled: true,
    component: ResourceList,
  },
  {
    key: "employee-list-route",
    title: "Employee",
    path: "/employee",
    enabled: true,
    component: EmployeeList,
  },
  {
    key: "create-employee-route",
    title: "Create Employee",
    path: "/createEmployee",
    enabled: true,
    component: CreateEmployee,
  },
  {
    key: "update-employee-route",
    title: "Update employee",
    path: "employee/:id/updateEmployee",
    enabled: false,
    component: UpdateEmployee,
  },
  {
    key: "resource-route",
    title: "Resource",
    path: "/resource/:id",
    enabled: false,
    component: Resource,
  },
  {
    key: "login-route",
    title: "Login",
    path: "/login",
    enabled: true,
    component: Login,
  },
  {
    key: "register-route",
    title: "Register",
    path: "/register",
    enabled: true,
    component: Register,
  },
  {
    key: "no-match-route",
    title: "No match",
    path: "*",
    enabled: false,
    component: NoMatchComponent,
  },
];
