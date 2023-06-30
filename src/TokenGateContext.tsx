import React, { createContext, useState } from 'react'

export type CheckRoleRequest = {
  account: string
  rules: {
    id?: string
    classifierGroup?: string
    name?: string
    description?: string
    roleId?: string
    minToken?: string
    maxToken?: string
    chainId?: number
    tokenSymbol?: string
    tokenId?: string
    collectionName?: string
    eventId?: string
    contractAddress?: string
    type?: string
    scheme?: string
    query?: string
    variables?: {
      [additionalProperty: string]: any
    }
    asset?: string
    requiresMetadata?: boolean
    version?: string
  }[]
}

export type TokenGatingStatus = {
  id?: string
  granted?: boolean
}

export type TokenGateContextType = {
  checkRoles: (
    request: CheckRoleRequest,
    collablandApiKey: string,
  ) => Promise<void>
  result?: {
    roles?: TokenGatingStatus[]
  }
  isLoading: boolean
  error: any
}

export const TokenGateContext = createContext<TokenGateContextType>({
  checkRoles: async () => {},
  result: undefined,
  isLoading: false,
  error: undefined,
})

export const TokenGateProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState(undefined)
  const [error, setError] = useState<any>(undefined)

  const checkRoles = async (
    request: CheckRoleRequest,
    collablandApiKey: string,
  ) => {
    setIsLoading(true)
    setResult(undefined)
    setError(undefined)

    try {
      const body = JSON.stringify(request)

      const requestOptions = {
        method: 'POST',
        headers: {
          'x-api-key': collablandApiKey,
          accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body,
        redirect: 'follow' as RequestRedirect,
      }

      const response = await fetch(
        'https://api.collab.land/access-control/check-roles',
        requestOptions,
      )

      const result = await response.json()

      if (!response.ok)
        throw new Error(result?.error?.message || 'Unknown error')

      setResult(result)
    } catch (e: any) {
      setError(e.message)
    } finally {
      setIsLoading(false)
    }
  }

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
  )
}
