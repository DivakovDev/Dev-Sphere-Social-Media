import { Metadata } from "next";
import signupImage from "@/assets/signup-image.jpg";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sign Up",
};

const Page = () => {
  return (
    <main className="flex h-screen items-centers justify-center p-5">
      <div className="flex flex-row h-full max-h-[40rem] w-full max-w-[64rem] rounded-2xl overflow-hidden bg-card shadow-2xl">
        <div className="md:w-1/2 w-full space-y-10 overflow-y-auto p-10">
          <div className='space-y-1 text-center'>
            <h1 className='text-3xl font-bold'>Sign up to <span className='text-[#7c3aed]'>dev</span>Sphere</h1>
            <p className='text-muted-foreground'>
                A place where you can find and comunicate with other developers.
            </p>
          </div>
          <div className='space-y-5'>
            sign up form
            <Link href="/login" className='block text-center'>
            Already have an account? <span className='hover:underline font-semibold'>Log In</span></Link>
          </div>
        </div>

        <Image
          src={signupImage}
          alt="Login form image"
          className="w-1/2 hidden object-cover md:block"
        />
      </div>
    </main>
  );
};
export default Page;
