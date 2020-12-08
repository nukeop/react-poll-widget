export type LoadableStatus = Partial<Record<
'isLoading' |
'isReady' |
'hasError',
boolean
>>;

export type Loadable<T> = LoadableStatus & {
  data?: T;
  error? : string;
}