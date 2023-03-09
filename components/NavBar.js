import Image from "next/image";
import Link from "next/link";
function NavBar() {
  return (
    <>
      <nav className="flex absolute top-0 w-full h-20 items-center justify-between bg-white/50">
        <div className="relative p-16 mt-4">
          <Image className="" src="logo/logo.svg" alt="logo" fill priority />
        </div>
        <div className="flex gap-8">
          <div className="p-2 cursor-pointer">ABOUT US</div>
          <div className="p-2 cursor-pointer">EXPERIENCES</div>
          <Link href="/blog/allblog" passHref>
            <div className="p-2 cursor-pointer ">BLOGS</div>
          </Link>

          <div className="p-2 cursor-pointer">FAMILY TRAVEL</div>
          <div className="p-2 mr-2 cursor-pointer">TRAVEL TIPS</div>
          <div className="my-auto ml-auto block cursor-pointer pr-4">
            <div id="burger">
              <div className="relative top-0 h-1 w-8 rounded-r bg-stone-700 shado"></div>
              <div className="mt-1 h-1 w-8 rounded-r bg-stone-700 opacity-100"></div>
              <div className="relative top-0 mt-1 h-1 w-8 rounded-r bg-stone-700"></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
