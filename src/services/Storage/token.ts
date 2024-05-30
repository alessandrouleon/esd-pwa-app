const TOKEN_NAME = "@auth:esd";
const REGISTRATION_NAME = "@registration-name:esd";

export const LocalStorageToken = {
  setLocalStorageToken: (token: string) =>
    localStorage.setItem(TOKEN_NAME, token),
  setLocalStorageName: (registration: string) => localStorage.setItem(REGISTRATION_NAME, registration),

  getLocalStorageToken: (): string | null => localStorage.getItem(TOKEN_NAME),
  getLocalStorageRegistration: (): string | null => localStorage.getItem(REGISTRATION_NAME),

  removeLocalStorageToken: () => localStorage.removeItem(TOKEN_NAME),
  removeLocalStorageRegistration: () => localStorage.removeItem(REGISTRATION_NAME),
};
