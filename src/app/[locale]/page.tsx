import TopBar from '../components/top-bar/TopBar';
import Terminal from '../components/terminal/Terminal';

export default function HomePage() {

  return (
    <div className='h-[100%] w-[100%] flex flex-col bg-gradient-to-tl from-[#07001d] via-[#0d062b] to-[#290848]'>
      
      <div className="fixed top-0 left-0 w-full z-10  ">
        <TopBar />
      </div>
     
      <div className="h-full">
        <Terminal />  
      </div>
    </div>
  );
}
