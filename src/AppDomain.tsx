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
        <a>
          <svg className="logo react" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 409.6000061035156 409.6000061035156">
            <path d="M0 0h187.735v187.735H0zM375.465 221.87H256c-18.765 0-34.135 15.365-34.135 34.13v119.47c0 18.77 15.37 34.13 34.135 34.13h119.465c18.77 0 34.135-15.36 34.135-34.13V256c0-18.765-15.365-34.13-34.135-34.13zM315.735 0c-51.835 0-93.87 42.035-93.87 93.885 0 51.814 42.035 93.85 93.87 93.85 51.83 0 93.865-42.035 93.865-93.85C409.6 42.035 367.565 0 315.735 0zM102.4 221.87L0 409.6h204.8z" fill="#00ff00"></path>
          </svg>
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
