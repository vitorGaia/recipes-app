interface User {
  email: string;
}

export const setUserLocalStorage = ({ email }: User) => {
  localStorage.setItem('user', JSON.stringify({ email }));
};