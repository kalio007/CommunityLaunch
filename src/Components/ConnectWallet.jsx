import React from 'react';
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
//hidden md:block real 
//w-[241px] h-[38px]  md:h-[47px]
function ConnectWallet() {
    const { address, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect } = useConnect({
      connector: new InjectedConnector(),
    })
  return (
    <WagmiConfig config={config}>
    <div className=' hidden md:block real envy m-0  opacity-100 bg-[#202020] py-2 px-4 text-white text-center border-[#FFFFFF] border-[1px] text-[2xl]'>
    <button
        className='opacity-100'
        onClick={() => connect()}
    >
      Connect Walllet
    </button>
    </div>
    </WagmiConfig>
  )
}

export default ConnectWallet