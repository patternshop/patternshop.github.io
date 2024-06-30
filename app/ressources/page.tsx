import Image from "next/image";
import MyTitle from "@/components/my-title";
import MySubTitle from "@/components/my-subtitle";
import monopatternshop_zm from "@/public/monopatternshop_zm.jpg";
import japonais_zm from "@/public/japonais_zm.jpg";
import ecossais_zm from "@/public/ecossais_zm.jpg";
import coquelicots_zm from "@/public/coquelicots_zm.jpg";
import packbasezoom from "@/public/motifs/packbasezoom.jpg";
import fonc_pat from "@/public/patrons/fonc_pat.jpg";

import Link from "next/link";

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

function Designs() {
  return (
    <div className="space-y-5">
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

function ImagePacks() {
  return (
    <div className="space-y-5">
      <MyTitle>Images packs</MyTitle>
      <div>
        <Link href="/motifs/PackBase.zip">
          <div className="flex flex-row">
            <div>
              <Image
                src={packbasezoom}
                className="h-28 w-auto"
                alt="Basic Patternshop pack"
              />
            </div>
            <div>
              <MySubTitle>Basic Patternshop pack</MySubTitle>
              <div>Pack containing thirty motifs, mainly flowers.</div>
              <div className="text-sm">
                Download the basic pack (zip file - 1.42Mo)
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

function TemplatePacks() {
  return (
    <div className="space-y-5">
      <MyTitle>Template packs</MyTitle>
      <div>
        <Link href="/patrons/Template.zip">
          <div className="flex flex-row">
            <div>
              <Image
                src={fonc_pat}
                className="h-28 w-auto"
                alt="Basic Patternshop pack"
              />
            </div>
            <div>
              <MySubTitle>Basic Patternshop pack</MySubTitle>
              <div>Pack of templates with basic clothes.</div>
              <div className="text-sm">
                Download the basic pack (zip file - 3.29Mo)
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-5 p-5">
      <ImagePacks />
      <TemplatePacks />
      <Designs />
    </div>
  );
}
