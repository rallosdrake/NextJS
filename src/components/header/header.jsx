import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav>
        <Image
          width={30}
          height={30}
          className="logo"
          alt="alt text here"
          src="https://i.pinimg.com/736x/7f/d7/bb/7fd7bba420c9d1659c29c0352ef77842.jpg"
        />
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
        <Link href="/about-us">About us</Link>
      </nav>
    </header>
  );
};

export default Header;
