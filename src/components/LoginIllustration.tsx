import Image from 'next/image'

export default function LoginIllustration() {
  return (
    <div className='relative h-[300px] w-[430px] shrink-0 scale-[0.55] xs:scale-75 md:scale-100'>
        <div className='absolute z-10 top-[45px] right-10 h-[115px] w-[170px] bg-[#8fc5f5] px-[15px] py-[18px]'>
            <div className='mb-2 text-center text-[8px] text-white'>Sign In</div>
            <div className='mb-1.5 h-[11px] w-full bg-white'/>
            <div className='mb-1.5 h-[11px] w-full bg-white'/>
            <div className='mx-auto my-2 h-[13px] w-[75px] bg-login text-center text-[7px] leading-[13px] text-white'>Login</div>
        </div>
        <div className='absolute bottom-0 right-20'>
            <Image
            src={"/logo.png"}
            alt='logo'
            width={300}
            height={300}
            />
        </div>
    </div>
  )
}
