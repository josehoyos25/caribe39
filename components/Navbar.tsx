import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-black">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/caribe.png"
            alt="Caribe Logo"
            width={250}
            height={80}
            className="object-contain"
          />
        </Link>

        <div className="flex space-x-8">
          <Link href="/" className="text-white hover:text-gray-400">
            Condución
          </Link>
          <Link href="/" className="text-white hover:text-gray-400">
            Cotiza tu Renault
          </Link>
          <Link href="/" className="text-white hover:text-gray-400">
            Pagos
          </Link>
          <Link href="/" className="text-white hover:text-gray-400">
            Promociones
          </Link>
          <Link href="/" className="text-white hover:text-gray-400">
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
