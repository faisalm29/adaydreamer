import Link from "next/link";

type LinkProps = {
  children: string | JSX.Element;
  href: string;
  classes?: string;
};

const AnchorLink = ({ children, href, classes }: LinkProps): JSX.Element => {
  if (href.startsWith("/")) {
    return (
      <Link href={href}>
        <a className={classes}>{children}</a>
      </Link>
    );
  }

  return (
    <a href={href} className={classes} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};

export default AnchorLink;
