import Page from "@/components/Page";
import PageHeader from "@/components/PageHeader";
import PostCard from "@/components/PostCard";
import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import { allBlogs, type Blog } from "contentlayer/generated";
import { getUnixTime } from "date-fns";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogPosts,
}) => {
  return (
    <Page>
      <PageHeader
        title="Blog"
        description="Dari sebuah mimpi, kenyataan, buah pikir berlebih, atau hanya sekadar imajinasi."
      />
      {blogPosts.map((post: Blog) => (
        <PostCard post={post} key={post?._id} />
      ))}
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogs: Blog[] = allBlogs;
  const sortedBlog = blogs.sort(
    (a, b) => getUnixTime(new Date(b.date)) - getUnixTime(new Date(a.date))
  );

  return {
    props: {
      blogPosts: sortedBlog,
    },
  };
};

export default Home;
