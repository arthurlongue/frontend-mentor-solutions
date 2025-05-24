import img1 from "/images/avatar-ali.png";
import img2 from "/images/avatar-anisha.png";
import img3 from "/images/avatar-richard.png";
import img4 from "/images/avatar-shanai.png";

const IMAGES = [
  { url: img1, alt: "Avatar One" },
  { url: img2, alt: "Avatar Two" },
  { url: img3, alt: "Avatar Three" },
  { url: img4, alt: "Avatar Four" },
];

import { useState } from "react";

const App: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <div className="Home font flex flex-col items-center justify-center gap-14 self-center bg-white text-lg text-blue-950">
        <nav className="container relative mx-auto p-6">
          <div className="flex items-center justify-between">
            <div className="pt-2">
              <img src="images/logo.svg" alt="" />
            </div>
            <div className="hidden space-x-6 md:flex">
              <a href="#" className="hover:text-darkGrayishBlue">
                Pricing
              </a>
              <a href="#" className="hover:text-darkGrayishBlue">
                Product
              </a>
              <a href="#" className="hover:text-darkGrayishBlue">
                About Us
              </a>
              <a href="#" className="hover:text-darkGrayishBlue">
                Careers
              </a>
              <a href="#" className="hover:text-darkGrayishBlue">
                Community
              </a>
            </div>
            <a
              href="#"
              className="bg-brightRed baseline hover:bg-brightRedLight hidden rounded-full p-3 px-6 pt-2 text-white md:block"
            >
              Get Started
            </a>

            <button
              id="menu-btn"
              className={`hamburger block focus:outline-none md:hidden ${
                isNavOpen ? "open" : ""
              }`}
              onClick={toggleNav}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>

          <div className={`md:hidden${isNavOpen ? "flex" : ""}`}>
            <div
              id="menu"
              className={`absolute left-6 right-6 mt-10 flex-col items-center space-y-6 self-end bg-white py-8 font-bold drop-shadow-md sm:w-auto sm:self-center md:hidden ${
                isNavOpen ? "flex" : "hidden"
              }`}
            >
              <a href="#">Pricing</a>
              <a href="#">Product</a>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Community</a>
            </div>
          </div>
        </nav>

        <div className="flex flex-col-reverse place-content-center lg:flex-row">
          <div className="flex max-w-[600px] flex-col gap-y-5 p-6 text-left">
            <h1 className="text-5xl font-bold">
              Bring everyone together to build better products.
            </h1>
            <p className="text-gray-400">
              Manage makes it simple for software teams to plan day-to-day tasks
              while keeping the larger team goals in view.
            </p>
            <button className="self-center rounded-full bg-orange-600 px-8 py-3 text-sm text-white drop-shadow-lg hover:opacity-50 xl:self-start">
              Get Started
            </button>
          </div>
          <img
            className="max-w-[300px]"
            src="./images/illustration-intro.svg"
            alt=""
          />
        </div>
        <div className="flex max-w-[900px] flex-col place-content-center gap-10 lg:flex-row">
          <div className="flex max-w-[540px] flex-col gap-5 p-6">
            <h1 className=" text-4xl font-bold">
              What’s different about Manage?
            </h1>
            <p className="text-gray-400">
              Manage provides all the functionality your team needs, without the
              complexity. Our software is tailor-made for modern digital product
              teams.
            </p>
          </div>

          <div className="flex max-w-[600px] flex-col gap-10 self-center p-4">
            <div className="flex items-start gap-4">
              <p className="rounded-full bg-orange-600 px-6 py-1 text-white">
                01
              </p>
              <div>
                <h1 className="pb-4 font-bold">Track company-wide progress</h1>
                <p className="text-gray-400">
                  See how your day-to-day tasks fit into the wider vision. Go
                  from tracking progress at the milestone level all the way done
                  to the smallest of details. Never lose sight of the bigger
                  picture again.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <p className="rounded-full bg-orange-600 px-6 py-1 text-white">
                02
              </p>
              <div>
                <h1 className="pb-4 font-bold">Advanced built-in reports</h1>
                <p className="text-gray-400">
                  Set internal delivery estimates and track progress toward
                  company goals. Our customisable dashboard helps you build out
                  the reports you need to keep key stakeholders informed.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <p className="rounded-full bg-orange-600 px-6 py-1 text-white">
                03
              </p>
              <div>
                <h1 className="pb-4 font-bold">
                  Everything you need in one place
                </h1>
                <p className="text-gray-400">
                  Stop jumping from one service to another to communicate, store
                  files, track tasks and share documents. Manage offers an
                  all-in-one team productivity solution.
                </p>
              </div>
            </div>
          </div>
        </div>
        <h1 className="my-28 text-center text-3xl font-bold md:text-5xl">
          What they’ve said
        </h1>
        <div className="flex flex-col flex-wrap justify-center gap-24 md:flex-row">
          <div className="relative flex max-w-[400px] flex-col items-center gap-5 bg-gray-100 px-6 pb-10">
            <img
              className="absolute -top-20 pb-10"
              src="./images/avatar-ali.png"
              alt=""
            />
            <p className="pt-[22%] font-bold">Anisha Li</p>
            <p className="text-gray-400">
              “Manage has supercharged our team’s workflow. The ability to
              maintain visibility on larger milestones at all times keeps
              everyone motivated.”
            </p>
          </div>
          <div className="relative flex max-w-[400px] flex-col items-center gap-5 bg-gray-100 px-6 pb-10">
            <img
              className="absolute -top-20 pb-10"
              src="./images/avatar-anisha.png"
              alt=""
            />
            <p className="pt-[22%] font-bold">Ali Bravo</p>
            <p className="text-gray-400">
              “We have been able to cancel so many other subscriptions since
              using Manage. There is no more cross-channel confusion and
              everyone is much more focused.”
            </p>
          </div>
          <div className="relative flex max-w-[400px] flex-col items-center gap-5 bg-gray-100 px-6 pb-10">
            <img
              className="absolute -top-20 pb-10"
              src="./images/avatar-richard.png"
              alt=""
            />
            <p className="pt-[22%] font-bold">Richard Watts</p>
            <p className="text-gray-400">
              “Manage allows us to provide structure and process. It keeps us
              organized and focused. I can’t stop recommending them to everyone
              I talk to!”
            </p>
          </div>
          {/* <div className="relative flex flex-col items-center gap-5 bg-gray-100 px-6 pb-10">
            <img
              className="absolute -top-20 pb-10"
              src="./images/avatar-shanai.png"
              alt=""
            />
            <p className="pt-[22%] font-bold">Shanai Gough</p>
            <p className="text-gray-400">
              “Their software allows us to track, manage and collaborate on our
              projects from anywhere. It keeps the whole team in-sync without
              being intrusive.”
            </p>
          </div> */}
        </div>
        <button className="rounded-full bg-orange-600 px-8 py-3 text-sm text-white drop-shadow-lg hover:opacity-50">
          Get Started
        </button>
        <div
          id="cta"
          className="flex w-full flex-col bg-orange-600 px-4 py-14 text-center md:flex-row"
        >
          <p className="m-auto pb-5 text-center text-3xl font-bold text-white">
            Simplify how your team works today.
          </p>
          <button className="m-auto rounded-full bg-white px-8 py-3 font-bold  text-orange-600 drop-shadow-lg hover:opacity-80">
            Get Started
          </button>
        </div>
        <footer className="w-full bg-slate-950">
          <div className="container mx-auto flex flex-col-reverse justify-between space-y-8 px-6 py-10 md:flex-row md:space-y-0">
            <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:items-start md:space-y-0">
              <div className="mx-auto my-6 text-center text-white md:hidden">
                Copyright &copy; 2022, All Rights Reserved
              </div>
              <div>
                <img src="images/logo-white.svg" className="h-8" alt="" />
              </div>
              <div className="flex justify-center space-x-4">
                <a href="#">
                  <img src="images/icon-facebook.svg" alt="" className="h-8" />
                </a>
                <a href="#">
                  <img src="images/icon-youtube.svg" alt="" className="h-8" />
                </a>
                <a href="#">
                  <img src="images/icon-twitter.svg" alt="" className="h-8" />
                </a>
                <a href="#">
                  <img src="images/icon-pinterest.svg" alt="" className="h-8" />
                </a>
                <a href="#">
                  <img src="images/icon-instagram.svg" alt="" className="h-8" />
                </a>
              </div>
            </div>
            <div className="flex justify-around space-x-24">
              <div className="flex flex-col space-y-3 text-white">
                <a href="#" className="hover:text-brightRed">
                  Home
                </a>
                <a href="#" className="hover:text-brightRed">
                  Pricing
                </a>
                <a href="#" className="hover:text-brightRed">
                  Products
                </a>
                <a href="#" className="hover:text-brightRed">
                  About
                </a>
              </div>
              <div className="flex flex-col space-y-3 text-white">
                <a href="#" className="hover:text-brightRed">
                  Careers
                </a>
                <a href="#" className="hover:text-brightRed">
                  Community
                </a>
                <a href="#" className="hover:text-brightRed">
                  Privacy Policy
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <form>
                <div className="flex flex-wrap space-x-3">
                  <input
                    type="text"
                    className="flex-1 rounded-full px-4 focus:outline-none"
                    placeholder="Updated in your inbox"
                  />
                  <button className="bg-brightRed hover:bg-brightRedLight rounded-full px-6 py-2 text-white focus:outline-none">
                    Go
                  </button>
                </div>
              </form>
              <div className="hidden text-white md:block">
                Copyright &copy; 2022, All Rights Reserved
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;
