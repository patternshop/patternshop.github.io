import Image from "next/image";
import tissushor2 from "../public/tissushor2.jpg";
import MyTitle from "@/components/my-title";

export default function Home() {
  return (
      <div className="space-y-5 p-5">

        <MyTitle>What is Patternshop?</MyTitle>

        <div>
          Patternshop is a powerful tool enabling the repetition of images in
          organisation of networks, creation of textures and realistic mapping.
          More details
        </div>

        <MyTitle>Who is Patternshop aimed at?</MyTitle>

        <div>
          Patternshop is aimed at designers working in the infographic, textile
          design, interior design sectors.... More details
        </div>

        <Image src={tissushor2} className="w-auto h-auto" alt="Tissus" />

      </div>
  );
}
