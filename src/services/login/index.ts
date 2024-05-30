import api from "../api";

export const login = async (registration: string) => {
    const response = await api.post("/auth/loginEmployee", { registration });
    return response;
};

