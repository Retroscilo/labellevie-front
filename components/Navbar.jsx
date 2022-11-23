import getUrl from "@/lib/strapi/getUrl";

import MenuElement from "./MenuElement";

async function fetchData() {
  const url = getUrl();
  const res = await fetch(`${url}/api/pages?populate=deep`);
  const pages = await res.json();
  return pages.data;
}

async function Navbar() {
  const pages = await fetchData();
  pages.forEach((page) => console.log(page.attributes));
  return (
    <div className="flex justify-evenly items-center mx-auto bg-white h-[75px] text-xl text-titles">
      {pages.map((pages, i) => (
        <MenuElement key={i} data={pages} />
      ))}
    </div>
  );
}

export default Navbar;
