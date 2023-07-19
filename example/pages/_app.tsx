import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import {
  RainbowKitProvider,
  darkTheme,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';
import { TokenGateProvider } from 'collabland-tokengate-react-context';
import type { AppProps } from 'next/app';
import { Inconsolata, M_PLUS_1_Code, Oxygen } from 'next/font/google';
import { WagmiConfig, configureChains, createConfig } from 'wagmi';
import {
  arbitrum,
  gnosis,
  goerli,
  mainnet,
  optimism,
  polygon,
  zora,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import '../styles/globals.css';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    goerli,
    polygon,
    optimism,
    arbitrum,
    zora,
    gnosis,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_NAME || '',
  projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || '',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

const colors = {
  general: {
    bg: '#000',
    link: '#3898FF',
    button: '#2A6462',
    success: '#1B8600',
    error: '#860000',
  },
};

const styles = {
  global: () => ({
    body: {
      bg: '#000',
      color: '#FFFFFF',
    },
  }),
};

const oxygen = Oxygen({
  subsets: ['latin'],
  weight: '400',
});
const mPlus1Code = M_PLUS_1_Code({
  subsets: ['latin'],
  weight: '400',
});
const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: '400',
});

const fonts = {
  oxygen: oxygen.style.fontFamily,
  mPlus1Code: mPlus1Code.style.fontFamily,
  inconsolata: inconsolata.style.fontFamily,
};

export const theme = extendTheme({ colors, styles, fonts });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains} theme={darkTheme()}>
            <TokenGateProvider>
              <div className={oxygen.className}>
                <Component {...pageProps} />
              </div>
            </TokenGateProvider>
          </RainbowKitProvider>
        </WagmiConfig>
      </ChakraProvider>
    </CacheProvider>
  );
}

export default MyApp;
