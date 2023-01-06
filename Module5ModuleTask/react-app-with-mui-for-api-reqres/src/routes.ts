import Home from "./pages/Home";
import User from "./pages/User";

import { FC } from "react";
import ResourceList from "./pages/ResourceList";
import Resource from "./pages/Resource";
import CreateUser from "./pages/CreateUser";
import UpdateUser from "./pages/UpdateUser";
import NoMatchComponent from "./pages/NoMatch/NoMatch";

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
    key: "create-user-route",
    title: "Create user",
    path: "/createUser",
    enabled: true,
    component: CreateUser,
  },
  {
    key: "update-user-route",
    title: "Update user",
    path: "/updateUser",
    enabled: true,
    component: UpdateUser,
  },
  {
    key: "resource-list-route",
    title: "Resource List",
    path: "/resource",
    enabled: true,
    component: ResourceList,
  },
  {
    key: "resource-route",
    title: "Resource",
    path: "/resource/:id",
    enabled: false,
    component: Resource,
  },
  {
    key: "no-match-route",
    title: "No match",
    path: "*",
    enabled: false,
    component: NoMatchComponent,
  },
];
