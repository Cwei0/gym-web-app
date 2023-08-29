/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";
import { motion } from "framer-motion";
import { SelectedPage } from "../types";
import { SelectedPageContext } from "../context";
import ContactUsPageGraphic from "../assets/ContactUsPageGraphic.png";
import { ContactUsSchema, ContactUsSchemaType, Htext } from "../utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const ContactUs = () => {
  const { setSelectedPage } = useContext(SelectedPageContext);
  const inputStyles =
    "mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white";
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<ContactUsSchemaType>({
    resolver: zodResolver(ContactUsSchema),
  });

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section
      id="contactus"
      className="mx-auto w-5/6 pb-32 pt-24"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* Header */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Htext>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </Htext>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, unde
            temporibus consequatur impedit nihil maiores, aliquid qui ex
            deleniti corrupti saepe sunt dolore, ullam ducimus. A ea fugit
            debitis?
          </p>
        </motion.div>
        {/* Form and Image */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={handleSubmit(onSubmit)}
              method="POST"
              action="https://formsubmit.co/your@email.com"
            >
              <input
                type="text"
                placeholder="NAME"
                className={`${inputStyles}`}
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "This field is required."}
                </p>
              )}
              <input
                type="text"
                placeholder="EMAIL"
                className={`${inputStyles}`}
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Invalid Email Address"}
                </p>
              )}
              <textarea
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                className={`${inputStyles}`}
                {...register("message", { required: true, maxLength: 2000 })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "This field is required."}
                </p>
              )}

              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: -60 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
              <img
                className="w-full"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
