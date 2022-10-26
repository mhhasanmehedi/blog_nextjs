import Image from "next/image";
import Link from "next/link";

const Section1 = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        {Slide()}
      </div>
    </section>
  );
};

const Slide = () => {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href="/">
          <Image src="/images/img1.jpg" width={600} height={600} alt="Image" />
        </Link>
      </div>
      <div className="info"></div>
    </div>
  );
};

export default Section1;
