import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { WagmiConfig, createConfig, mainnet } from 'wagmi'
import { createPublicClient, http } from 'viem'
 
const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http()
  }),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <WagmiConfig config={config}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </WagmiConfig>,
)
