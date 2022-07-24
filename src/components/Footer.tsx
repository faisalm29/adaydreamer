import AnchorLink from "./AnchorLink";
import Image from "next/image";
import { GithubIcon, MailIcon, TwitterIcon } from "@/components/icons";
import logo from "public/logo.svg";

const links = [
  {
    name: "mail",
    icon: <MailIcon />,
    url: "mailto:sikseven08@gmail.com",
    class: "inline-block mr-4",
  },
  {
    name: "github",
    icon: <GithubIcon />,
    url: "https://github.com/faisalm29",
    class: "inline-block mr-4",
  },
  {
    name: "twitter",
    icon: <TwitterIcon />,
    url: "https://twitter.com/hrrblealtruist",
    class: "inline-block",
  },
];

const Footer = (): JSX.Element => {
  const d = new Date().getFullYear();

  return (
    <footer className="mx-4 mt-28 mb-9 md:mx-auto md:max-w-[700px]">
      <div className="mb-4 flex items-center justify-between">
        <AnchorLink href="/">
          <Image src={logo} width={32} height={32} alt="logo" />
        </AnchorLink>
        <div>
          {links.map((link) => (
            <AnchorLink key={link.name} href={link.url} classes={link.class}>
              {link.icon}
            </AnchorLink>
          ))}
        </div>
      </div>
      <div className="text-center text-[14px]">
        <p className="">&#169; adaydreamer {d}</p>
        <p className="">Made with 💛</p>
        <p className="">
          using{" "}
          <span className="italic text-red-400 hover:underline">
            <AnchorLink href="https://nextjs.org">next.js</AnchorLink>
          </span>
          ,{" "}
          <span className="italic text-red-400 hover:underline">
            <AnchorLink href="https://contentlayer.dev">
              contentlayer
            </AnchorLink>
          </span>
          ,{" "}
          <span className="italic text-red-400 hover:underline">
            <AnchorLink href="https://tailwindcss.com">tailwind</AnchorLink>
          </span>
          , deployed by{" "}
          <span className="italic text-red-400 hover:underline">
            <AnchorLink href="https://vercel.com">vercel</AnchorLink>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
