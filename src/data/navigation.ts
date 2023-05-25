import { NavItemType } from "@/app/components/shared/Navigation/NavigationItem";
import ncNanoId from "@/utils/ncNanoId";
import { Route } from "@/routers/types";

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/listing-stay",
    name: "Features",
    type: "dropdown",
    children: [
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Berkel en Rodenrijs", content: "Taxi Berkel en Rodenrijs", icon: "las la-check" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Bleiswijk", content: "Taxi Berkel en Rodenrijs", icon: "las la-check" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Capelle aan den IJssel", content: "Taxi Berkel en Rodenrijs", icon: "las la-check" },
      { id: ncNanoId(), href: "/listing-stay", name: "Taxi Botlek", content: "Taxi Berkel en Rodenrijs", icon: "las la-check" },
      { id: ncNanoId(), href: "/listing-stay-map", name: "Taxi Barendrecht", content: "Taxi Berkel en Rodenrijs", icon: "las la-check" },
      { id: ncNanoId(), href: "/listing-stay-detail", name: "Taxi Bergschenhoek", content: "Taxi Berkel en Rodenrijs", icon: "las la-check" },
    ], 
  }, 
  {
    id: ncNanoId(),
    href: "/",
    name: "Integrations",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Customers",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Enterprise",
  },
  {
    id: ncNanoId(),
    href: "/",
    name: "Pricing",
  },
];