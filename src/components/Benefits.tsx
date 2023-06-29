import { useContext } from "react";
import { Variants, motion } from "framer-motion";
import { SelectedPageContext } from "../context";
import { BenefitType, SelectedPage } from "../types";
import { ActionButton, Benefit, Htext } from "../utils";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import BenefitPageGraphic from "../assets/BenefitsPageGraphic.png";

export const Benefits = () => {
  const { setSelectedPage } = useContext(SelectedPageContext);
  const iconStyle = "h-6 w-6";
  const benefits: BenefitType[] = [
    {
      icons: <HomeModernIcon className={`${iconStyle}`} />,
      title: "State of the Art Facilities",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nesciunt iste doloribus ad optio sunt cupiditate!",
    },
    {
      icons: <UserGroupIcon className={`${iconStyle}`} />,
      title: "100's of Diverse Classes",
      description:
        "Bowsprit reef sails league Gold Road keelhaul clipper ahoy yo-ho-ho chase guns doubloon coffer boatswain gunwalls careen spanker bilge water.",
    },
    {
      icons: <AcademicCapIcon className={`${iconStyle}`} />,
      title: "Expert and Pro Trainers",
      description:
        "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder.",
    },
  ];
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };
  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      {/* Header Comments */}
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefit)}>
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>more than just a gym.</Htext>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>
        {/* Benefit */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icons={benefit.icons}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </motion.div>

        {/* Graphics && Desc. */}
        <div className=" mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* Graphics */}
          <img
            className="mx-auto"
            src={BenefitPageGraphic}
            alt="benefits-page-graphic"
          />

          {/* Description */}
          <div>
            {/* Title */}
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <Htext>
                    millions of happy members getting{" "}
                    <span className="text-primary-500">FIT</span>.
                  </Htext>
                </motion.div>
              </div>
            </div>
            {/* Description */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus voluptatum temporibus molestias, officia voluptate
                necessitatibus repudiandae, dolorem debitis quod velit sint
                maxime voluptatem illum rem dolorum fugit deserunt corporis
                sapiente quia, magnam dignissimos. Facere, ratione voluptate?
                Temporibus ipsam neque explicabo laborum veritatis adipisci a
                nesciunt voluptatem molestias?
              </p>
              <p className="mb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                maxime vero reprehenderit repudiandae quasi consectetur
                aspernatur hic possimus dolorum rem et ipsam, quo nihil officiis
                voluptas commodi debitis illo ex. Aliquid aliquam dignissimos
                nemo eaque.
              </p>
            </motion.div>
            {/* Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
