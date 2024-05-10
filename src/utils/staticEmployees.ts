import Mariana from "../../src/assets/employees/emploiee.png"
interface Props {
    id: number;
    name: string;
    urlImage: string;
    registration: number;
    occupation: string;
}

export interface UserProps extends Props{}
export const StaticEmployees: Props[] = [
    {id: 1, name: "Ana Maria", urlImage: Mariana, registration: 12345, occupation: "Lider SMD"},
    {id: 2, name: "Matheus Castro", urlImage: "", registration: 556677, occupation: "Engenheiro"}
]