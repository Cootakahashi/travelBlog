import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
function NavBar() {
  const [open, setOpen] = useState(false);

  const handleOpened = (event) => {
    if (event.currentTarget.classList.contains("open")) {
      event.currentTarget.classList.remove("open");
      setOpen(false);
    } else {
      event.currentTarget.classList.add("open");
      setOpen(true);
    }
  };

  return (
    <>
      <nav className="flex absolute top-0 w-full h-16 items-center justify-between bg-white/75">
        <div className="relative p-16 mt-4">
          <Image className="" src="logo/logo.svg" alt="logo" fill priority />
        </div>
        <div className="md:hidden my-auto ml-auto block cursor-pointer pr-4">
          <div id="burger" className="group" onClick={handleOpened}>
            <div className="group-open:rotate-45 group-open:top-2 relative top-0 h-1 w-8 rounded-r bg-stone-700 transition-all"></div>
            <div className="group-open:hidden mt-1 h-1 w-8 rounded-r bg-stone-700 opacity-100 transition-all"></div>
            <div className="group-open:-rotate-45 relative top-0 mt-1 h-1 w-8 rounded-r bg-stone-700 transition-all"></div>
          </div>
        </div>
        {open ? (
          <div className="md:hidden top-[64px] flex flex-col absolute w-full bg-white/75 justify-center items-center transition-all">
            <div className="cursor-pointer hover:bg-black/10 w-full text-center">
              ABOUT US
            </div>
            <div className="cursor-pointer hover:bg-black/10 w-full text-center">
              EXPERIENCES
            </div>
            <Link href="/blog/allblog" passHref>
              <div className="cursor-pointer hover:bg-black/10 w-full text-center">
                BLOGS
              </div>
            </Link>
            <div className="cursor-pointer hover:bg-black/10 w-full text-center">
              FAMILY TRAVEL
            </div>
            <div className="cursor-pointer hover:bg-black/10 w-full text-center">
              TRAVEL TIPS
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="md:flex hidden gap-8">
          <div className="p-2 cursor-pointer">ABOUT US</div>
          <div className="p-2 cursor-pointer">EXPERIENCES</div>
          <Link href="/blog/allblog" passHref>
            <div className="p-2 cursor-pointer ">BLOGS</div>
          </Link>

          <div className="p-2 cursor-pointer">FAMILY TRAVEL</div>
          <div className="p-2 mr-2 cursor-pointer">TRAVEL TIPS</div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
