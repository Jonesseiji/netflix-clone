import React, { FC, useState } from "react";
import { useRouter } from "next/router";
import useMovie from "@/hooks/useMovie";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
  const [showNav, setShowNav] = useState(false);

  const router = useRouter();

  const { movieId } = router.query;
  const { data } = useMovie(movieId as string);

  const handleMouseEnter = () => {
    setShowNav(true);
  };

  const handleMouseLeave = () => {
    setShowNav(false);
  };

  return (
    <div className="h-screen w-screen bg-black">
      <div
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <nav
          className={`
            fixed
            w-full
            p-4
            z-10
            flex-row
            items-center
            gap-8
            cursor-pointer
            flex
            ${showNav ? "opacity-100" : "opacity-0 pointer-events-none"}
            transition-opacity duration-300 ease-in-out
          `}
          style={{ textShadow: "1px 2px 3px #000" }}
        >
          <AiOutlineArrowLeft
            size={40}
            className="text-white"
            onClick={() => router.push("/")}
          />
          <p className="text-white text-1xl md:text-3xl font-bold">
            <span className="mr-4 font-semibold">Watching:</span>
            {data?.title}
          </p>
        </nav>
        <video
          src={data?.videoUrl}
          className="h-full w-full"
          autoPlay
          controls
        />
      </div>
    </div>
  );
};

export default Watch;
