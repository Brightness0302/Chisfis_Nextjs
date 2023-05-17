import React from "react";
import { TaxonomyType } from "@/data/types";
import Header from "./(client-components)/(Header)/Header";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";

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
    <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
      <Header className={"shadow-sm dark:border-b dark:border-neutral-700 m-auto"} navType="MainNav1" />
      <main className="nc-PageHome relative overflow-hidden">
        <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28 m-auto">
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
      </main>
    </div>
  );
}

export default PageHome;
