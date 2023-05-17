import { MegamenuItem, NavItemType } from "@/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";
import { Route } from "@/routers/types";
import __megamenu from "./jsons/__megamenu.json";

const megaMenuDemo: MegamenuItem[] = [
  {
    id: ncNanoId(),
    image:
      "/Images/Bmw-7-Serie-300x225.jpg",
    title: "Company",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/",
      name: i.Company,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "/Images/Luxe-Mercedes-V-klasse-300x225.webp",
    title: "App Name",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/",
      name: i.AppName,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "/Images/Mercedes-E-klasse-300x225.webp",
    title: "City",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/",
      name: i.City,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "/Images/Mercedes-S-klasse-300x225.webp",
    title: "Contruction",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/",
      name: i.Contruction,
    })),
  },
  {
    id: ncNanoId(),
    image:
      "/Images/Tesla-Model-S-300x225.webp",
    title: "Country",
    items: __megamenu.map((i) => ({
      id: ncNanoId(),
      href: "/",
      name: i.Country,
    })),
  },
];

const demoChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Online booking",
  },
  {
    id: ncNanoId(),
    href: "/home-2",
    name: "Real estate",
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/home-3",
    name: "Home 3",
    isNew: true,
  },
];

const otherPageChildMenus: NavItemType[] = [
  { id: ncNanoId(), href: "/blog", name: "Blog page" },
  { id: ncNanoId(), href: "/blog/single" as Route, name: "Blog single" },
  { id: ncNanoId(), href: "/about", name: "About" },
  { id: ncNanoId(), href: "/contact", name: "Contact us" },
  { id: ncNanoId(), href: "/login", name: "Login" },
  { id: ncNanoId(), href: "/signup", name: "Signup" },
];

const templatesChildrenMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/add-listing/1" as Route,
    name: "Add listing",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/add-listing/1" as Route,
        name: "Add listing 1",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/2" as Route,
        name: "Add listing 2",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/3" as Route,
        name: "Add listing 3",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/4" as Route,
        name: "Add listing 4",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/5" as Route,
        name: "Add listing 5",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/6" as Route,
        name: "Add listing 6",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/7" as Route,
        name: "Add listing 7",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/8" as Route,
        name: "Add listing 8",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/9" as Route,
        name: "Add listing 9",
      },
      {
        id: ncNanoId(),
        href: "/add-listing/10" as Route,
        name: "Add listing 10",
      },
    ],
  },
  //
  { id: ncNanoId(), href: "/checkout", name: "Checkout" },
  { id: ncNanoId(), href: "/pay-done", name: "Pay done" },
  //
  { id: ncNanoId(), href: "/author", name: "Author page" },
  { id: ncNanoId(), href: "/account", name: "Account page" },
  //
  {
    id: ncNanoId(),
    href: "/subscription",
    name: "Subscription",
  },
];

