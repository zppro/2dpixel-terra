import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useQuery } from "convex/react";
import { GenericId as Id } from "convex/values";
import { api } from "./apis/api";
import { useGenesis } from "./genesis/context";

const worldId = import.meta.env.VITE_WORLD_ID as Id<"worlds">;

function AppDomain() {
  const g = useGenesis()
  const [count, setCount] = useState(0)
  const world = useQuery(api.worlds.read, { id: worldId });
  console.log('world=>', world)
  console.log('gensis in world', g.messages?.length)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {world?.name}
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default AppDomain
