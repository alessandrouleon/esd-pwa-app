import api from "../api";

export interface TesteEsdProps {
  employeeId: string;
  boot: string;
  bracelete: string;
}
export const createTesteEsd = async (data: TesteEsdProps) => {
  const response = await api.post("/testeEsd/", data );
  return response;
};
