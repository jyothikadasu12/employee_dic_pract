import type {Employee} from "./types";
const API_URL = import.meta.env.VITE_API_URL;
export async function getEmployee(): Promise<Employee[]> {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error("UNABLE TO LOAD EMPLOYEE");
    }
    const data: {users: Employee[]} = await response.json();

    return data.users;
}