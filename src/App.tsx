import AppDomain from './AppDomain.tsx'
import GenesisDomain from './genesis/GenesisDomain.tsx'
import { GenesisProvider } from './genesis/context.ts'
import type { Genesis } from './genesis/type.ts'
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { useState } from 'react';

const address = import.meta.env.VITE_CONVEX_URL as string;
const address2 = import.meta.env.VITE_CONVEX_URL2 as string;

const convexApp = new ConvexReactClient(address);
const convexGenesis = new ConvexReactClient(address2);

export default function App() {
  const [g, setG] = useState<Genesis>({})
  const receiveGenesis = (refreshG: Genesis) => {
    console.log('==refreshG trigger==')
    setG(refreshG)
  }
  return (
    <>
      <ConvexProvider client={convexGenesis}>
        <GenesisDomain notifier={receiveGenesis} />
      </ConvexProvider>
      <ConvexProvider client={convexApp}>
        <GenesisProvider g={g}>
          <AppDomain />
        </GenesisProvider>
      </ConvexProvider>
    </>
  )
}