const About = () => {
  return (
    <div class="mx-auto px-6 md:px-12 mt-20" id="about">
      <section class="mb-32">
        <h2 class="mb-4 md:mb-12 text-center text-2xl font-bebas font-bold">
          ABOUT ME:
        </h2>

        <div class="mb-16 flex flex-wrap order-last md:order-first">
          <div class="mb-6 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:pr-6">
            <div
              class="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/city/028.jpg"
                className="w-full"
                alt="Louvre"
              />
            </div>
          </div>

          <div class="w-full shrink-0  text-center md:text-start grow-0 basis-auto md:w-6/12">
            <h3 class="mb-4 text-xl  md:text-2xl font-bold">
              That's the news!
            </h3>
            <p class="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
              Published <u>14.01.2022</u> by
              <a href="#!">Lisa McCartney</a>
            </p>
            <p class="mb-6 text-neutral-500 dark:text-neutral-300">
              Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
              vulputate. Ut vulputate est non quam dignissim elementum. Donec a
              ullamcorper diam.
            </p>
            <p class="text-neutral-500 dark:text-neutral-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae
              nulla saepe rerum aspernatur odio amet perferendis tempora
              mollitia? Ratione unde magni omnis quaerat blanditiis cumque
              dolore placeat rem dignissimos?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
