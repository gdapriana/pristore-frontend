import { assets } from "../assets/assets";
import Title from "../components/title";
import { motion as m } from "motion/react"

const choosen = [
  {title: "Quality Assurance:", subtitle: "We meticulously select and vet each product to ensure it meets our stringent quality standards."},
  {title: "Convenience:", subtitle: "With our user-friendly interface and hassle-free ordering process, shopping has never been easier."},
  {title: "Exceptional Customer Service:", subtitle: "Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority."},
]

const About = () => {
  return (
    <div className="flex flex-col gap-8 justify-start items-stretch">
      <header className="p-4 sm:p-6 flex justify-center items-center">
        <Title text1="ABOUT" text2="US" className="text-xl"/>
      </header>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[auto_auto] grid-rows-[auto_auto] md:grid-rows-1">
        <div className="relative">
          <m.div animate={{ width: ["100%", "0"] }} transition={{ duration: 1, ease: "anticipate" }} className="bg-white absolute h-full top-0 left-0"></m.div>
          <img src={assets.about_img || ""} className="aspect-square object-cover md:w-[90%]" alt="about" /> 
        </div>
        <div className="flex flex-col justify-center items-start gap-8">
          <m.p 
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-gray-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur omnis porro maiores? Placeat accusantium quod veniam distinctio? Eaque reprehenderit dolorem debitis vero molestias similique adipisci facere enim placeat, deserunt atque itaque veniam fuga, reiciendis minus animi ipsam fugit labore nostrum officiis neque consequatur, quam a. Est vero quam voluptates accusamus qui alias tempora dolore maxime, nostrum asperiores quaerat officia accusantium?</m.p>
          <m.p 
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-500 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus, blanditiis eaque? Necessitatibus excepturi ad distinctio, ab suscipit earum dolore possimus reiciendis quidem, adipisci mollitia fuga minus provident quaerat iusto, fugit facilis ea ratione cum hic aperiam tempore! Assumenda, veritatis quidem.</m.p>
          <h3 className="font-bold">Our Mission</h3>
          <m.p 
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-gray-500 ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel quam repellendus accusantium inventore tempore laudantium quo maxime officia necessitatibus? Nobis.</m.p>
        </div>
      </div>
      <header className="py-4 sm:py-6 flex justify-start items-center">
        <Title text1="WHY CHOOSE" text2="US" className="text-xl pt-10" />
      </header>
      <div className="grid grid-cols-1 grid-rows-[auto_auto_auto] md:grid-cols-3 md:grid-rows-1">
        {choosen.map((item, index) => {
          return (
            <div className="px-16 py-20 border border-gray-200 flex flex-col justify-start items-start gap-2" key={index}>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-gray-500">{item.subtitle}</p>
            </div>
          )
        })}
      </div>
      <div className="flex flex-col my-16 justify-center items-center p-10 gap-2">
        <h1 className="md:text-2xl text-lg font-bold">Subscribe now & get 20% off</h1>
        <p className="text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui!</p>
        <form className="max-w-full mt-4 w-[600px] flex justify-center items-center">
          <input placeholder="Enter your email" type="text" className="flex-1 py-3 px-4 border border-gray-200" />
          <button className="py-3 px-4 text-white bg-black">SUBSRIBE</button>
        </form>
      </div>
    </div>
  );
};

export default About;