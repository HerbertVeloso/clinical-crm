import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { setCookie, parseCookies } from "nookies";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T>(
  key: string,
  initialState: any
): Response<T> {
  const [state, setState] = useState(() => {
    const cookies = parseCookies();

    if (cookies[key]) {
      return JSON.parse(cookies[key]);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    setCookie(undefined, key, JSON.stringify(state), {
      maxAge: 60 * 60 * 24 * 30 * 12, // 1 ano
    });
  }, [key, state]);

  return [state, setState];
}
