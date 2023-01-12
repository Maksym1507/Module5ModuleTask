import { makeAutoObservable } from "mobx";
import * as employeeApi from "../../api/modules/employees";
import { ICreateUpdateEmployee } from "../../interfaces/createUpdateEmployee";
import { IEmployee } from "../../interfaces/employees";

class EmployeeListStore {
  employees: IEmployee[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  async createEmployee(employee: ICreateUpdateEmployee) {
    const result = await employeeApi.createEmployee(employee);
    this.employees.push(result);
  }

  async updateEmployee(employee: ICreateUpdateEmployee, id: number) {
    const result = await employeeApi.updateEmployee(employee, id);
    this.employees[this.employees.findIndex((f) => +f.id === id)] = result;
  }

  deleteEmployee(id: string) {
    this.employees.splice(
      this.employees.findIndex((f) => f.id === id),
      1
    );
  }
}

export default EmployeeListStore;
