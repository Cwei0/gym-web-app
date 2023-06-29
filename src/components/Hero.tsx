import { useContext } from "react";
import { motion } from "framer-motion";
import { SelectedPage } from "../types";
import { useMediaQueries } from "../hooks";
import { ActionButton } from "../utils";
import { SelectedPageContext } from "../context";
import HomePageText from "../assets/HomePageText.png";
import SponsorForbes from "../assets/SponsorForbes.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SponsorFortune from "../assets/SponsorFortune.png";
import SponsorRedBull from "../assets/SponsorRedBull.png";
import HomePageGraphic from "../assets/HomePageGraphic.png";

export const Hero = () => {
  const { setSelectedPage } = useContext(SelectedPageContext);
  const isAboveMediumScreen = useMediaQueries("(min-width:1060px)");
  return (
    <section
      id="home"
      className="gap-16 bg-gray-20 py-10 md:pb-0 h-full"
    >
      {/* Image & Main Header */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* Main Header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[-1] md:before:content-evolvetext">
                <img
                  src={HomePageText}
                  alt="Home-Page-Text"
                />
              </div>
            </div>
            <p className="mt-8 text-sm md:text-start">
              Unrivaled Gym. Unparralled Training Fitness Classes. World Class
              Studios to get the Body Shapes that you dream of..Get Your Dream
              Body Now.
            </p>
          </motion.div>
          {/* Actions */}
          <motion.div
            className="mt-8 flex items-center gap-8 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            variants={{
              hidden: { opacity: 0, x: -70 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/* Image */}
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img
            src={HomePageGraphic}
            alt="HomePageGraphic"
          />
        </div>
      </motion.div>
      {/* Sponsors */}
      {isAboveMediumScreen && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img
                src={SponsorRedBull}
                alt="redbull sponsor"
              />
              <img
                src={SponsorForbes}
                alt="forbes sponsor"
              />
              <img
                src={SponsorFortune}
                alt="fortune sponsor"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
