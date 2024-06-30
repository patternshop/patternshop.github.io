import Image from "next/image";
import MyTitle from "@/components/my-title";
import MySubTitle from "@/components/my-subtitle";
import monopatternshop_zm from "@/public/monopatternshop_zm.jpg";
import japonais_zm from "@/public/japonais_zm.jpg"
import ecossais_zm from "@/public/ecossais_zm.jpg"
import coquelicots_zm from "@/public/coquelicots_zm.jpg"

function ImageBlock({
  img,
  title,
}: Readonly<{
  img: any;
  title: string;
}>) {
  return (
    <div className="">
      <Image src={img} className="" alt="" />
      <h3 className=" font-bold text-nice-blue">{title}</h3>
      <div className="text-sm">From: Patternshop</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-5 p-5">
      <MyTitle>Design gallery</MyTitle>
      <MySubTitle>A selection of designs</MySubTitle>
      <div className="grid grid-cols-3 gap-5">
        <ImageBlock img={monopatternshop_zm} title="Woven" />
        <ImageBlock img={coquelicots_zm} title="Poppies" />
        <ImageBlock img={japonais_zm} title="Japanese" />
        <ImageBlock img={ecossais_zm} title="Tartan" />
      </div>
    </div>
  );
}
