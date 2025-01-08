import { geistMono } from "../fonts";

export default function InfoSection({ text }: { text: string }) {
  return (
    <div
      className={`${geistMono.className} info-container md:text-sm lg:text-base`}
    >
      {text}
    </div>
  );
}
