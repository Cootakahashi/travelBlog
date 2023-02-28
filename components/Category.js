import Image from "next/image";
export function Category() {
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-3 px-20 h-96 overflow-hidden">
      <Image
        className="row-span-2 h-full"
        src="/logo/logo-black.png"
        height={500}
        width={700}
        priority
      />
      <Image
        className="col-start-2 h-full"
        src="/logo/logo-black.png"
        height={250}
        width={700}
        priority
      />

      <Image
        className="col-start-2 row-start-2 h-full"
        src="/logo/logo-black.png"
        height={250}
        width={700}
        priority
      />
      <div className="ml-auto grid row-span-2 py-40">
        <div>
          <h1 className="text-4xl">Category </h1>
          <p className="text-slate-300 text-xl my-4">Our discovery</p>
        </div>
        <button className="self-end border rounded-xl px-8 py-4">
          See All
        </button>
      </div>
    </div>
  );
}
