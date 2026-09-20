"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  // useRouter hook use to navigate
  const route = useRouter();

  return (
    <div className="w-full h-full flex flex-1 flex-col justify-center items-center bg-green-50">
      <p className="text-[100px] font-bold text-green-400">UPBRIGHT PVT LTD</p>
      <button onClick={() => route.push("/ModernUI")} className="bg-green-700 text-2xl text-white px-6 py-3 rounded-lg border-3 cursor-pointer border-green-500 my-6 hover:bg-green-500 font-bold">
        Modern-UI
      </button>
      <button onClick={() => route.push("/usestatepage")} className="bg-green-700 text-2xl text-white px-6 py-3 rounded-lg border-3 cursor-pointer border-green-500 my-6 hover:bg-green-500 font-bold">
        Use State - HOOKS
      </button>
      <Link href={"/about"} className="bg-green-700 text-2xl text-white px-6 py-3 rounded-lg border-3 border-green-500 my-6 hover:bg-green-500 font-bold">
        About US
      </Link>
      <button onClick={() => route.push("/about")} className="bg-green-700 text-2xl text-white px-6 py-3 rounded-lg border-3 cursor-pointer border-green-500 my-6 hover:bg-green-500 font-bold">
        About - Button
      </button>
      <Image alt="Upbright Logo" src={"/logo.png"} width={1000} height={1000}/>
    </div>
  );
}
