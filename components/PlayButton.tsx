import { useRouter } from "next/router";
import { FC } from "react";
import { BsFillPlayFill } from "react-icons/bs";

interface PlayButtonProps {
  movieId: string;
}

const PlayButton: FC<PlayButtonProps> = ({ movieId }) => {
  const router = useRouter();

  return (
    <div
      className="
        bg-white
        rounded-md
        py-1
        md:py-2
        px-2
        md:px-4
        w-auto
        text-xs
        lg:text-lg
        font-semibold
        flex
        flex-row
        items-center
        hover:bg-neutral-300
        transition
        cursor-pointer
    "
      onClick={() => router.push(`/watch/${movieId}`)}
    >
      <BsFillPlayFill size={25} className="mr-1" />
      Play
    </div>
  );
};

export default PlayButton;
