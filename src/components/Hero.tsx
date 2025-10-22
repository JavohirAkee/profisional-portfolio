import { MapPin, Calendar, ExternalLink, Github, Mail, Phone, } from 'lucide-react';
import Logotype from '../img/dev-logo.webp'
const Hero = () => {
  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block p-1 mt-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-3">
            <div className="w-24 h-24 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-300 shadow-lg">
              <img src={Logotype} alt="Javoxir Qo'chqorov" className='rounded-full w-full h-full object-cover'/>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Javoxir Qo'chqorov
            </span>
          </h1>
          
          <div className="text-xl sm:text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
            Frontend Developer
          </div>
          
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 mb-8 transition-colors duration-300">
            <MapPin size={18} />
            <span>Tashkent, UZ</span>
            <span className="mx-2">•</span>
            <Calendar size={18} />
            <span>Oct 2024 – Present</span>
          </div>
          
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed transition-colors duration-300">
            Passionate frontend developer building responsive and user-friendly web applications 
            with React, Next.js, and modern web technologies. Currently expanding my skills through 
            hands-on internship experience and continuous learning.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/JavohirAkee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-600 btn-hover"
            >
              <Github size={20} />
              GitHub
              <ExternalLink size={16} />
            </a>
            
            <a
              href="mailto:m12562513@gmail.com"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 btn-hover"
            >
              <Mail size={20} />
              Email Me
            </a>
            
            <a
              href="tel:+998938698878"
              className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-teal-700 btn-hover"
            >
              <Phone size={20} />
              Call Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;