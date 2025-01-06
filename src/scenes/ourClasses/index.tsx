import { ClassType, SelectedPage } from "@/shared/types";

import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Yoga Classes",
    description:
      "Join our Yoga Classes to enhance your flexibility, strength, and mindfulness. Our expert instructors guide you through each session, helping you find balance, improve posture, and promote overall well-being. Suitable for all levels!",
    image: image3,
  },
  {
    name: "Weight Training Classes",
    description:
      "Strengthen and tone your body with our expert-led weight training classes. Suitable for all fitness levels, these sessions focus on building muscle, improving endurance, and enhancing overall strength through guided exercises and personalized coaching.",
    image: image1,
  },
  {
    name: "Fitness Classes",
    description:
      "Explore our wide range of fitness classes designed to suit all fitness levels. From high-energy group workouts to calming yoga sessions, our classes help you stay motivated, fit, and healthy.",
    image: image2,
  },
  {
    name: " Strength & Conditioning Classes",
    description:
      "Boost your power, endurance, and overall fitness with our Strength & Conditioning classes. Designed for all levels, these sessions combine strength training and high-intensity exercises to build muscle, improve performance, and enhance overall health.",
    image: image5,
  },
  {
    name: "Cardio Classes",
    description:
      "Boost your endurance and burn calories with our energetic Cardio Classes! From Zumba to Kickboxing and Indoor Cycling, our cardio sessions are designed to get your heart pumping and help you achieve your fitness goals in a fun, high-energy environment. ",
    image: image4,
  },

  {
    name: "Stretching & Mobility Classes",
    description:
      "Enhance your flexibility and range of motion with our Stretching & Mobility Classes. Designed to improve joint health, reduce muscle stiffness, and prevent injury, these classes are perfect for all fitness levels. Move better, feel better!",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5 ">
              At our gym, we offer a wide range of classes designed to help you
              reach your fitness goals, no matter your level. From high-energy
              cardio sessions to strength-building workouts and mindfulness
              practices, our expert trainers guide you through every move.
              Whether you're looking to lose weight, build muscle, or just stay
              active, we have a class for you. Join us today and discover a
              fitness routine that suits your lifestyle!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                description={item.description}
                name={item.name}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
export default OurClasses;
