import Link from "next/link";
import UserButton  from '@/components/UserButton';
import SearchField  from '@/components/SearchField';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-10 bg-card shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-5 px-5 py-3">
        <Link href="/" className='text-2xl font-bold text-primary'>
        dev<span className='text-gray-700 dark:text-white'>Sphere</span>
        </Link>
        <SearchField/>
        <UserButton className='sm:ms-auto'/> 
      </div>
    </div>
  );
};
export default Navbar;
