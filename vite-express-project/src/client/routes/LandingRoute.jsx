import React from "react";

export default function Home({ openModal }) {
  return (
    <div>
      {/* Hero + CTA button */}
      <div className="flex flex-row items-center p-10 justify-center h-screen">
        <article className="p-4 my-15">
          <h1 className="flex flex-col font-heading text-6xl justify-start">
            Victoria Unleashed
            <p className="font-heading text-5xl">Where Art Flourishes</p>
          </h1>
          <h3 className="font-subHeading text-lg text-textSecondary">
            Join a Thriving Ecosystem of Local Artists and Enthusiasts
          </h3>
          <div className="inline-flex space-x-6 w-full mt-6 sm:w-auto">
            <button
              // className="btn inline-flex items-center justify-center w-full px-7 py-3 py-1 text-white duration-300 bg-button rounded-lg hover:bg-buttonHover focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              className="btn btn-primary w-64 text-white"
              onClick={openModal}
            >
              Join Now
            </button>
          </div>
        </article>
        <div className="block relative overflow-hidden rounded-full w-80 h-80">
          <img
            src="/src/client/assets/hero_img.jpg"
            alt="victoria fantang alley"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="max-w-3xl mx-auto my-28 h-screen">
        <p className="font-subHeading text-2xl text-textSecondary">
          Welcome to #####, where Victoria's art scene comes alive.
        </p>
        <p className="font-subHeading text-2xl text-textSecondary">
          Whether you're an artist seeking inspiration or a creative enthusiast
          ready to embrace local talent,
          <span className="text-primary">our platform awaits.</span>
        </p>
      </div>

      <section>
        <div className="flex flex-row justify-center items-center my-20 h-screen">
          <div className="block relative overflow-hidden rounded-full w-80 h-80">
            <img
              src="/src/client/assets/artist.jpg"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="m-10">
            <h2 className="font-subHeading text-xl mb-2">For Artists</h2>
            <p className="font-bodyFont max-w-sm text-textSecondary">
              Unlock Victoria's Creative Pulse: Connect with local artists who
              breathe life into your vision.
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center my-20 h-screen">
          <div className="m-10">
            <h2 className="font-subHeading text-xl mb-2">
              For Art Lovers and Community
            </h2>
            <p className="font-bodyFont max-w-sm text-textSecondary">
              Explore Victoria's Artistry: Immerse yourself in projects, events,
              and local talent.
            </p>
          </div>
          <div className="block relative overflow-hidden rounded-full w-80 h-80">
            <img
              src="/src/client/assets/community.jpg"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      <div className="my-20 py-20 bg-primary h-screen">
        <h1 className="font-heading text-5xl dark:text-white">Elevate Your Artistic journey in Victoria!</h1>
        <h1 className="font-heading text-3xl dark:text-white">Ignite creativity, collaborate, and empower local artistry.</h1>
      </div>
    </div>
  );
}
