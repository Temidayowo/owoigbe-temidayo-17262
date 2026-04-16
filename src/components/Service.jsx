import { LaptopMinimal, Layers, ShoppingCart } from "lucide-react";

const Service = () => {
  return (
    <section
      className="flex flex-col justify-center items-center bg-[#0d0f14] w-full min-h-screen px-4 sm:px-8 md:px-16 lg:px-48 py-7 font-dm-sans"
      id="services"
    >
      <h1 className="font-syne text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center">
        Core Services
      </h1>
      <p className="text-base sm:text-lg text-[#7c8394] text-center max-w-2xl mt-4">
        Specialised development services tailored to modern business needs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-20 mt-10 w-full">
        <div className="bg-[#13161d] hover:bg-[#1a1e28] border border-[#222633] hover:border-[#16a34a] rounded-2xl px-6 py-10 flex flex-col justify-center gap-4">
          <LaptopMinimal
            className="p-4 bg-[#22c55e]/10 rounded-xl border border-[#222633] group-hover:border-[#16a34a] group-hover:bg-[#22c55e]/20"
            color="#22c55e"
            size={52}
          />
          <h2 className="text-xl font-syne font-extrabold mt-3 text-white">
            Web Development
          </h2>
          <p className="text-[#7c8394]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            quis ullam assumenda totam maiores? Ratione, aperiam.
          </p>
          <hr className="border-[#1e1f25] mt-3" />
          <p className="text-[#7c8394] text-sm font-normal">Starting from</p>
          <h3 className="font-syne font-extrabold text-white">
            {"\u20A6"}50,000
          </h3>
        </div>
        <div className="bg-[#13161d] hover:bg-[#1a1e28] border border-[#222633] hover:border-[#16a34a] rounded-2xl px-6 py-10 flex flex-col justify-center gap-4">
          <Layers
            className="p-4 bg-[#22c55e]/10 rounded-xl border border-[#222633] group-hover:border-[#16a34a] group-hover:bg-[#22c55e]/20"
            color="#22c55e"
            size={52}
          />
          <h2 className="text-xl font-syne font-extrabold mt-3 text-white">
            Web Development
          </h2>
          <p className="text-[#7c8394]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            quis ullam assumenda totam maiores? Ratione, aperiam.
          </p>
          <hr className="border-[#1e1f25] mt-3" />
          <p className="text-[#7c8394] text-sm font-normal">Starting from</p>
          <h3 className="font-syne font-extrabold text-white">
            {"\u20A6"}50,000
          </h3>
        </div>
        <div className="bg-[#13161d] hover:bg-[#1a1e28] border border-[#222633] hover:border-[#16a34a] rounded-2xl px-6 py-10 flex flex-col justify-center gap-4">
          <ShoppingCart
            className="p-4 bg-[#22c55e]/10 rounded-xl border border-[#222633] group-hover:border-[#16a34a] group-hover:bg-[#22c55e]/20"
            color="#22c55e"
            size={52}
          />
          <h2 className="text-xl font-syne font-extrabold mt-3 text-white">
            Web Development
          </h2>
          <p className="text-[#7c8394]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            quis ullam assumenda totam maiores? Ratione, aperiam.
          </p>
          <hr className="border-[#1e1f25] mt-3" />
          <p className="text-[#7c8394] text-sm font-normal">Starting from</p>
          <h3 className="font-syne font-extrabold text-white">
            {"\u20A6"}50,000
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Service;
