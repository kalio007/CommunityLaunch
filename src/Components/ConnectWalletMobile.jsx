import React, { useState } from 'react';
import SwitchToArbMobile from './SwitchToArbMobile';
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

function ConnectWalletMobile() {
    const [show, setShow] = useState(false);
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
      <div className='flex md:hidden mb-5 envy m-0  opacity-100 bg-[#202020] p-2 text-white text-center border-[#FFFFFF] border-[1px] text-[2xl]'>
        <button
            className=''
            onClick={handleClick}
        >
          Connect Walllet
        </button>   
    </div>
    <div>
    {show && (
        <SwitchToArbMobile/>
      )}
    </div>

    </WagmiConfig>
  )
}

export default ConnectWalletMobile