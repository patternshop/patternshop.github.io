import Image from "next/image";
import MyTitle from "@/components/my-title";
import MySubTitle from "@/components/my-subtitle";
import tissushor2 from "@/public/tissushor2.jpg";
import imgMono from "@/public/fonc_mono.jpg";
import imgAleatoire from "@/public/fonc_aleatoire.jpg";
import imgPat from "@/public/fonc_pat.jpg";
import imgRep from "@/public/fonc_rep.jpg";
import imgMat from "@/public/fonc_mat.jpg";
import tis_all from "@/public/tis_all.jpg";

function Paragraph({
  children,
  img,
}: Readonly<{
  children: React.ReactNode;
  img: any;
}>) {
  return (
    <div>
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image src={img} className="h-full w-auto object-cover" alt="" />
          </div>
          <div className="p-4 my-auto">
            <p className="text-slate-500">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Applications() {
  return (
    <div className="space-y-5">
      <MyTitle>Applications</MyTitle>
      <div>
        Because technology shouldn&apos;t hold creativity back, we have created
        an intuitive program, easy to access and which immediately meets the
        needs of its users.
      </div>
      <div>
        Patternshop is a program thought up and designed by designers, taking
        their needs into account.
      </div>

      <div>
        <div className="p-2 max-w-md mx-auto bg-slate-50 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <Image src={tis_all} className="" alt="" />
            </div>
            <div className="p-4 my-auto">
              <div className="text-slate-500">
                <div>
                  It is aimed at designers in the infographic, textile design,
                  multimedia and interior design sectors:
                  <div className="ml-8">
                    <ul className="list-disc">
                      <li>stylists,</li>
                      <li>graphic designers,</li>
                      <li>style consultants,</li>
                      <li>design agencies,</li>
                      <li>design and fabric studios,tissus</li>
                      <li>fabric publishers,</li>
                      <li>brands,</li>
                      <li>3D infographic designers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MySubTitle>Examples of applications:</MySubTitle>
      <div>
        Patternshop can be used in both the textile and multimedia graphic
        design fields.
      </div>
      <div>
        Use Patternshop to create printouts for fashion, interior design and
        also monograms and complex graphic compositions.
      </div>
      <div>
        Adjust the proportions of motifs on a tie, or flowers on a bathing suit,
        design a monogram for your brand, create sophisticated repetitions.
      </div>
      <div>
        In the infographics sector, you can create textures for three
        dimensional models intended for animated films, video games and any
        other multimedia product.
      </div>
    </div>
  );
}

function Description() {
  return (
    <div className="space-y-5">
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
    </div>
  );
}

export default function Home() {
  return (
    <div className="space-y-5 p-5">
      <Description />
      <Applications />
    </div>
  );
}
