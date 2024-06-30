import Image from "next/image";
import tissushor2 from "../public/tissushor2.jpg";
import MyTitle from "@/components/my-title";
import imgMono from "../public/fonc_mono.jpg";
import imgAleatoire from "../public/fonc_aleatoire.jpg";
import imgPat from "../public/fonc_pat.jpg";
import imgRep from "../public/fonc_rep.jpg";
import imgMat from "../public/fonc_mat.jpg";

function Paragraph({
  children,
  img,
}: Readonly<{
  children: React.ReactNode;
  img: Image;
}>) {
  return (
    <div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              src={img}
              className="h-full w-auto object-cover"
              alt=""
            />
          </div>
          <div className="p-4 my-auto">
            <p className="text-slate-500">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-5 p-5">
      <MyTitle>What is Patternshop?</MyTitle>

      <div>
        Patternshop is a powerful tool enabling the repetition of motifs and the
        organisation of networks. Created by designers for designers, it
        functions in a simple and intuitive way. Import your images into the
        software and they will repeat instantaneously, adjust proportions, while
        you arrange them and work in real time. Preview your work in real time,
        export a high definition matched image, with the texture and dimensions
        you desire.
      </div>

      <Image src={tissushor2} className="w-auto h-auto" alt="Tissus" />

      <MyTitle>Who is Patternshop aimed at?</MyTitle>

      <Paragraph img={imgMono}>
        With Patternshop, you can organise the repetition of one or several
        images, simply and intuitively.
      </Paragraph>

      <Paragraph img={imgMat}>
        Control the spacing between motifs, adjust their proportions and save
        hours of work: its patterning system lets you view the result in real
        time.
      </Paragraph>

      <Paragraph img={imgRep}>
        Work with markers and point snapping for a precise result
      </Paragraph>

      <Paragraph img={imgAleatoire}>
        Create networks of motifs on several levels with tracing patterns. In
        this way you can create extremely complex images and even get a random
        output of your network of motifs:
      </Paragraph>

      <Paragraph img={imgPat}>
        Import your own patterns. Map your network of motifs in the format of
        your choice, and thus view the final result. Export and print in high
        resolution.
      </Paragraph>

      <div>Find out who Patternshop is aimed at, and its applications.</div>
    </div>
  );
}
