import Image from "next/image";
import MyTitle from "@/components/my-title";
import MySubTitle from "@/components/my-subtitle";
import tis_all from "@/public/tis_all.jpg";

export default function Home() {
  return (
    <div className="space-y-5 p-5">
      <MyTitle>Applications</MyTitle>
      <MySubTitle>
        Patternshop, software created by designers for designers.
      </MySubTitle>
      <div>
        Because technology shouldn&apos;t hold creativity back, we have created an
        intuitive program, easy to access and which immediately meets the needs
        of its users.
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
