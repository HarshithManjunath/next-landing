import { geistMono } from "../fonts";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/outline";

type Expcardtype = {
  data: {
    title: string;
    subtitle: string;
    text: string;
  }[];
};

export default function Expcard({ data }: Expcardtype) {
  return (
    <div
      className={`${geistMono.className} expcard-container flex space-x-3 overflow-x-scroll overflow-y-none scrollbar-hide`}
    >
      {data?.map((item, i) => {
        return (
          <div
            className="exp-cards h-72 min-w-72 md:max-w-80 p-3 border-2 border-cardbordercolor rounded-lg bg-cardbg"
            key={i}
          >
            <div className="exp-title font-normal text-2xl md:text-xl truncate ...">
              {item?.title}
            </div>
            <div className="exp-subtitle">{item?.subtitle}</div>
            <div className="exp-exp-details md:text-sm lg:text-base line-clamp-8">
              {item?.text}
            </div>
            <div className="readmr w-100 flex justify-end items-center space-x-1.5 cursor-pointer">
              <span>read more</span> <ArrowTrendingUpIcon className="h-5" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
