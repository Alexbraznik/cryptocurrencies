import { StaticImageData } from "next/image";
import { Adalina, Alexander, Lorenzo, Rushana } from "../assets";

interface IReview {
  id: number;
  photo: StaticImageData;
  name: string;
  twitter: string;
  comment: string;
  odd: boolean;
}

export const reviews: IReview[] = [
  {
    id: 1,
    photo: Lorenzo,
    name: "Lorenzo",
    twitter: "@lorenzoo",
    comment: "Amazing Telegram bot! Provides real-time crypto prices and news",
    odd: true,
  },
  {
    id: 2,
    photo: Adalina,
    name: "Adalina",
    twitter: "@ada",
    comment: "Must-have bot for crypto traders. Accurate signals and analysis",
    odd: false,
  },
  {
    id: 3,
    photo: Alexander,
    name: "Alexander",
    twitter: "@alex_x",
    comment: "Superb cryptocurrency bot! Quick updates and reliable data",
    odd: true,
  },
  {
    id: 4,
    photo: Rushana,
    name: "Rushana",
    twitter: "@Hana",
    comment: "Efficient and user-friendly bot. Simplifies crypto trading tasks",
    odd: false,
  },
];
