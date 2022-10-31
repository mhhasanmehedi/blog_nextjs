import Image from "next/image";
import Link from "next/link";
import Author from "./Author";

const Post = () => {
  return (
    <div className="item">
      <div className="images">
        <Link href="/">
          <Image
            src="/images/img1.jpg"
            alt="Post Image"
            height={350}
            width={500}
            className="rounded"
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <Link href="/">
            <span className="text-orange-600 hover:text-orange-800">
              Business, Travel
            </span>
          </Link>
          <Link href="/">
            <span className="text-gray-600 hover:text-gray-800">
              - July 3, 2022
            </span>
          </Link>
        </div>
        <div className="title">
          <Link href="/">
            <span className="text-xl font-bold text-gray-800 hover:text-gray-600">
              Your most unhappy customers are greatest source of learning
            </span>
          </Link>
        </div>

        <p className="text-gray-500 py-3">
          Even teh all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem ipsum decided to leave for the far World of
          Grammar.
        </p>
        <Author />
      </div>
    </div>
  );
};

export default Post;
