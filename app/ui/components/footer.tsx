import Image from "next/image";
import { geistMono } from "../fonts";
import copyright from "../icons/copyright.svg";

export default function Footer() {
  return (
    <div
      className={`${geistMono.className} footer-component px-3 md:px-2.5 lg:p-5 pb-3 w-100 flex justify-end items-center space-x-2 text-sm`}
    >
      <div className="copyright-logo">
        <Image
          aria-hidden
          src={copyright}
          alt="Copyright icon"
          width={16}
          height={16}
        />
      </div>
      <div className="footer-text text-texthighlight">harshith</div>
    </div>
  );
}
