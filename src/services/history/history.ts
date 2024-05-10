const REGISTRATION = "@registration:esd";


export const UserTokenHelper = {
  setLocalStorageRegistration: (registration: string) =>
    localStorage.setItem(REGISTRATION, registration),
  
  getLocalStorageRegistration: (): string | null =>
    localStorage.getItem(REGISTRATION),

  removeLocalStorageRegistration: () => localStorage.removeItem(REGISTRATION),

};
