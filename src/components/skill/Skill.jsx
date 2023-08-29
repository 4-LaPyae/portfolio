const skills = [
  {
    link: "https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/html.png",
    text: "HTML",
  },
  {
    link: "",
    text: "CSS",
  },
  {
    link: "https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/javascript.png",
    text: "JS",
  },
  {
    link: "",
    text: "BOOTSTRAP",
  },
  {
    link: "",
    text: "REACT",
  },
  {
    link: "",
    text: "REDUX",
  },
  {
    link: "",
    text: "TOOLKIT",
  },
  {
    link: "",
    text: "MUI",
  },
  {
    link: "",
    text: "PHP",
  },
  {
    link: "",
    text: "LARAVEL",
  },
  {
    link: "",
    text: "PHP",
  },
  {
    link: "",
    text: "JQUERY",
  },
  {
    link: "",
    text: "AJAX",
  },
  {
    link: "",
    text: "NODE JS",
  },
  {
    link: "",
    text: "EXPRESS JS",
  },
  {
    link: "",
    text: "TAILWIND",
  },
  {
    link: "",
    text: "REST API",
  },
  {
    link: "",
    text: "GIT",
  },
  {
    link: "",
    text: "MYSQL",
  },
  {
    link: "",
    text: "MONGODB",
  },
  {
    link: "",
    text: "APACHE",
  },
  {
    link: "",
    text: "NGINX",
  },
  {
    link: "",
    text: "UBUNTU",
  },
  {
    link: "",
    text: "MACOS",
  },
];
const Skill = () => {
  return (
    <div
      class="mx-auto h:screen px-6 md:px-12 mt-20 bg-cprimary py-10"
      id="skill"
    >
      <section>
        <h2 class="mb-4 md:mb-12 text-center text-3xl font-bebas font-bold">
          SKILLS:
        </h2>
        <div className="w-full flex">
          <div className="w-full md:w-9/12 grid gap-6 grid-cols-2 md:grid-cols-4">
            {skills.map((s) => (
              <button
                class="flex w-full justify-center  border-4 border-dark text-center  py-3 px-4 text-md font-bold hover:bg-cu"
                href="#"
                data-te-dropdown-item-ref
              >
                <img src={s.link} alt="" class="mr-3 w-6" />
                <span>{s.text}</span>
              </button>
            ))}
          </div>
          <div className="w-full md:w-4/12	">
            <a href="tel:+959753710388">call now</a>
          </div>
        </div>
      </section>
      {/* <section class="mb-32">
        <div class="mx-4 py-5 md:px-6 lg:px-8">
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ul>
              <li>
                <a
                  class="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/mdb-new.png"
                    alt=""
                    class="mr-3 w-6"
                  />
                  <span>MDBootstrap</span>
                </a>
              </li>
              <li>
                <a
                  class="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/react.png"
                    alt=""
                    class="mr-3 w-6"
                  />
                  <span>React</span>
                </a>
              </li>
              <li>
                <a
                  class="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/angular.png"
                    alt=""
                    class="mr-3 w-6"
                  />
                  <span>Angular</span>
                </a>
              </li>
              <li>
                <a
                  class="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/vue.png"
                    alt=""
                    class="mr-3 w-6"
                  />
                  <span>Vue</span>
                </a>
              </li>
              <li>
                <a
                  class="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/wordpress.png"
                    alt=""
                    class="mr-3 w-6 dark:brightness-200"
                  />
                  <span>WordPress</span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  class="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/laravel.png"
                    alt=""
                    class="mr-3 w-6"
                  />
                  <span>Laravel</span>
                </a>
              </li>
              <li>
                <a
                  class="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/nodejs.png"
                    alt=""
                    class="mr-3 w-6 dark:brightness-200"
                  />
                  <span>Node.js</span>
                </a>
              </li>
              <li>
                <a
                  class="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/mongodb.png"
                    alt=""
                    class="mr-3 w-6"
                  />
                  <span>Mongo DB</span>
                </a>
              </li>
              <li>
                <a
                  class="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/python.png"
                    alt=""
                    class="mr-3 w-6"
                  />
                  <span>Python</span>
                </a>
              </li>
              <li>
                <a
                  class="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/mysql.png"
                    alt=""
                    class="mr-3 w-6"
                  />
                  <span>MySQL</span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  class="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/php.png"
                    alt=""
                    class="mr-3 w-6 dark:brightness-200"
                  />
                  <span>PHP</span>
                </a>
              </li>
              <li>
                <a
                  class="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/javascript.png"
                    alt=""
                    class="mr-3 w-6"
                  />
                  <span>Pure JavaScript</span>
                </a>
              </li>
              <li>
                <a
                  class="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/html.png"
                    alt=""
                    class="mr-3 w-6"
                  />
                  <span>Any static website</span>
                </a>
              </li>
              <li>
                <a
                  class="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/expressjs.png"
                    alt=""
                    class="mr-3 w-6 dark:brightness-200"
                  />
                  <span>Express</span>
                </a>
              </li>
              <li>
                <a
                  class="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/socketio.png"
                    alt=""
                    class="mr-3 w-6 dark:brightness-200"
                  />
                  <span>SocketIO</span>
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a
                  class="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/passport.png"
                    alt=""
                    class="mr-3 w-6"
                  />
                  <span>Passport</span>
                </a>
              </li>
              <li>
                <a
                  class="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/tailwindcss.png"
                    alt=""
                    class="mr-3 w-6"
                  />
                  <span>Tailwind CSS</span>
                </a>
              </li>
              <li>
                <a
                  class="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                  href="#"
                  data-te-dropdown-item-ref
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/wp-content/themes/mdbootstrap4/content/en/_mdb5/_assets/img/icons/jamstack.png"
                    alt=""
                    class="mr-3 w-6"
                  />
                  <span>Jamstack</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section> */}
    </div>
  );
};
export default Skill;
