import apiClient from "../client";

export const getUserById = (id: string) =>
  apiClient({
    path: `users/${id}`,
    method: "GET",
  });

export const getUsersByPage = (page: number) =>
  apiClient({
    path: `users?page=${page}`,
    method: "GET",
  });
