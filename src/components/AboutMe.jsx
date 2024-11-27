import React from 'react';
import DanaImage from '../assets/Dana.jpg';

function AboutMe() {
  return (
    <main className="container mx-auto pt-8 px-4 spacing">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8" id="AboutMe">
        <div className="md:col-span-2 bg-purple-200 bg-opacity-50 rounded-3xl p-8 text-center shadow-xl overflow-auto" style={{ maxHeight: '80vh', backdropFilter: 'blur(10px)' }}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-center text-purple-900">About Me!</h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-800">
            Welcome to the digital playground of Vinyl Development, where code meets artificial intelligence, and every day brings new opportunities for innovation in the stunning backdrop of St. George, Utah. Here, amidst the red rocks and desert skies, I've evolved from a web developer into an AI Software Engineer, bridging the gap between traditional development and the exciting frontiers of artificial intelligence.
            <br /><br />
            My journey into the tech universe has been an ever-expanding adventure. From that first PC build in 2019 to becoming a full-stack web developer through bootcamp training, each step has been driven by curiosity and a desire to push boundaries. Now, armed with comprehensive AI and machine learning certification, I've added powerful new tools to my developer toolkit – from Python-based machine learning models to natural language processing and deep learning techniques.
            <br /><br />
            Picture this: a developer who speaks both the language of web applications and artificial intelligence, finding harmony in the intersection of frontend finesse and AI innovation. I've mastered the art of creating Python scripts for data manipulation, building neural networks for predictions, and implementing NLP transformers, all while maintaining my passion for crafting engaging user experiences.
            <br /><br />
            As an AI developer, I believe in staying deeply informed about the broader implications of artificial intelligence. I actively follow and analyze AI's impact across multiple sectors – from its influence on financial markets and energy consumption to its socioeconomic effects and ethical considerations. This comprehensive understanding shapes my approach to development, ensuring that I create solutions that are not just technically sound but also ethically responsible and sustainable.
            <br /><br />
            The future of AI in gaming and web experiences drives my current projects. I'm developing an AI-enhanced gaming companion through Overwolf, crafting intelligent Discord bots, and working on transforming this very portfolio into an interactive, analytics-driven experience. These projects aren't just about showcasing technical skills – they're about creating meaningful interactions between users and AI technology.
            <br /><br />
            Freelancing remains my launchpad for exploration, offering opportunities to integrate AI solutions into web applications and tackle diverse challenges. What sets me apart? A full-stack developer's architectural vision, an AI engineer's analytical mindset, and a gamer's dedication to leveling up – ensuring every project benefits from both technical excellence and creative innovation.
            <br /><br />
            Life beyond the screen continues to fuel my creativity. At the heart of it all is our vibrant gaming community on Discord, where a close-knit group of adult gamers gather to unwind and share adventures. When I'm not coding or gaming, you'll find me cycling through Utah's breathtaking landscapes with my partner and our energetic border collie-corgi mix, Koda. As we look toward the future, we're excited about the prospect of purchasing our first home, where we dream of creating a space that combines our love for technology with sustainable living through smart home automation and garden planning.
            <br /><br />
            Looking forward, I see endless possibilities at the intersection of web development and AI. My mission? To create intelligent, accessible applications that make a real difference, while maintaining a strong commitment to ethical AI development. Whether developing AI-enhanced gaming experiences, building smarter web solutions, or crafting tools that bridge the gap between traditional web development and artificial intelligence, I prioritize responsible innovation that considers both technological advancement and societal impact.
            <br /><br />
            To all potential collaborators drifting through this digital galaxy: if you're seeking an AI Software Engineer who combines technical expertise with creative vision and an insatiable appetite for learning, while maintaining a thoughtful approach to AI's broader implications, you've landed in the right place. Let's create something extraordinary together, pushing the boundaries of what's possible when web development meets artificial intelligence.
            <br /><br />
            I'm Dana Fulmer, and I'm ready to transform your ideas into intelligent, innovative solutions.
            <br /><br />
            Let's build the future, one line of code at a time.
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