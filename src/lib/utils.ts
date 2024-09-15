import { clsx, type ClassValue } from "clsx";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//image placeholder

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" class="rounded-md" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#EEFBFC" offset="20%" />
      <stop stop-color="#EFFFFD" offset="50%" />
      <stop stop-color="#EEFBFC" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#EEFBFC" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const generatePlaceholder = (width: number, height: number): any =>
  `data:image/svg+xml;base64,${toBase64(shimmer(width, height))}`;
