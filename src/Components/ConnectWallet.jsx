import React, { useState } from 'react';
import SwitchToArb from './SwitchToArb';
import { configureChains, mainnet } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { WagmiConfig, createConfig } from 'wagmi'
import { useAccount, useConnect, useEnsName } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

 
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()],
)
const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
})

function ConnectWallet() {
    const [show, setShow] = useState(true);

    const { address, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect } = useConnect({
        connector: new InjectedConnector(),
      })
    const handleClick = () => {
        setShow(!show); 
        connect();
    }
    
  return (
    <WagmiConfig config={config}>
    <div className=' hidden md:block real envy m-0  opacity-100 bg-[#202020] py-2 px-4 text-white text-center border-[#FFFFFF] border-[1px] text-[2xl]'>
    <button
        className='opacity-100'
        onClick={handleClick}
    >
      Connect Walllet
    </button>
    </div>
    {show && (
        <SwitchToArb/>
      )}
    </WagmiConfig>
  )
}

export default ConnectWallet