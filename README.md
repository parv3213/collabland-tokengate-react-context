# collabland-tokengate-react-context

## React Context Provider for Collab.Land's TokenGate APIs

[![NPM version][npm-image]][npm-url]
[![Build][github-build]][github-build-url]
![npm-typescript]
[![License][github-license]][github-license-url]

Token Gate React Context is a package that provides a React context for token gating users based on specific rules. It utilizes the Collab Land APIs to implement this functionality.


[**Live Demo**](https://collabland-tokengate-react-context.vercel.app/)

## Installation:
You can install the package using npm:
```bash
npm install collabland-tokengate-react-context --save-dev
```

or

```bash
yarn add -D collabland-tokengate-react-context
```

## Usage :

To use the Token Gate React Context, follow these steps:
1. Import the `TokenGateProvider` component from the package and wrap your React application or a specific component with the `TokenGateProvider` component-


```tsx
import { TokenGateProvider } from 'collabland-tokengate-react-context'

function App() {
  return (
    <TokenGateProvider>
      {/* Your app components */}
    </TokenGateProvider>
  );
}
)

```

2. Access the token gate state and methods within your components using the `TokenGateContext`-
```tsx
import { useContext } from "react";
import { TokenGateContext } from "collabland-tokengate-react-context";

function MyComponent() {
  const { checkRoles, result, isLoading, error } = useContext(TokenGateContext);

  // Use the checkRoles function, result, isLoading, and error as needed

  return (
    // Your component JSX
  );
}
```


## TokenGateProvider
The `TokenGateProvider` component is a context provider that encapsulates the logic for making API requests to the Collab Land API and manages the state related to token gating.



#### Props
- `children` (React.ReactNode): The components to be wrapped within the provider.

#### Context Value
The context value, `TokenGateContext`, provided by the `TokenGateProvider` component has the following properties:

- `checkRoles`: A function that accepts a `CheckRoleRequest` object and the Collab Land API key as parameters, and returns a promise. This function is used to make API requests to check the roles.
- `result`: An object that contains the result of the API request (called within `checkRoles`), i.e. an array of roles. Each role object in the array has the following properties:
    - `roleId`: A string representing the ID of the role.
    - `granted`: A boolean indicating whether the role is granted.
- `isLoading`: A boolean flag indicating whether the API request is in progress.
- `error`: An error object containing information about any errors that occurred.

Note: The `TokenGateProvider` component should be placed higher up in the component tree to ensure that the context is available to all components that need it.


[npm-url]: https://www.npmjs.com/package/collabland-tokengate-react-context
[npm-image]: https://img.shields.io/npm/v/collabland-tokengate-react-context
[github-license]: https://img.shields.io/github/license/parv3213/collabland-tokengate-react-context
[github-license-url]: https://github.com/parv3213/collabland-tokengate-react-context/blob/main/LICENSE
[github-build]: https://github.com/parv3213/collabland-tokengate-react-context/actions/workflows/publish.yml/badge.svg
[github-build-url]: https://github.com/parv3213/collabland-tokengate-react-context/actions/workflows/publish.yml
[npm-typescript]: https://img.shields.io/npm/types/collabland-tokengate-react-context
