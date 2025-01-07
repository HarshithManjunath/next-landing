import { geistMono } from "../fonts";

export default function InfoSection({ text }: { text: string }) {
  return (
    <div
      className={`${geistMono.className} info-container p-3 md:p-2.5 md:text-sm lg:p-5 lg:text-base`}
    >
      {text}
    </div>
  );
}
