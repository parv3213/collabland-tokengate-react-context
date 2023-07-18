import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex justify-between py-6">
      <Link href="/">
        <Image src="/logo-white.svg" width={194} height={27} alt="Logo" />
      </Link>
      <div className="ml-auto">
        <ConnectButton />
      </div>
    </header>
  );
};

export default Header;
