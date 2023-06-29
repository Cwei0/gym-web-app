import { useContext } from "react";
import { SelectedPageContext } from "../context";
import { motion } from "framer-motion";
import { SelectedPage } from "../types";
import { Htext } from "../utils";

export const OurClasses = () => {
  const { setSelectedPage } = useContext(SelectedPageContext);
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
      </motion.div>
    </section>
  );
};
