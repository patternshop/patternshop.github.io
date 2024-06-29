import MyNavbar from "./my_navbar";
import Image from "next/image";
import tissushor2 from "../public/tissushor2.jpg"

export default function Home() {
  return (
    <main className="container max-w-3xl mx-auto rounded-md border-solid border-2 border-gray-200 m-5 p-5 bg-white">
      <MyNavbar />
      <div>
      What is Patternshop?
      Patternshop is a powerful tool enabling the repetition of images in organisation of networks, creation of textures and realistic mapping.
      More details

      Who is Patternshop aimed at?

      Patternshop is aimed at designers working in the infographic, textile design, interior design sectors....
      More details
      </div>
      <Image src={tissushor2} className="w-auto h-auto" alt="Tissus" />
    </main>
  );
}
