import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";

const Header = () => {
  return (
    <div className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input type="text" className="input-text" placeholder="Search.." />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link href={"/"}>
            <span className="font-bold uppercase text-3xl">Design</span>
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <Link href="/">
              <ImFacebook color="#1877F2" />
            </Link>
            <Link href="/">
              <ImTwitter color="#1D9BF0" />
            </Link>
            <Link href="/">
              <ImYoutube color="#FF0000" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
