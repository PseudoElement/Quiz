import { CookiesKeys } from "../enums/cookiesKeys";

export function setCookie(name: keyof typeof CookiesKeys, value: string, expiration: Date = new Date(Date.now() + 6.048e8)): void {
     document.cookie = `${name}=${value}; expires=${expiration}; path=/`;
}
export function getCookie(name: keyof typeof CookiesKeys): string | null {
     const cookieValue = document.cookie
          .split("; ")
          .find((row) => row.startsWith(name))
          ?.split("=")[1];
     return cookieValue ?? null;
}

export function deleteCookie(name: keyof typeof CookiesKeys): void {
     document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;`;
}
