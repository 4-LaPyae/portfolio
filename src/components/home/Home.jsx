import HomeBannerImage from "../../assets/images/anime.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Home = () => {
  return (
    // <>
    //   <div className="grid px-7 md:grid-cols-2 py-10 gap-4" id="home">
    //     <div className="flex flex-col justify-center md:items-start text-center">
    //       <div className="py-10 md:py-5">
    //         <h3 className="text-cprimary md:text-start  text-base md:text-lg ">
    //           HELLO,MY NAME IS
    //         </h3>
    //         <h1 className=" py-5 font-bold text-7xl  italic text-white">
    //           La Pyae
    //         </h1>
    //         <h2 className="text-primary md:text-4xl text-3xl ">
    //           Web Developer
    //         </h2>
    //       </div>
    //       <div className="w-full hidden md:block text-start text-sm md:mt-14 md:text-lg">
    //         <div>
    //           <FontAwesomeIcon className="text-primary" icon={faEnvelope} />
    //           <span className="px-2 text-cprimary">
    //             lapyae2022.gm@gmail.com
    //           </span>
    //         </div>
    //         <div>
    //           <FontAwesomeIcon className="text-primary" icon={faPhone} />
    //           <span className="px-2 text-cprimary">09-753710388</span>
    //         </div>
    //         <div>
    //           <FontAwesomeIcon className="text-primary" icon={faGithub} />
    //           <span className="px-2 text-cprimary hover:text-blue">
    //             <a href="https://github.com//4-LaPyae">
    //               https://github.com//4-LaPyae
    //             </a>
    //           </span>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="order-first md:order-last">
    //       <img
    //         src={HomeBannerImage}
    //         className="w-full object-center rounded-full "
    //         alt="banner"
    //       />
    //     </div>
    //   </div>
    // </>
    <div class="mx-auto px-6 md:px-12  bg-cprimary py-10">
      <section class="md:mb-32 bg-neutral-50 text-center md:text-left">
        <div class="px-6 py-5 md:px-12">
          <div class="flex grid items-center md:gap-12 md:grid-cols-2">
            <div class="mt-4 md:mt-12">
              <span class=" text-xl font-bebas text-cu">HELLO,I'm</span>
              <h1 class="md-3 md:mb-6 text-5xl text-cu font-bebas font-bold leading-tight tracking-tight">
                La Pyae <br />
                <span class="text-primary font-bebas">Web Developer</span>
              </h1>
              <p class="text-neutral-600 dark:text-neutral-200">
                I studied at Computer University of Monywa.I have good
                communication skills and critical thinking.
              </p>
              {/* <div className="w-full hidden md:block text-start text-sm md:mt-14 md:text-lg">
                <div>
                  <FontAwesomeIcon className="text-primary" icon={faEnvelope} />
                  <span className="px-2 text-primary">
                    lapyae2022.gm@gmail.com
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon className="text-primary" icon={faPhone} />
                  <span className="px-2 text-primary">09-753710388</span>
                </div>
                <div>
                  <FontAwesomeIcon className="text-primary" icon={faGithub} />
                  <span className="px-2 text-primary hover:text-blue">
                    <a href="https://github.com//4-LaPyae">
                      https://github.com//4-LaPyae
                    </a>
                  </span>
                </div>
              </div> */}
            </div>
            <div class="mb-12 md:mb-0 order-first md:order-last">
              <img
                src={HomeBannerImage}
                class="w-full rounded-lg shadow-lg dark:shadow-black/20"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