export const NAVIGATION_DEMO: NavItemType[] = [
  // {
  //   id: ncNanoId(),
  //   href: "/",
  //   name: "Home",
  //   type: "dropdown",
  //   children: demoChildMenus,
  //   isNew: true,
  // },
  // {
  //   id: ncNanoId(),
  //   href: "/",
  //   name: "Five columns",
  //   type: "megaMenu",
  //   megaMenu: megaMenuDemo,
  // },
  {
    id: ncNanoId(),
    href: "/listing-stay",
    name: "Taxi",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/listing-stay", name: "Taxi Botlek" },
      { id: ncNanoId(), href: "/listing-stay-map", name: "Taxi Barendrecht", },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Bergschenhoek" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Berkel en Rodenrijs" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Bleiswijk" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Capelle aan den IJssel" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Europoort" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Hoogvliet" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Krimpen aan den IJssel" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Lansingerland" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Leidschendam-Voorburg" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Maasvlakte Rotterdam" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Ridderkerk" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Schiedam" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Spijkenisse" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Rijswijk" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Vlaardingen" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Wassenaar" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Amsterdam" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Den Haag" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Kijkduin" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Delft" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Airport Taxi",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Zakelijk",
  },
  {
    id: ncNanoId(),
    href: "/listing-stay",
    name: "Diensten",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/listing-stay", name: "Trouw Vervoer" },
      { id: ncNanoId(), href: "/listing-stay-map", name: "VIP Taxi", },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Luxe Taxi" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Groepsvervoer" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Blog",
  },
  {
    id: ncNanoId(),
    href: "/listing-stay",
    name: "Info",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/listing-stay", name: "Trouw Vervoer" },
      { id: ncNanoId(), href: "/listing-stay-map", name: "VIP Taxi", },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Luxe Taxi" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Groepsvervoer" },
    ],
  },
  {
    id: ncNanoId(),
    href: "/listing-stay", 
    icon: "/flags/nl.png", 
    name: "Netherlands",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/listing-stay", icon: "/flags/en.png", name: "English" },
      { id: ncNanoId(), href: "/listing-stay-map", icon: "/flags/de.png", name: "Deutch", },
      { id: ncNanoId(), href: "/listing-stay-detail", icon: "/flags/fr.png", name: "Francais" },
      { id: ncNanoId(), href: "/listing-stay-detail", icon: "/flags/da.png", name: "Dansk" },
    ],
  },
  // {
  //   id: ncNanoId(),
  //   href: "/listing-stay",
  //   name: "Listing Page",
  //   type: "dropdown",
  //   children: [
  //     {
  //       id: ncNanoId(),
  //       href: "/listing-stay",
  //       name: "Stay listings",
  //       type: "dropdown",
  //       children: [
  //         { id: ncNanoId(), href: "/listing-stay", name: "Stay page" },
  //         {
  //           id: ncNanoId(),
  //           href: "/listing-stay-map",
  //           name: "Stay page (map)",
  //         },
  //         { id: ncNanoId(), href: "/listing-stay-detail", name: "Stay Detail" },
  //       ],
  //     },

  //     //
  //     {
  //       id: ncNanoId(),
  //       href: "/listing-experiences",
  //       name: "Experiences listings",
  //       type: "dropdown",
  //       children: [
  //         {
  //           id: ncNanoId(),
  //           href: "/listing-experiences",
  //           name: "Experiences page",
  //         },
  //         {
  //           id: ncNanoId(),
  //           href: "/listing-experiences-map",
  //           name: "Experiences page (map)",
  //         },
  //         {
  //           id: ncNanoId(),
  //           href: "/listing-experiences-detail",
  //           name: "Experiences Detail",
  //         },
  //       ],
  //     },

  //     //
  //     {
  //       id: ncNanoId(),
  //       href: "/listing-car",
  //       name: "Cars listings",
  //       type: "dropdown",
  //       children: [
  //         { id: ncNanoId(), href: "/listing-car", name: "Cars page" },
  //         { id: ncNanoId(), href: "/listing-car-map", name: "Cars page (map)" },
  //         { id: ncNanoId(), href: "/listing-car-detail", name: "Car Detail" },
  //       ],
  //     },

  //     //
  //     {
  //       id: ncNanoId(),
  //       href: "/listing-real-estate",
  //       name: "Real Estate Listings",
  //       type: "dropdown",
  //       children: [
  //         {
  //           id: ncNanoId(),
  //           href: "/listing-real-estate",
  //           name: "Real Estate Listings",
  //         },
  //         {
  //           id: ncNanoId(),
  //           href: "/listing-real-estate-map",
  //           name: "Real Estate Maps",
  //         },
  //       ],
  //     },
  //     //
  //     {
  //       id: ncNanoId(),
  //       href: "/listing-flights",
  //       name: "Flights listings",
  //     },
  //   ],
  // },
  // {
  //   id: ncNanoId(),
  //   href: "/author",
  //   name: "Templates",
  //   type: "dropdown",
  //   children: templatesChildrenMenus,
  // },

  // {
  //   id: ncNanoId(),
  //   href: "/blog",
  //   name: "Other pages",
  //   type: "dropdown",
  //   children: otherPageChildMenus,
  // },
];

export const NAVIGATION_DEMO_2: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    type: "dropdown",
    children: demoChildMenus,
    isNew: true,
  },

  //
  {
    id: ncNanoId(),
    href: "/listing-stay",
    name: "Listing pages",
    children: [
      { id: ncNanoId(), href: "/listing-stay", name: "Stay listings" },
      {
        id: ncNanoId(),
        href: "/listing-stay-map",
        name: "Stay listings (map)",
      },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Stay detail" },

      //
      {
        id: ncNanoId(),
        href: "/listing-experiences",
        name: "Experiences listings",
      },
      {
        id: ncNanoId(),
        href: "/listing-experiences-map",
        name: "Experiences (map)",
      },
      {
        id: ncNanoId(),
        href: "/listing-experiences-detail",
        name: "Experiences detail",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/listing-car",
    name: "Listing pages",
    children: [
      { id: ncNanoId(), href: "/listing-car", name: "Cars listings" },
      { id: ncNanoId(), href: "/listing-car-map", name: "Cars listings (map)" },
      { id: ncNanoId(), href: "/listing-car-detail", name: "Car detail" },

      //
      {
        id: ncNanoId(),
        href: "/listing-real-estate",
        name: "Real estate listings",
      },
      {
        id: ncNanoId(),
        href: "/listing-real-estate-map",
        name: "Real estate (map)",
      },
      //
      {
        id: ncNanoId(),
        href: "/listing-flights",
        name: "Flights listings",
      },
    ],
  },

  //
  {
    id: ncNanoId(),
    href: "/author",
    name: "Templates",
    type: "dropdown",
    children: templatesChildrenMenus,
  },

  //
  {
    id: ncNanoId(),
    href: "/blog",
    name: "Other pages",
    type: "dropdown",
    children: otherPageChildMenus,
  },
];
