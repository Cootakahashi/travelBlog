import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Pagination, FreeMode, Scrollbar } from "swiper";

export default function SwiperApp({ blog }) {
  return (
    <>
      <div className="mr-10">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          allowSlideNext={true}
          autoHeight={false}
          freeMode
          centeredSlides
          grabCursor
          centeredSlidesBounds
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            250: { slidesPerView: 1, slidesOffsetBefore: 42 },
            432: { slidesPerView: 1.5, slidesOffsetBefore: 42 },
            755: { slidesPerView: 2, slidesOffsetBefore: 42 },
            1024: {
              slidesPerView: 3,
              spaceBetween: 90,
              slidesOffsetBefore: 42,
            },
          }}
          modules={[Pagination, FreeMode, Scrollbar]}
          className="max-w-screen-2xl"
        >
          {blog.map((e, id) => {
            const imageExist = e.eyecatch?.url;
            if (imageExist) {
              return (
                <SwiperSlide key={e.id}>
                  <div className="min-w-[300px] max-w-[345px] shadow-4xl rounded-3xl relative">
                    <Image
                      className="border-[#FFC9AA] border-[3px] rounded-t-md  h-[360px] min-w-0"
                      src={e.eyecatch.url}
                      width={345}
                      height={370}
                    ></Image>
                    <p className="top-[15px] absolute left-5 font-bold text-zinc-600">
                      {e?.category?.name}
                    </p>
                    <p className="top-[48px] absolute left-5 font-normal text-zinc-600">
                      {e?.title}
                    </p>
                    <div className="h-16 bg-zinc-100 rounded-b-xl flex justify-end shadow-[10px-10px-10px-10px]">
                      <Link
                        className="hover:text-blue-300 hover:bg-slate-300 transition duration-500 ease-in-out bg-zinc-500 self-center text-zinc-50 rounded-md px-6 py-1 font-bold mr-6 mb-2"
                        href={`/blog/${e.id}`}
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
    </>
  );
}
