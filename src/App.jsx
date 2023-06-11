import {hero, hello}  from './Assests';
import DepositBtn from './Components/DepositBtn';
import EthAmount from './Components/EthAmount';
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

function App() {
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  return (
    <body className=' bg-[#4D5861]'>
      <div className=' hidden md:block real envy m-0  w-[241px] h-[38px]  md:h-[47px] opacity-100 bg-[#202020] p-2 text-white text-center border-[#FFFFFF] border-[1px] text-[2xl]'>
        <button
            className='opacity-100'
            onClick={() => connect()}
        >
          Connect Walllet
        </button>
    </div>
      <WagmiConfig config={config}>
      <div className='flex flex-col envy space-y-6 h-full w-[320px] md:w-[420px] z-6 items-center mx-auto mt-40'>
      <div className='flex md:hidden mb-10 envy m-0  opacity-100 bg-[#202020] p-2 text-white text-center border-[#FFFFFF] border-[1px] text-[2xl]'>
        <button
            className=''
            onClick={() => connect()}
        >
          Connect Walllet
        </button>
    </div>
      <div className='flex flex-col m-0 p-0 md:flex-row w-full md:w-full justify-between text-[#DFF314]'>
        <div className='underline underline-offset-4 italic m-0 p-0'><h3>commnity round detail</h3></div>
        <div className='underline underline-offset-4 italic'><h3>unison docs</h3></div>
      </div>
      <div className='flex w-full justify-between bg-[#202020] border-[1px] border-white border-solid p-6'>
      <div className='text-xl md:text-3xl'>
        <h1><span className='text-[#DFF314]'>UNISON</span></h1>
        <h1 className='text-[#FFFF] italic envy'>
        COMMUNITY 
        <br/>
        ROUND</h1>
      </div>
      <div className='pt-2 md:pt-4'>
        <img src={hero} alt='hero' className='h-[85%] w-[85%] md:h-[100%] md:w-[100%] '/>
      </div>
      
        
      </div>
    <EthAmount/>
    {/* <DepositBtn /> */}
    <div className='w-full opac h-[38px] md:h-[47px] opacity-100 bg-[#050FFF] p-2 text-white text-center border-[#FFFFFF] border-[1px] text-[2xl]'>
        <button
            className='bg-[#050FFF] opacity-100'
            onClick={() => connect()}
        >
          DEPOSIT
        </button>
    </div>
    </div>
    <div className='hidden md:w-[627px] md:h-[396px] md:block illustration '>
    <img src={hello} alt='background ' className='w-full h-full'/>
    </div>
    <div className='md:hidden illustration-two '>
    <img src={hello} />
    </div>
    </WagmiConfig>
    </body>
    
  )
}

export default App
