import Image from "next/image";
import Link from "next/link";

import MyTitle from "@/components/my-title";
import MySubTitle from "@/components/my-subtitle";

import config_win from "@/public/config_win.jpg";
import download_bt from "@/public/download_bt.gif";

export default function Home() {
  return (
    <div className="space-y-5 p-5">
      <MyTitle>Download</MyTitle>
      <MySubTitle>Setup for Windows</MySubTitle>
      <div>Version 1.0 hosted at Sourceforge (Release date: 2012-12-16)</div>
      <div>
        <Link href="http://sourceforge.net/projects/patternshop/files/Windows/Patternshop_en_FULL.msi/download">
          <div className="flex flex-row gap-1">
            <Image src={config_win} className="h-auto w-auto" alt="Windows" />
            <Image src={download_bt} className="h-auto w-auto" alt="Download" />
          </div>
        </Link>
      </div>
      <div>
        <div className="italic">Recommended configuration</div>
        <div>PC with Windows 2000/XP/Vista/7/8/10/11</div>
        <div>Graphic card OpenGL 2.0</div>
      </div>
    </div>
  );
}
