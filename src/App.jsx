// import  {hero}  from './Assests';
import {hero, ill}  from './Assests';
import DepositBtn from './Components/DepositBtn';
import EthAmount from './Components/EthAmount';


function App() {


  return (
    <body>
      <div className='flex flex-col envy space-y-6 h-full w-[320px] md:w-[420px] z-6 items-center mx-auto mt-40'>
      <div className='flex flex-col md:flex-row w-full md:w-[400px] justify-between text-[#DFF314]'>
        <div className='underline underline-offset-4 italic '><h3>commnity round detail</h3></div>
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
    <DepositBtn />
    </div>
    <div className='hidden md:block illustration'>
    <img src={ill} alt='background'/>
    </div>
    <div className='md:hidden illustration-two '>
    <img src={ill} />
    </div>
    </body>
    

  )
}

export default App
