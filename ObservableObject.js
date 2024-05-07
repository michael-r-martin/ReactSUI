import React, { useState, useCallback } from 'react';

type StateValues = {
  [key: string]: any;
};

type StateSetters<T extends StateValues> = {
  [K in keyof T]: React.Dispatch<React.SetStateAction<T[K]>>;
};

export type ObservableObject<T extends StateValues> = {
  get: T;
  set: StateSetters<T>;
};

export function NewObservableObject<T extends StateValues>(initialValues: T): ObservableObject<T> {
  const [state, setState] = useState<T>(initialValues);

  const setters = Object.keys(initialValues).reduce((acc, key) => {
    const updateValue = (value: any) => {
      setState(prevState => ({
        ...prevState,
        [key]: typeof value === 'function' ? value(prevState[key]) : value,
      }));
    };
    return {
      ...acc,
      [key]: useCallback(updateValue, []),
    };
  }, {} as StateSetters<T>);

  const reset = useCallback(() => {
    setState(initialValues);
  }, [initialValues]);

  return {
    get: state,
    set: {
      ...setters,
      reset,
    },
  };
}