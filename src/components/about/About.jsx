import HomeBannerImage from "../../assets/images/jisoo.png";

const About = () => {
  return (
    // <div class="mx-auto px-6 md:px-12 mt-20" id="about">
    //   <section class="mb-32">
    //     <h2 class="mb-4 md:mb-12 text-center text-2xl font-bebas font-bold">
    //       ABOUT ME:
    //     </h2>

    //     <div class="mb-16 flex flex-wrap order-last md:order-first">
    //       <div class="mb-6 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:pr-6">
    //         <div
    //           class="ripple relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
    //           data-te-ripple-init
    //           data-te-ripple-color="light"
    //         >
    //           <img
    //             src="https://mdbcdn.b-cdn.net/img/new/standard/city/028.jpg"
    //             className="w-full"
    //             alt="Louvre"
    //           />
    //         </div>
    //       </div>

    //       <div class="w-full shrink-0  text-center md:text-start grow-0 basis-auto md:w-6/12">
    //         <h3 class="mb-4 text-xl  md:text-2xl font-bold">
    //           That's the news!
    //         </h3>
    //         <p class="mb-6 text-sm text-neutral-500 dark:text-neutral-400">
    //           Published <u>14.01.2022</u> by
    //           <a href="#!">Lisa McCartney</a>
    //         </p>
    //         <p class="mb-6 text-neutral-500 dark:text-neutral-300">
    //           Ut pretium ultricies dignissim. Sed sit amet mi eget urna placerat
    //           vulputate. Ut vulputate est non quam dignissim elementum. Donec a
    //           ullamcorper diam.
    //         </p>
    //         <p class="text-neutral-500 dark:text-neutral-300">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae
    //           nulla saepe rerum aspernatur odio amet perferendis tempora
    //           mollitia? Ratione unde magni omnis quaerat blanditiis cumque
    //           dolore placeat rem dignissimos?
    //         </p>
    //       </div>
    //     </div>
    //   </section>
    // </div>
    <div class="mx-auto px-6 md:px-12 mt-20 bg-cprimary py-10" id="about">
      <section class="mb-16">
        <h2 class="mb-4 md:mb-12 text-center text-3xl font-bebas font-bold">
          ABOUT ME:
        </h2>
        <div class="flex flex-wrap">
          <div class="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-5/12">
            <div class="flex md:py-12">
              {/* <img
                src={HomeBannerImage}
                class="z-[10] w-full rounded-lg shadow-lg dark:shadow-black/20 md:ml-[50px]"
                alt="image"
              /> */}
            </div>
          </div>

          <div class="w-full  shrink-0 grow-0 basis-auto md:w-7/12">
            <div class="flex h-full items-center rounded-lg bg-yellow-600 p-6 text-center text-dark lg:pl-12 lg:text-left">
              <div class="md:pl-12">
                <h2 class="mb-8 text-3xl font-bold">Let it surprise you</h2>
                <p class="mb-8 pb-2 md:pb-0">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Maxime, sint, repellat vel quo quisquam accusamus in qui at
                  ipsa enim quibusdam illo laboriosam omnis. Labore itaque illum
                  distinctio eum neque!
                </p>

                <p>
                  Duis sagittis, turpis in ullamcorper venenatis, ligula nibh
                  porta dui, sit amet rutrum enim massa in ante. Curabitur in
                  justo at lorem laoreet ultricies. Nunc ligula felis, sagittis
                  eget nisi vitae, sodales vestibulum purus. Vestibulum nibh
                  ipsum, rhoncus vel sagittis nec, placerat vel justo. Duis
                  faucibus sapien eget tortor finibus, a eleifend lectus dictum.
                  Cras tempor convallis magna id rhoncus. Suspendisse potenti.
                  Nam mattis faucibus imperdiet. Proin tempor lorem at neque
                  tempus aliquet. Phasellus at ex volutpat, varius arcu id,
                  aliquam lectus. Vestibulum mattis felis quis ex pharetra
                  luctus. Etiam luctus sagittis massa, sed iaculis est vehicula
                  ut.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
