import React from 'react';
import DanaImage from '../assets/Dana.jpg';

function AboutMe() {
  return (
    <main className="container mx-auto pt-8 px-4 mb-">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20" id="AboutMe">
        <div className="md:col-span-2 bg-purple-200 bg-opacity-50 rounded-3xl p-8 text-center shadow-xl overflow-auto" style={{ maxHeight: '80vh', backdropFilter: 'blur(10px)' }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-center text-purple-900">About Me!</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-800">
            {/*About Me content*/}
            Welcome to the digital playground of Vinyl Development, where galaxies collide, code comes to life, and every day is an adventure with my fur-covered crew and amazing partner in the stunning backdrop of St. George, Utah. Here, amidst the red rocks and desert skies, I've found my calling not just in the vastness of nature but in the boundless realms of web development and AI.
            <br /><br />
            My journey into the tech universe wasn't your typical rocket launch. It all started with a spark of curiosity and a PC build back in 2019. The thrill of assembling pieces into a functioning whole led me down a rabbit hole of discovery, from dabbling in the arts of bots and Discord servers to envisioning a career that didn't follow the traditional orbit. Enter the world of bootcamps — my gateway to becoming a full-stack web developer without the years-long voyage through theoretical academia. It was love at first code line, and I've been hooked ever since, crafting digital experiences and solving puzzles in ways I never imagined.
            <br /><br />
            Imagine this: a bootcamp grad with a penchant for backend magic and database design, finding zen in the orderly rows of data and the challenge of turning concepts into code. That's me. I thrived on the collaborative energy of group projects, aiming not just for the MVP but for something that felt like us, imbued with our collective spirit and hard work.
            <br /><br />
            But why stop at web development? The universe of AI beckons with its promise of uncharted territories. From crafting new universes with Midjourney to dialogues with ChatGPT, I've glimpsed the future, and I'm ready to dive in. By the end of 2024, I'll be wrapping my mind around AI even more, with plans to blend these new skills into a universe where web development meets intelligent innovation.
            <br /><br />
            Freelancing is my starship, offering the freedom to explore new worlds of creativity and apply my skills in meaningful ways while building my professional cosmos. React, databases, and bringing dream projects to life are just the beginning. What sets me apart? A gamer's eye for detail, a storyteller's heart, and a knack for making the complex feel simple, ensuring every user's journey is intuitive, engaging, and fun!
            <br /><br />
            Beyond the screen, life is an open-world game. Whether I'm rolling dice for a critical hit in our weekly Dungeons & Dragons campaign, leading my gaming community on Discord, or cycling through the stunning landscapes of Utah with my partner and our energetic border collie-corgi mix, Koda, every day is a new adventure. My latest quest? Mastering the art of baking focaccia bread, proof that even in the kitchen, I'm all about leveling up. These quests, from virtual dungeons to the real-world trails, ignite my creativity and infuse my approach to problem-solving and design with a unique blend of fun and functionality.
            <br /><br />
            Looking forward, I see a path filled with coding challenges, AI explorations, and projects that spark joy and innovation. My mission? To craft digital experiences that resonate, entertain, and make a difference, all while navigating the tech landscape with ethics and empathy. And who knows? Perhaps I'll also design that ultimate biking app for dog lovers or bring more AI companions into our online communities.
            <br /><br />
            So, to all potential collaborators and clients drifting through this digital galaxy: if you're looking for a developer who blends passion, creativity, and a gamer's enthusiasm for new challenges, you've landed in the right place. Let's join forces and create something out of this world.
            <br /><br />
            Welcome to my portfolio. I'm Dana Fulmer, ready to level up and bring your digital dreams to life. 
            <br /><br />
            Let the adventure begin!
          </p>
        </div>
        <div className="md:col-span-1 flex justify-center items-center">
          <img id="me" src={DanaImage} alt="Picture of Dana" className="rounded-lg object-cover w-full h-full max-w-none" style={{ minHeight: '300px' }} />
        </div>
      </section>
    </main>
  );
}

export default AboutMe;
