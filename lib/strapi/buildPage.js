import CTA from "@/components/CTA";
import Testimony from "@/components/Testimony";
import Section from "@/components/Section";
import Bullet from "@/components/Bullet";
import Procons from "@/components/Procons";
import Cards from "@/components/Cards";

export const components = {
  CTA,
  testimony: Testimony,
  section: Section,
  bullet: Bullet,
  procons: Procons,
  cards: Cards,
};

export function getComponent(component) {
  return components[component];
}
