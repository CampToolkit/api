type RelationKeys<T> = {
  [K in keyof T]: T[K] extends Array<any>
    ? K
    : T[K] extends object | null
      ? T[K]
      : never;
};

export type EntityIncludes<T> = Extract<RelationKeys<T>[keyof T], string>;
