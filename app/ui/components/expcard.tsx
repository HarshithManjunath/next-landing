import { geistMono } from "../fonts";

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
      className={`${geistMono.className} expcard-container flex space-x-3 overflow-scroll`}
    >
      {data?.map((item, i) => {
        return (
          <div
            className="exp-cards h-72 w-72 p-3 border-2 border-cardbordercolor rounded-lg bg-cardbg"
            key={i}
          >
            <div className="exp-title font-extrabold text-xl truncate ...">
              {item?.title}
            </div>
            <div className="exp-subtitle">{item?.subtitle}</div>
            <div className="exp-exp-details md:text-sm lg:text-base line-clamp-9">
              {item?.text}
            </div>
          </div>
        );
      })}
    </div>
  );
}
