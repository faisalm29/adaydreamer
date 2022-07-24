import Image from "next/image";
import AnchorLink from "./AnchorLink";
import { Blog } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

const PostCard = ({ post }: { post: Blog }): JSX.Element => {
  return (
    <div>
      <div className="mb-8">
        <Image
          src={post.thumbnail.imageUrl}
          layout="responsive"
          alt={post.title}
          objectFit="cover"
          width={2024}
          height={1012}
          className="rounded-md"
        />
      </div>
      <div>
        <AnchorLink href={`/blog/${post.slug}`}>
          <h1 className="mb-2 text-2xl font-bold text-yellow-400">
            {post.title}
          </h1>
        </AnchorLink>
        <p className="mb-2 text-slate-900 dark:text-slate-300">
          {post.summary}
        </p>
        <p className="text-slate-400 dark:text-slate-500">
          Dipublikasikan pada{" "}
          <time>
            {format(parseISO(post.date), "d LLLL yyyy", { locale: id })}
          </time>{" "}
          - {post.readingTime.text}
        </p>
      </div>
    </div>
  );
};

export default PostCard;
