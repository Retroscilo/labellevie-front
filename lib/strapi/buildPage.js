import CTA from "@/components/CTA";
import Testimony from "@/components/Testimony";
import Section from "@/components/Section";
import Bullet from "@/components/Bullet";
import Procons from "@/components/Procons";
import Cards from "@/components/Cards";
import MiniSection from "@/components/MiniSection";

export const components = {
    CTA,
    testimony: Testimony,
    section: Section,
    bullet: Bullet,
    procons: Procons,
    cards: Cards,
    "mini-section": MiniSection,
};

export function getComponent(component) {
    return components[component];
}
