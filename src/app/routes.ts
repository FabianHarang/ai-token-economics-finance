import type { NavItem } from "./constants";

const SECTION_IDS: Partial<Record<NavItem, string>> = {
  "Research Library": "model-theory"
};

export function sectionId(item: NavItem): string {
  return SECTION_IDS[item] ?? item.toLowerCase().replaceAll(" ", "-");
}
