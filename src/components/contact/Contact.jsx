import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <div class="mx-auto px-6 md:px-12 mt-20 bg-cprimary py-10" id="contact">
      <section class="mb-16">
        <h2 class="mb-7 md:mb-12 text-center text-3xl font-bebas font-bold">
          CONTACT ME:
        </h2>
        <div class="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
          <div class="flex flex-wrap items-center">
            <div class="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
              <div class="h-[500px] w-full">
                <iframe
                  src="https://maps.google.com/maps?q=Yangon&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  class="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                  frameborder="0"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
              <div class="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
                <div class="mb-3 md:mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                  <FontAwesomeIcon className="text-primary" icon={faEnvelope} />
                  <span className="px-2 font-bold">
                    lapyae2022.gm@gmail.com
                  </span>
                </div>
                <div class="mb-3 md:mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                  <FontAwesomeIcon className="text-primary" icon={faPhone} />
                  <a href="tel:+959753710388" className="px-2 font-bold">
                    09-753710388(Call Now)
                  </a>
                </div>
                <div class="mb-3 md:mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
                  <FontAwesomeIcon className="text-primary" icon={faGithub} />
                  <span className="px-2 font-bold hover:text-blue">
                    <a href="https://github.com//4-LaPyae" target="_blank">
                      https://github.com//4-LaPyae
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
