import image1 from "../assets/runacos.png";
import image2 from "../assets/smartspend.png";
import { ChevronRight } from "lucide-react";

const Project = () => {
  return (
    <section
      className="font-dm-sans text-white min-h-screen flex flex-col justify-center bg-[#0d0f14] px-4 sm:px-8 md:px-16 lg:px-56"
      id="project"
    >
      <h1 className="font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl">
        Selected Work
      </h1>
      <p className="text-base sm:text-lg mt-4">
        Recent Projects where I&apos;ve helped Clients achieve their technical
        and business goals.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mt-10">
        <div className="bg-[#13161d] border border-[#222633] hover:border-[#16a34a] transition-colors duration-500 flex flex-col rounded-2xl py-5">
          <img
            src={image1}
            alt="Project 1"
            className="w-5/6 rounded-2xl self-center"
          />
          <div className="w-5/6 mt-6 flex flex-col justify-between flex-1 self-center">
            <div className="flex gap-2.5">
              <span className="bg-[#1e1f25] border-[#222633] rounded-3xl text-gray-300 px-5 py-2 text-sm">
                Next.JS
              </span>
              <span className="bg-[#1e1f25] border-[#222633] rounded-3xl text-gray-300 px-5 py-2 text-sm">
                Prisma
              </span>
              <span className="bg-[#1e1f25] border-[#222633] rounded-3xl text-gray-300 px-5 py-2 text-sm">
                MySql
              </span>
            </div>
            <h2 className="font-syne font-extrabold text-xl sm:text-2xl my-5">
              Runacos
            </h2>
            <p className="text-sm sm:text-base text-[#7c8394]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              mattis tempus urna, lobortis mollis massa faucibus eget. Sed et
              enim congue, malesuada nisi ut, iaculis urna.
            </p>
            <hr className="border-[#1e1f25] mt-3" />
            <a
              href="https://runacos.vercel.app"
              className="text-[#7c8394] hover:text-[#7c8394]/90 flex items-center justify-between my-5"
            >
              View Live Site
              <ChevronRight />
            </a>
          </div>
        </div>
        <div className="bg-[#13161d] border border-[#222633] hover:border-[#16a34a] transition-colors duration-500 flex flex-col rounded-2xl py-5">
          <img
            src={image2}
            alt="Project 2"
            className="w-5/6 rounded-2xl self-center"
          />
          <div className="w-5/6 mt-6 flex flex-col justify-between flex-1 self-center">
            <div className="flex gap-2.5">
              <span className="bg-[#1e1f25] border-[#222633] rounded-3xl text-gray-300 px-5 py-2 text-sm">
                Next.JS
              </span>
              <span className="bg-[#1e1f25] border-[#222633] rounded-3xl text-gray-300 px-5 py-2 text-sm">
                Prisma
              </span>
              <span className="bg-[#1e1f25] border-[#222633] rounded-3xl text-gray-300 px-5 py-2 text-sm">
                MySql
              </span>
            </div>
            <h2 className="font-syne font-extrabold text-xl sm:text-2xl my-5">
              Smart-Spend
            </h2>
            <p className="text-sm sm:text-base text-[#7c8394]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              mattis tempus urna, lobortis mollis massa faucibus eget. Sed et
              enim congue, malesuada nisi ut, iaculis urna. Pellentesque
              habitant morbi tristique senectus et netus et malesuada.
            </p>
            <hr className="border-[#1e1f25] mt-3" />
            <a
              href="https://smartspend.vercel.app"
              className="text-[#7c8394] hover:text-[#7c8394]/90 flex items-center justify-between my-5"
            >
              View Live Site
              <ChevronRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
