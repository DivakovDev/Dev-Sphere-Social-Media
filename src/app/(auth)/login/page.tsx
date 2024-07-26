import { Metadata } from "next";
import LoginForm from "./LoginForm";
import Link from "next/link";
import Image from "next/image";
import loginImage from "@/assets/login-image.jpg"

export const metadata: Metadata = {
    title: "Login",
  };

  const Page = () => {
    return (
      <main className="flex h-screen items-centers justify-center p-5">
        <div className="flex flex-row h-full max-h-[40rem] w-full max-w-[64rem] rounded-2xl overflow-hidden bg-card shadow-2xl">
          <div className="md:w-1/2 w-full space-y-10 overflow-y-auto p-10">
            <div className='space-y-1 text-center'>
              <h1 className='text-center text-3xl text-gray-700 font-bold'>Login to <span className='text-[#7c3aed]'>dev</span>Sphere</h1>
            </div>
            <div className='space-y-5'>
              <LoginForm/>
              <Link href="/signup" className='block text-center'>
              Don&apos;t have an account? <span className='hover:underline font-semibold'>Sign up</span></Link>
            </div>
          </div>
  
          <Image
            src={loginImage}
            alt="Login form image"
            className="w-1/2 hidden object-cover md:block"
          />
        </div>
      </main>
    );
  };
  export default Page;