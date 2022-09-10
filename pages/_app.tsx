import '../styles/globals.css'
import MainLayout from '../layout/main'
import type { AppProps } from 'next/app'
import { WagmiConfig, createClient, chain } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

const alchemyId = process.env.ALCHEMY_ID;

// Choose which chains you'd like to show
const chains = [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum, chain.goerli];

const client = createClient(
  getDefaultClient({
    appName: "Auctioneer",
    alchemyId,
    chains,
  }),
);

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <WagmiConfig client={client}>
    <ConnectKitProvider>
  <MainLayout>
  <Component {...pageProps} />
  </MainLayout>
    </ConnectKitProvider>
    </WagmiConfig>
  </>
}

export default MyApp
