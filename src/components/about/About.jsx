import HomeBannerImage from "../../assets/images/jisoo.png";

const About = () => {
  return (
    <div className="mx-auto px-6 md:px-12 mt-20 bg-cprimary py-10" id="about">
      <section className="mb-16">
        <h2 className="mb-4 md:mb-12 text-center text-3xl font-bebas font-bold">
          ABOUT ME:
        </h2>
        <div className="w-full">
          <div className="flex mb-6 md:mb-32 h-full items-center rounded-lg bg-yellow-600 text-center text-dark lg:text-left">
            <div className="md:pl-12">
              <h2 className="mb-8 text-3xl font-bold">See About Me</h2>
              <p className="pb-2 text-lg md:text-xl md:leading-loose ">
                My name is{" "}
                <span className="text-lg md:text-xl font-bold text-primary">
                  La Pyae
                </span>
                .I was born on June 29,2000 in Khun Taung Gyi village,Shwe
                Bo,Saging Region to U Thar Htoo and Daw Myint Thi. I have a
                total of six family members,my brother is Tha Gyan Ko Ko, my
                sisters are Nwe Zin Htun and Thi Mar Htun.
              </p>

              <p className="pb-2 text-lg md:text-xl md:leading-loose">
                I have been studying at the high school in our village since
                2005.I passed the university entrance exam in 2016 and I will
                continue my education at University of Computer Studies,Monywa.
              </p>
              <p className="pb-2 text-lg md:text-xl md:leading-loose">
                In 2022,due to covid ,the university was closed. After the
                university was closed,I returned to the village and worked
                farming with my family until Feb 2022.In March,I came to Yangon
                and entered the IT field to work.Now, I am continuing to learn
                IT.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
