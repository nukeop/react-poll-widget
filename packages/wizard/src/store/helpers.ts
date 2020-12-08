import { Loadable } from "./types";

export const loadableDefaultState = <T>(initialData: T): Loadable<T> => ({
  data: initialData,
  isReady: false,
  isLoading: false,
  hasError: false
});