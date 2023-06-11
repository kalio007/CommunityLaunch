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

function ConnectWalletMobile() {
    const { address, isConnected } = useAccount()
    const { data: ensName } = useEnsName({ address })
    const { connect } = useConnect({
      connector: new InjectedConnector(),
    })
  return (
    <WagmiConfig config={config}>
      <div className='flex md:hidden mb-10 envy m-0  opacity-100 bg-[#202020] p-2 text-white text-center border-[#FFFFFF] border-[1px] text-[2xl]'>
        <button
            className=''
            onClick={() => connect()}
        >
          Connect Walllet
        </button>
           
    </div>
    </WagmiConfig>
  )
}

export default ConnectWalletMobile