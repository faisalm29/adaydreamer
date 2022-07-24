import { DefaultSeo } from "next-seo";

const config = {
  title: "adaydreamer - Blog",
  description:
    "Dari sebuah mimpi, kenyataan, buah pikir berlebih, atau hanya sekadar imajinasi.",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://adaydreamer.vercel.app",
    site_name: "adaydreamer",
    images: [
      {
        url: "https://adaydreamer.vercel.app",
        alt: "adaydreamer",
      },
    ],
  },
  twitter: {
    handle: "@hrrblealtruist",
    site: "@hrrblealtruist",
    cardType: "summary_large_image",
  },
};

const SEO = (): JSX.Element => {
  return <DefaultSeo {...config} />;
};

export default SEO;
