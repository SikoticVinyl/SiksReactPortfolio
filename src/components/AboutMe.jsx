import React from 'react';
import DanaImage from '../assets/Dana.jpg'; 

function AboutMe() {
  return (
    <main className="container mx-auto py-8">
      <section className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-8 sm:flex-col-reverse" id="AboutMe">
        <div className="md:w-1/2 border rounded-full p-8 text-center bg-opacity-60 bg-purple-400">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center glow">About Me!</h2>
          <p className="text-gray-700 text-center glow">
          Hello! I’m Dana Fulmer, a burgeoning full-stack web developer with a knack for creating dynamic user experiences. Currently immersed in an intensive boot camp, I’m on a journey to transform the canvas of the web — one line of code at a time. My latest endeavor? This portfolio, handcrafted with React, which stands as a testament to my evolving craft.
            <br /><br />
            Nestled in the picturesque vistas of Southern Utah, St. George isn't just my home; it's my playground. When I'm not immersed in code, you can find me leading a vibrant gaming community on Discord, delving into virtual worlds, or enjoying the great outdoors with my boyfriend and our beloved quartet of pets. Whether cycling through the scenic byways or carving down snow-clad slopes, I believe in living life to the fullest.
            <br /><br />
            My fascination with technology extends to the realm of artificial intelligence, where I'm captivated by its potential to redefine our future. Post-graduation, my horizon is brimming with opportunities — from honing my skills on personal projects to embracing the challenges of freelance work. My goal? To leverage my passion and expertise to solve real-world problems.
            <br /><br />
            Professionally, I've honed my interpersonal skills at Morgan Stanley, guiding clients through the digital labyrinth as a Digital Support CSR. Yet, the call of the tech world is undeniable. I'm poised to transition from customer service to collaborative innovation, eager to contribute to a team that values creativity and drive.
            <br /><br />
            As I pivot my career path towards the tech industry, I bring with me a unique blend of problem-solving abilities, a customer-centric mindset, and a relentless desire to learn. I’m excited to explore opportunities where I can contribute, grow, and make a tangible impact. Let's connect and create the future!
          </p>
        </div>
        <div className="md:w-1/2">
          <img id="me" src={DanaImage} alt="Picture of Dana" className="w-full md:max-w-sm mx-auto rounded-full" />
        </div>
      </section>
    </main>
  );
}

export default AboutMe;
