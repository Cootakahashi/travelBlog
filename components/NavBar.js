import Image from "next/image";

function NavBar() {
  return (
    <nav className="flex w-full h-20 items-center justify-between bg-white bg-opacity-[52%]">
      <div className="flex p-2">
        <Image src="logo.svg" alt="logo" width={129} height={61} />
      </div>
      <div className="flex">
        <div className="p-2 cursor-pointer">ABOUT US</div>
        <div className="p-2 cursor-pointer">EXPERIENCES</div>
        <div className="p-2 cursor-pointer">FAMILY TRAVEL</div>
        <div className="p-2 mr-2 cursor-pointer">TRAVEL TIPS</div>
        <div class="my-auto ml-auto block cursor-pointer pr-4">
          <div id="burger">
            <div class="relative top-0 h-1 w-8 rounded-r bg-stone-700 shado"></div>
            <div class="mt-1 h-1 w-8 rounded-r bg-stone-700 opacity-100"></div>
            <div class="relative top-0 mt-1 h-1 w-8 rounded-r bg-stone-700"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
