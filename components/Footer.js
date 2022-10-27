import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import NewsLetter from "./_child/NewsLetter";

const Footer = () => {
  const bg = {
    backgroundImage: "url(/images/footer.png)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
  };

  return (
    <footer className="bg-gray-50" style={bg}>
      <NewsLetter />
      <div className="container mx-auto flex justify-center py-12">
        <hr />
        <div className="py-5">
          <div className="flex gap-6 justify-center">
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
          <p className="py-5 text-gray-400">
            Copyright 2022 All rights reserved | The template is mode with Daily
            Tuition
          </p>
          <p className="text-gray-400 text-center">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
