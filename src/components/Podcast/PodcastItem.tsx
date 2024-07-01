import Image from "next/image";
import { useRouter } from "next/navigation";

interface PodcastItemProps {
  id: string;
  name: string;
  artist: string;
  imageUrl: string;
}

export const PodcastItem: React.FC<PodcastItemProps> = ({
  id,
  name,
  artist,
  imageUrl,
}) => {
  const router = useRouter();

  const showPodcastDetails = () => {
    router.push(`/podcast/${id}`);
  };

  return (
    <div
      className="shadow-lg shadow-black-500/20 card flex flex-col my-16 w-60"
      onClick={showPodcastDetails}
    >
      <div className="self-center relative -top-16">
        <Image
          className="rounded-full"
          src={imageUrl}
          alt={`${name}`}
          width={150}
          height={150}
        />
      </div>
      <div className="relative -top-12">
        <div className="font-bold text-sm">{name.toUpperCase()}</div>
        <div className="text-sm">Author: {artist}</div>
      </div>
    </div>
  );
};
