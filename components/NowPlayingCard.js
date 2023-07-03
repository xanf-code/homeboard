"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import SpotifySkeleton from "./Skeletons/SpotifySkeleton";

const NowPlayingCard = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["spotify"],
    queryFn: async () => {
      const res = await fetch("/api/spotify");
      return await res.json();
    },
    refetchInterval: 3 * 60 * 1000,
    refetchIntervalInBackground: true,
  });

  if (isLoading) {
    return <SpotifySkeleton />;
  }

  if (error) {
    return <SpotifySkeleton />;
  }

  const truncatedTitle =
    data.title.length > 40 ? `${data.title.substring(0, 15)}...` : data.title;

  const truncatedArtist =
    data.artist.length > 40
      ? `${data.artist.substring(0, 10)}...`
      : data.artist;

  return (
    <div className="flex items-center">
      <div
        className={`w-12 h-12 rounded-full overflow-hidden ${
          data.isPlaying ? "animate-spin" : "animate-none"
        }`}
        style={{ animationDuration: "4s" }}
      >
        <Image
          src={data.albumImageUrl}
          alt="Image description"
          width={100}
          height={100}
          className="object-cover"
        />
      </div>
      <div className="px-4 py-4">
        <div className="font-medium text-xl mb-1 tracking-wide">
          {truncatedTitle}
        </div>
        <p className="text-gray-400 text-base">{truncatedArtist}</p>
      </div>
    </div>
  );
};

export default NowPlayingCard;
