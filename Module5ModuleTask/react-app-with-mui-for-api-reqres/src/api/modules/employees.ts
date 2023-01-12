import { ICreateUpdateEmployee } from "../../interfaces/createUpdateEmployee";
import apiClient from "../client";

export const createEmployee = (employee: ICreateUpdateEmployee) =>
  apiClient({
    path: `users`,
    method: "POST",
    data: employee,
  });

export const updateEmployee = (employee: ICreateUpdateEmployee, id: number) =>
  apiClient({
    path: `users/${id}`,
    method: "PUT",
    data: employee,
  });
