import apiClient from "../client";

export const getResourceById = (id: string) =>
  apiClient({
    path: `unknown/${id}`,
    method: "GET",
  });

export const getResourcesByPage = (page: number) =>
  apiClient({
    path: `unknown?page=${page}`,
    method: "GET",
  });
