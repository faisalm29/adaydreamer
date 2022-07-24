import Image from "next/image";

type PostThumbnailProps = {
  title: string;
  photographer: string;
  imageUrl: string;
  fromUrl: string;
  source: string;
};

const PostThumbnail = ({
  title,
  photographer,
  imageUrl,
  fromUrl,
  source,
}: PostThumbnailProps): JSX.Element => {
  return (
    <div>
      <div className="mb-2 ">
        <Image
          src={imageUrl}
          layout="responsive"
          objectFit="cover"
          alt={`${title}-image`}
          width={2042}
          height={1012}
          className="rounded-md"
        />
      </div>
      <div className="mb-12 text-center text-slate-900 dark:text-slate-300 ">
        Image from{" "}
        <a
          href={fromUrl}
          target="_blank"
          rel="noreferrer"
          className=" italic text-red-400 hover:underline"
        >
          {photographer}
        </a>{" "}
        on {source}
      </div>
    </div>
  );
};

export default PostThumbnail;
