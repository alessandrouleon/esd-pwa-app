import api from "../api";

export const login = (registration: string) => {
    return api.post("/auth/loginEmployee", {registration});
}

