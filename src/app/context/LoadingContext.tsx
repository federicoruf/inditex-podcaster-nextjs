import React, { createContext, useState } from "react";

type loadingContextType = {
  loading: boolean;
  switchLoading: (value: boolean) => void;
};

const loadingContextDefaultValues: loadingContextType = {
  loading: false,
  switchLoading: () => {},
};

export const LoadingContext = createContext<loadingContextType>(loadingContextDefaultValues);

export const Loading = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(false);

  const switchLoading = (value: boolean) => {
    setLoading(value);
  };

  return (
    <LoadingContext.Provider value={{ loading, switchLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
