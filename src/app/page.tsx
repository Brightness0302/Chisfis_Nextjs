import React from "react";
import { TaxonomyType } from "@/data/types";
import SectionHero from "./(server-components)/SectionHero";
import SectionHowItWork from "@/components/SectionHowItWork";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SectionVideos from "@/components/SectionVideos";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";

import IconCard from "@/components/IconCard";

import HIW1img from "@/images/HIW2-1.png";
import HIW2img from "@/images/HIW2-2.png";
import HIW3img from "@/images/HIW2-3.png";
import HIW1imgDark from "@/images/HIW2-1-dark.png";
import HIW2imgDark from "@/images/HIW2-2-dark.png";
import HIW3imgDark from "@/images/HIW2-3-dark.png";
import rightImgPng from "@/images/our-features-2.png";
import GradientIconField from "@/components/GradientIconField";
import PatternCard from "@/components/PatternCard";
import BusinessPatternCard from "@/components/BusinessPatternCard";
import DividerField from "@/components/DividerComponent";
import CarCard from "@/components/CarCard";
import IconField from "@/components/IconField";

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
        {/* <div className="container1 bg-aliceblue dark:bg-slategrey">
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
        </div> */}
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
        {/* <div className="container1 bg-antiquewhite dark:bg-thistle">
          <SectionOurFeatures />
        </div>
        <div className="container1">
          <SectionVideos />
        </div>
        <div className="container1 bg-beige dark:bg-cadetblue">
          <SectionSubscribe2 />
        </div> */}
        <DividerField className="containerForDivider" />
        <div className="container1 bg-background dark:bg-d-background">
          <div className="grid grid-cols-3 gap-3">
            <IconCard iconType="gradient" className="" iconName="las la-search" />
            <IconCard iconType="gradient" className="" iconName="las la-mask" />
            <IconCard iconType="gradient" className="" iconName="las la-magic" />
          </div>
        </div>
        <DividerField className="containerForDivider" />
        <div className="container1 bg-background dark:bg-d-background">
          <div className="grid grid-cols-3 gap-3">
            <PatternCard imageSrc="/Images/016-taxi-150x150.png" imageAlt="Home 1" heading="PRIMO Taxi Rotterdam">
              <p className="text-base text-justify">With <strong><span className="text-light-brown">more than 400 experienced, RTX-certified drivers and luxury vehicles</span></strong> available. Can we help you at PRIMO Taxi Rotterdam in rijnmond region.</p>
            </PatternCard>
            <PatternCard imageSrc="/Images/035-take-off-150x150.png" imageAlt="Home 1" heading="PRIMO Taxi Rotterdam">
              <p className="text-base text-justify">With PRIMO Airport Taxi Privé you are <strong><span className="text-light-brown">assured of a good trip to the airport</span></strong> of your choice. Experience the best taxi service and quality at PRIMO Airport Taxi Services.</p>
            </PatternCard>
            <PatternCard imageSrc="/Images/012-briefcase-1-150x150.png" imageAlt="Home 1" heading="PRIMO Taxi Rotterdam">
              <p className="text-base text-justify">At PRIMO Zakelijk Taxi Rotterdam it is important to provide transport services with a <strong><span className="text-light-brown">suitable appearance, quality and punctuality.</span></strong><br/>PRIMO Taxi Business guarantees you this.</p>
            </PatternCard>
          </div>
        </div>
        <DividerField className="containerForDivider" />
        <div className="container1 bg-background dark:bg-d-background">
          <div className="grid grid-cols-5 gap-3">
            <BusinessPatternCard imageSrc="/Images/036-taxi-150x150.png" imageAlt="Home 1" heading="Taxi transport" />
            <BusinessPatternCard imageSrc="/Images/023-customer-150x150.png" imageAlt="Home 1" heading="Group transport" />
            <BusinessPatternCard imageSrc="/Images/031-landing-page-150x150.png" imageAlt="Home 1" heading="Airport transport" />
            <BusinessPatternCard imageSrc="/Images/cab-150x150.png" imageAlt="Home 1" heading="Business Taxi" />
            <BusinessPatternCard imageSrc="/Images/021-red-tape-150x150.png" imageAlt="Home 1" heading="VIP Taxi" />
          </div>
        </div>
        <DividerField className="containerForDivider" />
        <div className="container1 bg-background dark:bg-d-background">
          <div className="grid grid-cols-3 gap-3">
            <CarCard imageSrc="/Cars/black_saloon.png" imageAlt="Car 1" heading="PRIMO Taxi Sedan">
              <div>
                <IconField iconName="las la-check" className="mx-3"><label className="text-base">Up to 4 Passengers</label></IconField>
                <IconField iconName="las la-check" className="mx-3"><label className="text-base">Up to 2 Suitcases</label></IconField>
                <IconField iconName="las la-check" className="mx-3"><label className="text-base">Free cancellation and change</label></IconField>
              </div>
            </CarCard>
            <CarCard imageSrc="/Cars/black_estate.png" imageAlt="Car 1" heading="PRIMO Taxi Sedan">
              <div>
                <IconField iconName="las la-check" className="mx-3"><label className="text-base">Up to 4 Passengers</label></IconField>
                <IconField iconName="las la-check" className="mx-3"><label className="text-base">Up to 6 Suitcases</label></IconField>
                <IconField iconName="las la-check" className="mx-3"><label className="text-base">Free cancellation and change</label></IconField>
              </div>
            </CarCard>
            <CarCard imageSrc="/Cars/black_8_seater-150x100.png" imageAlt="Car 1" heading="PRIMO Taxi Sedan">
              <div>
                <IconField iconName="las la-check" className="mx-3"><label className="text-base">Up to 8 Passengers</label></IconField>
                <IconField iconName="las la-check" className="mx-3"><label className="text-base">Up to 8 Suitcases</label></IconField>
                <IconField iconName="las la-check" className="mx-3"><label className="text-base">Free cancellation and change</label></IconField>
              </div>
            </CarCard>
          </div>
        </div>
      </main>

  );
}

export default PageHome;
