import Image from "next/image";

export function Team() {
  return (
    <>
      <div className="flex gap-12 my-10 p-10 mt-40">
        <h1 className="text-3xl px-20 whitespace-pre-line font-sembold">{`Team \nMembers`}</h1>

        <div className="w-40 text-left ml-auto z-10">
          <Image
            className="bg-black rounded-xl"
            src={"/logo/logo.png"}
            height={200}
            width={200}
            priority
          />
          <h2 className="p-4">Role</h2>
          <p className="px-4">Name</p>
        </div>
        <div className="w-40 text-left z-10">
          <Image
            className="bg-black rounded-xl"
            src={"/logo/logo.png"}
            height={200}
            width={200}
          />
          <h2 className="p-4">Role</h2>
          <p className="px-4">Name</p>
        </div>
        <div className="w-40 text-left mr-20 z-10 ">
          <Image
            className="bg-black rounded-xl"
            src={"/logo/logo.png"}
            height={200}
            width={200}
            priority
          />
          <h2 className="p-4">Role</h2>
          <p className="px-4">Name</p>
        </div>
      </div>
      <div className="w-full h-60 bg-slate-200 -translate-y-32 opacity-30 z-0"></div>
    </>
  );
}
