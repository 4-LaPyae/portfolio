import HomeBannerImage from "../../assets/images/lapyae3.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Home = () => {
  return (
    <div className="mx-auto px-6 md:px-12  bg-cprimary py-3 md:py-10">
      <section className="mb-10 md:mb-16 bg-neutral-50 text-center md:text-left">
        <div className=" py-5 md:px-12">
          <div className="flex grid items-center md:gap-12 md:grid-cols-2">
            <div className="md:mt-12">
              <span className=" text-xl font-bebas text-cu">HELLO,I'm</span>
              <h1 className="md-3 md:mb-6 text-4xl md:text-5xl text-cu font-bebas font-bold leading-tight tracking-tight">
                La Pyae <br />
                <span className="text-primary font-bebas">Web Developer</span>
              </h1>
              <p className="text-neutral-600 dark:text-neutral-200">
                I studied at Computer University of Monywa.I have good
                communication skills and critical thinking.
              </p>
              {/* <div classNameName="w-full hidden md:block text-start text-sm md:mt-14 md:text-lg">
                <div>
                  <FontAwesomeIcon classNameName="text-primary" icon={faEnvelope} />
                  <span classNameName="px-2 text-primary">
                    lapyae2022.gm@gmail.com
                  </span>
                </div>
                <div>
                  <FontAwesomeIcon classNameName="text-primary" icon={faPhone} />
                  <span classNameName="px-2 text-primary">09-753710388</span>
                </div>
                <div>
                  <FontAwesomeIcon classNameName="text-primary" icon={faGithub} />
                  <span classNameName="px-2 text-primary hover:text-blue">
                    <a href="https://github.com//4-LaPyae">
                      https://github.com//4-LaPyae
                    </a>
                  </span>
                </div>
              </div> */}
            </div>
            <div className="mb-12 md:mb-0 order-first md:order-last">
              <img
                src={HomeBannerImage}
                className="w-full  rounded-xl shadow-lg dark:shadow-black/20"
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
