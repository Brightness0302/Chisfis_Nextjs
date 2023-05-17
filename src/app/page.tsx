import React from "react";
import { TaxonomyType } from "@/data/types";
import SectionHero from "./(server-components)/SectionHero";
import SectionHowItWork from "@/components/SectionHowItWork";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SectionVideos from "@/components/SectionVideos";

import HIW1img from "@/images/HIW2-1.png";
import HIW2img from "@/images/HIW2-2.png";
import HIW3img from "@/images/HIW2-3.png";
import HIW1imgDark from "@/images/HIW2-1-dark.png";
import HIW2imgDark from "@/images/HIW2-2-dark.png";
import HIW3imgDark from "@/images/HIW2-3-dark.png";
import rightImgPng from "@/images/our-features-2.png";

const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "Enjoy the great cold",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "/Images/Bmw-7-Serie-300x225.jpg",
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "Sleep in a floating way",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "/Images/Luxe-Mercedes-V-klasse-300x225.webp",
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "/Images/Mercedes-E-klasse-300x225.webp",
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "Cool in the deep forest",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "/Images/Mercedes-S-klasse-300x225.webp",
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "In the billionaire's house",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "/Images/Tesla-Model-S-300x225.webp",
  },
];

function PageHome() {
  return (
      <main className="nc-PageHome relative overflow-hidden">
        <div className="relative">
          {/* <img className="Hero-bgImage w-full" src={"/Images/vip-taxi.jpg"} /> */}
          <div className="px-28">
            <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />
          </div>
        </div>
        <div className="px-28 relative space-y-24 pb-24 lg:space-y-14 lg:pb-14 pt-14 bg-aliceblue dark:bg-slategrey">
          <SectionHowItWork
            data={[
              {
                id: 1,
                img: HIW1img,
                imgDark: HIW1imgDark,
                title: "Smart search",
                desc: "Name the area or type of home you are looking for the search bar. Our app will find you the perfect match.",
              },
              {
                id: 2,
                img: HIW2img,
                imgDark: HIW2imgDark,
                title: "Choose property",
                desc: "From the number of options our app will provide, you can select any property that you like to explore.",
              },
              {
                id: 3,
                img: HIW3img,
                imgDark: HIW3imgDark,
                title: "Book you property",
                desc: "Find a home or space from our search bar. Enter your specific location, property type and price range.",
              },
            ]}
          />
        </div>
        <div className="px-28 relative space-y-24 mb-24 lg:space-y-14 lg:mb-14 pt-14">
          <div className="relative py-16">
            <SectionSliderNewCategories
              categories={DEMO_CATS_2}
              categoryCardType="card4"
              itemPerRow={4}
              heading="Onze Auto's"
              subHeading="Popular places to stay that Chisfis recommends for you"
              sliderStyle="style2"
            />
          </div>
        </div>
        <div className="px-28 relative space-y-24 pb-24 lg:space-y-14 lg:pb-14 pt-14 bg-antiquewhite dark:bg-thistle">
          <SectionOurFeatures />
        </div>
        <div className="px-28 relative space-y-24 pb-24 lg:space-y-14 lg:pb-14 pt-14">
          <SectionVideos />
        </div>
        <div className="px-28 relative space-y-24 pb-24 lg:space-y-14 lg:pb-14 pt-14 bg-beige dark:bg-cadetblue">
          <SectionSubscribe2 />
        </div>
      </main>

  );
}

export default PageHome;
