import { Config } from 'eslint/config';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyArray = any[];

export type InfiniteArray<T> = T | InfiniteArray<T>[];

export type AnyConfig = InfiniteArray<Config>;
