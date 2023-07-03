"use client";
import React, { createContext, useState } from "react";

export type CheckRoleRequest = {
  account: string;
  rules: {
    id?: string;
    classifierGroup?: string;
    name?: string;
    description?: string;
    roleId?: string;
    minToken?: string;
    maxToken?: string;
    chainId?: number;
    tokenSymbol?: string;
    tokenId?: string;
    collectionName?: string;
    eventId?: string;
    contractAddress?: string;
    type?: string;
    scheme?: string;
    query?: string;
    variables?: {
      [additionalProperty: string]: any;
    };
    asset?: string;
    requiresMetadata?: boolean;
    version?: string;
  }[];
};

export type TokenGatingStatus = {
  id?: string;
  granted?: boolean;
};

export type TokenGateContextType = {
  checkRoles: (
    request: CheckRoleRequest,
    collablandApiKey: string
  ) => Promise<void>;
  result?: {
    roles?: TokenGatingStatus[];
  };
  isLoading: boolean;
  error: any;
};

export const TokenGateContext = createContext<TokenGateContextType>({
  checkRoles: async () => undefined,
  result: undefined,
  isLoading: false,
  error: undefined,
});

export const TokenGateProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] =
    useState<TokenGateContextType["isLoading"]>(false);
  const [result, setResult] =
    useState<TokenGateContextType["result"]>(undefined);
  const [error, setError] = useState<TokenGateContextType["error"]>(undefined);

  const checkRoles = async (
    request: CheckRoleRequest,
    collablandApiKey: string
  ): Promise<void> => {
    setIsLoading(true);
    setResult(undefined);
    setError(undefined);

    try {
      const body = JSON.stringify(request);

      const requestOptions: RequestInit = {
        method: "POST",
        headers: {
          "x-api-key": collablandApiKey,
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body,
        redirect: "follow",
      };

      const response = await fetch(
        "https://api.collab.land/access-control/check-roles",
        requestOptions
      );

      const result = await response.json();

      if (!response.ok) {
        const errorMessage = result?.error?.message || "Unknown error";
        throw new Error(errorMessage);
      }

      setResult(result);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TokenGateContext.Provider
      value={{
        checkRoles,
        result,
        isLoading,
        error,
      }}
    >
      {children}
    </TokenGateContext.Provider>
  );
};
