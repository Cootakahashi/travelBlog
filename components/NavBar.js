import Image from "next/image";

function NavBar() {
  return (
    <>
      <Image
        src="main-background.svg"
        alt="back"
        style={{ height: "100%", width: "100%" }}
        width={0}
        height={0}
        className="bg-cover bg-center bg-fixed"
      />
      <nav className="flex absolute top-0 w-full h-20 items-center justify-between bg-white/50">
        <div className="flex p-2">
          <Image src="logo.svg" alt="logo" width={129} height={61} />
        </div>
        <div className="flex gap-8">
          <div className="p-2 cursor-pointer">ABOUT US</div>
          <div className="p-2 cursor-pointer">EXPERIENCES</div>
          <div className="p-2 cursor-pointer">BLOGS</div>

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
