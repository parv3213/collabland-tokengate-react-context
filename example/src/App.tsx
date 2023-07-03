import { TokenGateContext } from "collabland-tokengate-react-context";
import React, { useContext } from "react";

function App() {
  const { checkRoles, isLoading, result, error } = useContext(TokenGateContext);
  console.log(isLoading, result, error);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div
        className="cursor-pointer rounded-sm bg-red-300 p-2"
        onClick={() =>
          checkRoles(
            {
              account: "0x41952AfBdb72ED6d83c67194375a8D45854f39d1",
              rules: [
                {
                  type: "ERC20",
                  chainId: 100,
                  minToken: "1",
                  contractAddress: "0x712b3d230F3C1c19db860d80619288b1F0BDd0Bd",
                  roleId: "001",
                },
              ],
            },
            // @ts-ignore
            process.env.VITE_COLLABLAND_KEY!
          )
        }
      >
        Check Role
      </div>
      {isLoading && <div>Loading...</div>}
      {result?.roles &&
        result?.roles.map((role) => {
          return (
            <div key={role.id}>
              Role:{role.id} - Granted:{String(role.granted)}
            </div>
          );
        })}
      {error && <div className="font-bold text-red-900">Error: {error}</div>}
    </div>
  );
}

export default App;
