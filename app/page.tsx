import Card from "@/components/Card";
import { LampContainer } from "@/components/Lamp";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <header>
        <div className="text-center text-2xl sm:text-5xl font-bold">
          <LampContainer children={
            <h1>MarcDevCEO's Portfolio</h1>
          } />
        </div>
        <div className="m-14 text-center text-lg sm:text-2xl italic">
          <h2>Welcome to my Developing World!!!</h2>
        </div>
      </header>
      <section className="flex flex-col sm:items-center mx-5 my-14 text-sm">
          <p>🚀 Building the Future, One Line of Code at a Time</p>
          <p>🎯 Check out my latest web apps, insights, and experience.</p>
          <p>👉 Check out my projects, dive into my insights, and see how I bring ideas to life!</p>
      </section>      
      <section>
        <h1 className=" sm:text-2xl font-semibold text-center my-5">
          Click to Check Out each Collection
        </h1>
        <div className="flex flex-wrap justify-evenly gap-5 m-5">
          <Card
            image="/images/projects.jpg"
            content="My Collection of All my Projects"
            href="/projects"
            alt="My Projects"
          />
          <Card
            image="/images/blog3.jpg"
            content="A Collection of My Thoughts through My Journey"
            href="/blog"
            alt="My Blog"
          />
          <Card
            image="/images/resume.jpg"
            content="A Collection of My Skills and Experiences"
            href="/resume"
            alt="My Resume"
          />
        </div>
      </section>
    </main>
  );
}
