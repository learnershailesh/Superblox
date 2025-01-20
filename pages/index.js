// app/page.tsx
'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { useWeb3React, Web3ReactProvider } from '@web3-react/core';
import { createWeb3ReactRoot } from '@web3-react/core';
import { MoralisProvider } from 'react-moralis';
import { NotificationContainer } from 'react-notifications';
import App from './App';
import getLibrary from './utils/getLibrary';
import ChainUpdater from './updaters/ChainUpdater';
import ApplicationUpdater from './updaters/ApplicationUpdater';
import TransactionUpdater from './updaters/TransactionUpdater';
import { injected } from './connectors';
import { MoralisAPIKey } from './constants';
import 'react-notifications/lib/notifications.css';
import '@fontsource/montserrat';
import '@fontsource/courier-prime';

// Create Web3ProviderNetwork only on client side
let Web3ProviderNetwork;
if (typeof window !== 'undefined') {
  Web3ProviderNetwork = createWeb3ReactRoot('network');
}

// Disable auto refresh on network change
if (typeof window !== 'undefined' && window.ethereum) {
  window.ethereum.autoRefreshOnNetworkChange = false;
}

// Updaters Component
function Updaters() {
  return (
    <>
      <ChainUpdater />
      <TransactionUpdater />
      <ApplicationUpdater />
    </>
  );
}

// Connect Wallet Component
const ConnectWallet = () => {
  const { account, activate } = useWeb3React();

  useEffect(() => {
    const connectWallet = async () => {
      if (!account) {
        try {
          await activate(injected);
        } catch (err) {
          console.error('Failed to connect wallet:', err);
        }
      }
    };

    connectWallet();
  }, [account, activate]);

  return null;
};

// Main Page Component
export default function Home({ initialData }) {
  // Return null or loading state if on server
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      {Web3ProviderNetwork ? (
        <Web3ProviderNetwork getLibrary={getLibrary}>
          <MoralisProvider
            appId={MoralisAPIKey.appId}
            serverUrl={MoralisAPIKey.serverUrl}
          >
            <Updaters />
            <ConnectWallet />
            <App initialData={initialData} />
            <NotificationContainer />
          </MoralisProvider>
        </Web3ProviderNetwork>
      ) : (
        // Fallback when Web3ProviderNetwork is not available
        <div>Loading Web3 Provider...</div>
      )}
    </Web3ReactProvider>
  );
}

// Data Fetching
export async function generateStaticProps() {
  try {
    const data = 'Fetching data'; // Replace with actual data fetching logic
    
    return {
      props: {
        initialData: data,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        initialData: null,
        error: 'Failed to fetch data',
      },
    };
  }
}
