import {
  BanknotesIcon,
  BeakerIcon,
  BuildingLibraryIcon,
  CpuChipIcon,
  GlobeAltIcon,
  GlobeAmericasIcon,
  HeartIcon,
  NewspaperIcon,
  PlayIcon,
  TrophyIcon,
} from "@heroicons/react/24/outline";

export const CATEGORY_CARD_BACKGROUND_COLORS = {
  ORANGE: "bg-orange-500",
  TEAL: "bg-teal-500",
  INDIGO: "bg-indigo-500",
  PINK: "bg-pink-500",
  YELLOW: "bg-yellow-500",
  PURPLE: "bg-purple-500",
  GREEN: "bg-green-500",
  RED: "bg-red-500",
  BLUE: "bg-blue-500",
};

export const CATEGORY_ICONS: {
  [key: string]: {
    text: string;
    Icon: React.ForwardRefExoticComponent<
      React.PropsWithoutRef<React.SVGProps<SVGSVGElement>>
    >;
  };
} = {
  WORLD: { text: "mundo", Icon: GlobeAltIcon },
  POLICY: { text: "política", Icon: BuildingLibraryIcon },
  TECHNOLOGY: { text: "tecnología", Icon: CpuChipIcon },
  SCIENCE: { text: "ciencia", Icon: BeakerIcon },
  ECONOMY: { text: "economía", Icon: BanknotesIcon },
  CULTURE: { text: "cultura", Icon: GlobeAmericasIcon },
  ENTERTAINMENT: { text: "entretenimiento", Icon: PlayIcon },
  HEALTH: { text: "salud", Icon: HeartIcon },
  SPORTS: { text: "deportes", Icon: TrophyIcon },
  DEFAULT: { text: "default", Icon: NewspaperIcon },
};
