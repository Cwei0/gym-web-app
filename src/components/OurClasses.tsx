import { useContext } from "react";
import { SelectedPageContext } from "../context";
import { motion } from "framer-motion";
import { ClassType, SelectedPage } from "../types";
import { Class, Htext } from "../utils";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";

export const OurClasses = () => {
  const { setSelectedPage } = useContext(SelectedPageContext);
  const classes: ClassType[] = [
    {
      name: "Weight Training Classes",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium vel reprehenderit ratione numquam at? Porro id, at velit voluptate nobis molestiae amet quod similique molestias ut, expedita quisquam commodi numquam ipsum. Voluptates laudantium earum nesciunt explicabo.",
      image: image1
    },
    {
      name: "Yoga Classes",
      image: image2
    },
    {
      name: "Ab core Classes",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium vel reprehenderit ratione numquam at? Porro id, at velit voluptate nobis molestiae amet quod similique molestias ut, expedita quisquam commodi numquam ipsum. Voluptates laudantium earum nesciunt explicabo.",
      image: image3
    },
    {
      name: "Adventure Classes",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium vel reprehenderit ratione numquam at? Porro id, at velit voluptate nobis molestiae amet quod similique molestias ut, expedita quisquam commodi numquam ipsum. Voluptates laudantium earum nesciunt explicabo.",
      image: image4
    },
    {
      name: "Fitness Classes",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium vel reprehenderit ratione numquam at? Porro id, at velit voluptate nobis molestiae amet quod similique molestias ut, expedita quisquam commodi numquam ipsum. Voluptates laudantium earum nesciunt explicabo.",
      image: image5
    },
    {
      name: "Training Classes",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium vel reprehenderit ratione numquam at? Porro id, at velit voluptate nobis molestiae amet quod similique molestias ut, expedita quisquam commodi numquam ipsum. Voluptates laudantium earum nesciunt explicabo.",
      image: image6
    }, 
  ]
  return (
    <section
      id="ourclasses"
      className="w-full bg-primary-100 py-40"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -70 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <Htext>our classes</Htext>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              quo in quod sapiente, mollitia facilis obcaecati doloribus
              expedita atque voluptate tempore veritatis exercitationem neque
              rerum placeat, ipsum perspiciatis, optio quis alias autem dolorem
              amet dolore eum!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[356px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class 
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
