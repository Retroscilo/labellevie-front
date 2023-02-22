import Image from "next/Image";
import logo from "public/logo.png";
import MenuElement from "./MenuElement";

async function Navbar({ pages }) {
  const left = pages.slice(0, Math.floor(pages.length / 2));
  const right = pages.slice(Math.ceil(pages.length / 2), pages.length);
  return (
    <div className="flex justify-evenly items-center mx-auto bg-white h-[75px] text-base text-titles">
      {left.map((pages, i) => (
        <MenuElement key={i} data={pages} />
      ))}
      <Image src={logo} alt="logo la belle vie" width={130} className="mx-10" />
      {right.map((pages, i) => (
        <MenuElement key={i} data={pages} />
      ))}
    </div>
  );
}

export default Navbar;
