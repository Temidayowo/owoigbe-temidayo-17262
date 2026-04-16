import temidayo from "../assets/file_00000000c7d07246a06244ddc3f72e6b.png";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa6";

const About = () => {
  return (
    <section
      className="flex flex-col justify-center items-center bg-[#0d0f14] w-full min-h-screen px-4 sm:px-8 md:px-16 lg:px-48 py-7 font-dm-sans"
      id="about"
    >
      <div className="bg-[#13161d] border border-[#222633] rounded-2xl px-28 py-10 w-full flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 md:gap-10">
        <div className="w-60 h-60 rounded-full border-10 border-[#1a1e28] overflow-hidden shrink-0">
          <img
            src={temidayo}
            alt="Temidayo"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full flex flex-col justify-center gap-4 ">
          <h1 className="font-syne text-white font-extrabold text-3xl sm:text-4xl md:text-4xl lg:text-5xl mt-6 text-center md:text-left">
            Hi, I&apos;m Temidayo
          </h1>
          <p className="text-[#7c8394] text-base sm:text-lg mt-4 text-center md:text-left">
            I am a passionate and dedicated web developer with a strong focus on
            creating high-quality, user-friendly websites and applications. With
            a background in computer science and years of experience in the
            industry, I have honed my skills in various programming languages
            and frameworks, allowing me to deliver innovative solutions that
            meet the unique needs of each client. I am committed to staying
            up-to-date with the latest technologies and trends in web
            development, ensuring that my work is always cutting-edge and
            effective.
          </p>
          <div className="flex gap-4">
            <div className="bg-[#1a1e28] p-3 rounded-full hover:bg-[#22c55e]/20 transition-colors">
              <FaGithub size={24} color="white" />
            </div>
            <div className="bg-[#1a1e28] p-3 rounded-full hover:bg-[#22c55e]/20 transition-colors">
              <FaLinkedinIn size={24} color="white" />
            </div>
            <div className="bg-[#1a1e28] p-3 rounded-full hover:bg-[#22c55e]/20 transition-colors">
              <FaTwitter size={24} color="white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
