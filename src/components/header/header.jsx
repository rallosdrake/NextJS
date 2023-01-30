import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <div>
        <div className="topNav">
          <Image alt="logo" src={"/Images/logo.png"} width={50} height={50} />
          <nav>
            <ul>
              <li>
                <Link href="/" passHref>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" passHref>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about-us" passHref>
                  About us
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="title"> Sed ut perspiciatis unde omnis</p>
      </div>
    </header>
  );
};

// const Header = () => {
//   const logo = import("../../../public/Images/logo.png");
//   console.log(logo);
//   return (
//     <header>
//       <div>
//         <div className="topNav">
//           <Image
//             width={30}
//             height={30}
//             className="logo"
//             alt="alt text here"
//             src={"/Images/logo.png"}
//           />
//           <nav>
//             <Link href="/">Home</Link>
//             <Link href="/events">Events</Link>
//             <Link href="/about-us">About us</Link>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

export default Header;
