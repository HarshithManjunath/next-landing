import Image from "next/image";
import ghlogo from "../../../public/GitHub_Logo_White.png";
import lilogo from "../../../public/Linkedin_Logo_White.png";

export default function Linkcard() {
  const links = [
    {
      logo: ghlogo,
      link: "https://github.com/HarshithManjunath",
    },
    {
      logo: lilogo,
      link: "https://www.linkedin.com/in/harshith-manjunath-232185184/",
    },
  ];
  return (
    <div className="links-cards-container flex space-x-3 px-3  md:px-2.5 lg:px-5">
      {links?.map((link, i) => (
        <div key={i}>
          <a href={link?.link} target="_blank" rel="noopener noreferrer">
            <div
              className={`link w-20 flex justify-center border-2 border-slate-500 px-3 py-2 rounded-lg bg-gray-900 cursor-pointer hover:bg-gray-800`}
            >
              <div className="logo">
                <Image
                  src={link?.logo}
                  //   width={100}
                  height={20}
                  className=""
                  alt="github link"
                />
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
