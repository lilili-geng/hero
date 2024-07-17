import Image from 'next/image';
import Heroimages from "@/assets/heroimages.png"

const Index = () => {
  return (
    <section
      className='h-full md:pt-[80px]  flex flex-col items-center  pt-[160px]'>
      <div className="flex flex-col relative">
        <div className="mx-auto max-w-xs text-center text-xl font-semibold   md:max-w-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF3BFF] via-[#ECBFBF] to-[#D94FD5]">
          A Fast Blockchain.
        </div>
        <div className="mx-auto max-w-xs mt-2 text-center text-xl font-semibold  text-white md:max-w-4xl md:text-5xl">
          Scalable AI.
        </div>
        <div className="text-white mt-9 text-center md:max-w-2xl max-w-md px-6 sm:px-10">
          Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data security. Proof of Stake, its consensus algorithm enables unlimited speeds.
        </div>
      </div>
      <div className="mt-6 w-[370px] h-[70px] bottom-[465] text-white z-10 flex">
        <div className="w-[176px] h-[60px] rounded-[100px] text-[20px]  bg-gradient-to-r from-[#FF3BFF] via-[#ECBFBF] to-[#5C24FF] p-1 mr-6">
          <div className='w-full h-full bg-black rounded-[100px] flex flex-row justify-center items-center '>
            Get started
          </div>
        </div>
        <div className="w-[176px] h-[60px] rounded-[100px] text-[20px] bg-white p-1">
          <div className='w-full h-full bg-black rounded-[100px] flex flex-row justify-center items-center '>
            Ecosystems
          </div>
        </div>
      </div>
      <div className="w-full  flex justify-center items-end">
        <div className="fixed bottom-0 w-full flex justify-center items-center">
          <Image
            src={Heroimages}
            alt="heroimages"
            height={380}
          />
        </div>
      </div>
    </section>
  );
};

export default Index;
