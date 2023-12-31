import {hero, hello}  from './Assests';
import DepositBtn from './Components/DepositBtn';
import EthAmount from './Components/EthAmount';
import Trx from './Components/Trx';
import SwitchToArbMobile from './Components/SwitchToArbMobile';
// import { configureChains, mainnet } from 'wagmi'
// import { publicProvider } from 'wagmi/providers/public'
// import { WagmiConfig, createConfig } from 'wagmi'
// import { useAccount, useConnect, useEnsName } from 'wagmi'
// import { InjectedConnector } from 'wagmi/connectors/injected'
import ConnectWallet from './Components/ConnectWallet';
//import ConnectWalletMobile from './Components/ConnectWalletMobile';



function App() {
  
  return (
    <body className=' bg-[#4D5861]'>

      <div className='hidden md:block'>
      <ConnectWallet/>
      </div>
    
      
    <div className='flex flex-col envy space-y-6 h-full w-[320px] md:w-[420px] z-6 items-center mx-auto mt-40'>
      <div className='block md:hidden'>
      <ConnectWallet/>
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
      <DepositBtn/>
      <div className='flex-start'>
      <Trx/>
    </div>
    </div>
    
    <div className='hidden md:w-[627px] md:h-[396px] md:block illustration '>
    <img src={hello} alt='background ' className='w-full h-full'/>
    </div>
    <div className='md:hidden illustration-two '>
    <img src={hello} />
    </div>
    </body>
    
  )
}

export default App
