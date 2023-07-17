import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex justify-between py-6">
      <Link  rel="preconnect" href="https://fonts.googleapis.com"></Link>
      <Link  rel="preconnect" href="https://fonts.gstatic.com" crossorigin></Link>
      <Link  href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Oxygen:wght@300;400&display=swap" rel="stylesheet"></Link>

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
