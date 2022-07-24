import AnchorLink from "./AnchorLink";
import ThemeSwitcher from "./ThemeSwitcher";
import Image from "next/image";
import logo from "public/logo.svg";

const Header = (): JSX.Element => {
  return (
    <header className="mx-4 py-4 md:mx-auto md:max-w-[700px]">
      <div className="flex items-center justify-between">
        <div>
          <AnchorLink href="/">
            <Image src={logo} width={32} height={32} alt="logo" />
          </AnchorLink>
        </div>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
