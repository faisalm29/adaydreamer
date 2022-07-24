import PostThumbnail from "@/components/PostThumbnail";
import Page from "@/components/Page";
import MDXContainer from "@/components/MDXContainer";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { allBlogs, type Blog } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

type BlogPostPage = {
  blogPost: Blog;
};

const PostPage = ({ blogPost }: BlogPostPage) => {
  const Component = useMDXComponent(blogPost.body.code);

  return (
    <Page>
      <NextSeo
        title={`${blogPost.title} | adaydreamer`}
        description={blogPost.summary}
        openGraph={{
          url: "https://adaydreamer.vercel.app",
          title: `${blogPost.title}`,
          description: blogPost.summary,
          images: [
            {
              url: `https://adaydreamer.vercel.app/images/blog/${blogPost.slug}/thumbnail.jpg`,
              width: 1280,
              height: 878,
              alt: blogPost.title,
            },
          ],
          site_name: "adaydreamer",
          type: "article",
          locale: "id_ID",
        }}
      />
      <article>
        <PostThumbnail
          title={blogPost.thumbnail.title}
          photographer={blogPost.thumbnail.photographer}
          imageUrl={blogPost.thumbnail.imageUrl}
          fromUrl={blogPost.thumbnail.fromUrl}
          source={blogPost.thumbnail.source}
        />

        <div className="prose max-w-none prose-h2:text-yellow-400 prose-h3:text-yellow-400 prose-p:text-slate-900 prose-blockquote:border-l-red-400 prose-blockquote:text-slate-900 prose-code:rounded-md prose-code:bg-stone-200 prose-code:p-1 prose-code:text-red-400 prose-pre:bg-stone-200 dark:prose-p:text-slate-300 dark:prose-blockquote:text-slate-300 dark:prose-code:bg-stone-800 dark:prose-pre:bg-stone-800">
          <h1 className="text-yellow-400">{blogPost.title}</h1>
          <Component />
        </div>
      </article>
    </Page>
  );
};

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const blogPost = allBlogs.find(
    (p: Blog) => p.slug === (params?.slug as string)
  );

  if (!blogPost) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blogPost,
    },
  };
};

export default PostPage;
