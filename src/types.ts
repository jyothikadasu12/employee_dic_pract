
export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  company: {
    department: string;
  };
}

export type RequestState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "success"; employees: Employee[] };
