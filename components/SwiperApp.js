import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

import "swiper/css";
// import "swiper/css/pagination";

import { Pagination } from "swiper";

export default function SwiperApp({ blog }) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={170}
        slidesOffsetAfter={50}
        slidesOffsetBefore={50}
        allowSlideNext={true}
        autoHeight={false}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          532: { slidesPerView: 2, spaceBetween: 30 },
          791: { slidesPerView: 3, spaceBetween: 50 },
          1024: { slidesPerView: 3, spaceBetween: 90 },
        }}
        // modules={[Pagination]}
        className="mySwiper max-w-screen-2xl"
      >
        {blog.map((e) => {
          const imageExist = e.eyecatch?.url;
          if (imageExist) {
            return (
              <SwiperSlide>
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
                      className="bg-zinc-500 self-center text-zinc-50 rounded-md px-6 py-1 font-bold mr-6 mb-2"
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
    </>
  );
}
