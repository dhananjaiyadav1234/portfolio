import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import logo from "./assets/logo.png";
import profile from "./assets/profile.png";
import campuslogo from "./assets/campuslogo.png";

const Header = ({ theme, toggleTheme }) => (
  <header className={`fixed top-0 w-full ${theme === 'dark' ? 'bg-gray-950/90' : 'bg-white/90'} backdrop-blur-lg z-20 shadow-[0_0_20px_rgba(0,255,255,0.3)]`}>
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <img src={logo} alt="JARVIS Logo" className="h-12 w-12 animate-pulse" />
        <h1 className={`text-3xl font-['Orbitron'] ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} tracking-wider`}>JARVIS</h1>
      </div>
      <div className="flex items-center space-x-8">
        <ul className="flex space-x-8">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className={`${
                  theme === 'dark' ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-600'
                } transition-all duration-300 glow text-lg font-['Orbitron'] tracking-wide`}
                aria-label={`Navigate to ${item} section`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full ${
            theme === 'dark' ? 'bg-cyan-500 text-gray-900' : 'bg-cyan-600 text-white'
          } hover:opacity-80 transition-all duration-300`}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  </header>
);

const Hero = ({ theme }) => {
  const [text, setText] = useState('');
  const phrases = [
    'Dhananjai | Full stack web developer',
    'Dhananjai | Innovator',
    'Dhananjai | Problem Solver',
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    let i = 0;
    const currentPhrase = phrases[phraseIndex];
    const typing = setInterval(() => {
      if (i < currentPhrase.length) {
        setText(currentPhrase.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          setText('');
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 2000);
      }
    }, 100);
    return () => clearInterval(typing);
  }, [phraseIndex]);

  return (
    <motion.section
      id="home"
      className={`min-h-screen flex items-center justify-center ${
        theme === 'dark' ? 'bg-gradient-to-br from-gray-950 to-cyan-950/20' : 'bg-gradient-to-br from-white to-cyan-100/20'
      } relative overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div
        className={`absolute inset-0 bg-[radial-gradient(circle_at_center,${
          theme === 'dark' ? 'rgba(0,255,255,0.1)' : 'rgba(0,100,255,0.1)'
        },transparent)]`}
      />
      <div className="text-center z-10">
        <h2
          className={`text-6xl md:text-8xl font-['Orbitron'] ${
            theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
          } mb-6 animate-pulse tracking-tight`}
        >
          {text}
        </h2>
        <p
          className={`text-2xl ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          } max-w-3xl mx-auto font-['Roboto_Mono']`}
        >
          a place where you will get to know more about me and my work
        </p>
        <a
          href="#contact"
          className={`mt-8 inline-block px-8 py-4 ${
            theme === 'dark' ? 'bg-cyan-500 text-gray-900' : 'bg-cyan-600 text-white'
          } rounded-full hover:opacity-90 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,255,0.6)] animate-pulse font-['Orbitron'] text-lg`}
          aria-label="Contact me"
        >
          Engage Systems
        </a>
      </div>
    </motion.section>
  );
};

const ArcReactor = ({ theme }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 500);
  };

  return (
    <motion.section
      className={`py-24 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'} flex justify-center items-center relative overflow-hidden`}
      aria-label="Arc Reactor animation"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div
        className={`relative w-80 h-80 md:w-[500px] md:h-[500px] cursor-pointer ${isClicked ? 'scale-110 transition-transform duration-500' : ''}`}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-label="Interact with Arc Reactor"
        onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      >
        <div
          className={`absolute inset-0 rounded-full border-4 ${
            theme === 'dark' ? 'border-cyan-500/60 bg-cyan-900/10' : 'border-cyan-600/60 bg-cyan-200/10'
          } animate-[spin_12s_linear_infinite] shadow-[0_0_50px_rgba(0,255,255,0.4)]`}
        >
          <div
            className={`absolute w-4 h-4 ${
              theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-600'
            } rounded-full top-0 left-1/2 -translate-x-1/2 animate-flicker ${isClicked ? 'scale-150' : ''}`}
          />
        </div>
        <div
          className={`absolute inset-8 rounded-full border-3 ${
            theme === 'dark' ? 'border-cyan-400/70 bg-cyan-800/15' : 'border-cyan-500/70 bg-cyan-300/15'
          } animate-[spin_8s_linear_infinite_reverse] shadow-[0_0_30px_rgba(0,255,255,0.3)]`}
        >
          <div
            className={`absolute w-3 h-3 ${
              theme === 'dark' ? 'bg-cyan-300' : 'bg-cyan-500'
            } rounded-full top-0 left-1/2 -translate-x-1/2 animate-flicker`}
          />
        </div>
        <div
          className={`absolute inset-16 rounded-full border-2 ${
            theme === 'dark' ? 'border-cyan-300/80 bg-cyan-700/20' : 'border-cyan-400/80 bg-cyan-400/20'
          } animate-[spin_5s_linear_infinite] shadow-[0_0_20px_rgba(0,255,255,0.5)]`}
        >
          <div
            className={`absolute w-2 h-2 ${
              theme === 'dark' ? 'bg-cyan-200' : 'bg-cyan-400'
            } rounded-full top-0 left-1/2 -translate-x-1/2 animate-flicker`}
          />
        </div>
        <div
          className={`absolute inset-24 rounded-full ${
            theme === 'dark' ? 'bg-cyan-500/60' : 'bg-cyan-600/60'
          } animate-[pulse_2s_ease-in-out_infinite] shadow-[0_0_60px_rgba(0,255,255,0.8)] flex items-center justify-center ${
            isClicked ? 'shadow-[0_0_100px_rgba(0,255,255,1)]' : ''
          }`}
        >
          <div
            className={`w-20 h-20 ${theme === 'dark' ? 'bg-white' : 'bg-gray-200'} rounded-full shadow-[0_0_80px_rgba(0,255,255,1)] animate-[pulse_1.5s_ease-in-out_infinite]`}
          />
        </div>
        <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
          <div
            className={`absolute w-2 h-2 ${
              theme === 'dark' ? 'bg-cyan-300' : 'bg-cyan-500'
            } rounded-full top-10 left-10 animate-spark`}
          />
          <div
            className={`absolute w-2 h-2 ${
              theme === 'dark' ? 'bg-cyan-200' : 'bg-cyan-400'
            } rounded-full top-20 left-20 animate-spark delay-500`}
          />
          <div
            className={`absolute w-2 h-2 ${
              theme === 'dark' ? 'bg-cyan-400' : 'bg-cyan-600'
            } rounded-full bottom-10 right-10 animate-spark delay-1000`}
          />
        </div>
        <div
          className={`absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,${
            theme === 'dark' ? 'rgba(0,255,255,0.3)' : 'rgba(0,100,255,0.3)'
          },transparent)] animate-[flare_4s_ease-in-out_infinite] hover:shadow-[0_0_100px_rgba(0,255,255,0.9)] transition-shadow duration-300`}
        />
      </div>
    </motion.section>
  );
};

const About = ({ theme }) => (
  <motion.section
    id="about"
    className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-950 to-gray-900' : 'bg-gradient-to-b from-gray-100 to-gray-200'}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="container mx-auto px-6">
      <h2 className={`text-5xl font-['Orbitron'] ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} text-center mb-16 tracking-wider`}>
        Core Systems
      </h2>
      <div
        className={`max-w-4xl mx-auto ${
          theme === 'dark' ? 'bg-gray-900/30' : 'bg-gray-200/30'
        } p-10 rounded-xl shadow-[0_0_30px_rgba(0,255,255,0.2)] card-glow backdrop-blur-sm`}
      >
        <img
          src={profile}
          alt="Profile photo"
          className="h-40 w-40 rounded-full mx-auto mb-8 border-4 border-cyan-500 shadow-[0_0_20px_rgba(0,255,255,0.4)]"
        />
        <p
          className={`text-center text-lg font-['Roboto_Mono'] ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          I am a full stack web developer, I specialize in innovative web design and creative solutions for the problems we face
        </p>
      </div>
    </div>
  </motion.section>
);

const Skills = ({ theme }) => {
  const skills = [
    'React', 'Tailwind CSS', 'Socket.IO', 'MongoDB', 'Node.js', 'JavaScript', 'HTML5', 'CSS3'
  ];

  return (
    <motion.section
      id="skills"
      className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-950 to-gray-900' : 'bg-gradient-to-b from-gray-100 to-gray-200'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <h2 className={`text-5xl font-['Orbitron'] ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} text-center mb-16 tracking-wider`}>
          Tech Matrix
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`${
                theme === 'dark' ? 'bg-gray-900/20' : 'bg-gray-200/20'
              } p-4 rounded-lg card-glow backdrop-blur-sm text-center ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              } font-['Roboto_Mono'] hover:text-cyan-400 transition-all duration-300`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const Projects = ({ theme }) => {
  const projects = [
    {
      title: 'Campus Cravings',
      description: 'An ecommerce food platform inside a campus using Socket.IO, MongoDB, and for frontend React and Tailwind CSS.',
    },
    {
      title: 'Neon Dashboard',
      description: 'A responsive analytics dashboard built with Tailwind CSS for real-time data visualization.',
    },
    {
      title: 'AI Nexus',
      description: 'An AI-driven automation tool with a sci-fi interface, powered by machine learning algorithms.',
    },
  ];

  return (
    <motion.section
      id="projects"
      className={`py-20 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        <h2 className={`text-5xl font-['Orbitron'] ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} text-center mb-16 tracking-wider`}>
          Operational Modules
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`group ${
                theme === 'dark' ? 'bg-gray-900/20' : 'bg-gray-200/20'
              } p-8 rounded-xl card-glow backdrop-blur-sm flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300`}
              role="article"
              aria-labelledby={`project-title-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3
                id={`project-title-${index}`}
                className={`text-3xl font-['Orbitron'] ${
                  theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                } animate-pulse shadow-[0_0_15px_rgba(0,255,255,0.7)] tracking-tight mb-4`}
              >
                {project.title}
              </h3>
              <p
                className={`text-center font-['Roboto_Mono'] text-base ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                } opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300`}
              >
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

const Contact = ({ theme }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'YOUR_SERVICE_ID', // Replace with EmailJS Service ID
      'YOUR_TEMPLATE_ID', // Replace with EmailJS Template ID
      formData,
      'YOUR_USER_ID' // Replace with EmailJS User ID
    ).then(
      () => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      },
      () => {
        setStatus('Failed to send message.');
        setTimeout(() => setStatus(''), 3000);
      }
    );
  };

  return (
    <motion.section
      id="contact"
      className={`py-20 ${theme === 'dark' ? 'bg-gradient-to-t from-gray-950 to-gray-900' : 'bg-gradient-to-t from-gray-100 to-gray-200'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className={`text-5xl font-['Orbitron'] ${theme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'} mb-16 tracking-wider`}>
          Open Comm Link
        </h2>
        <p
          className={`text-lg font-['Roboto_Mono'] ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          } max-w-2xl mx-auto mb-10`}
        >
          Connect for collaborations or inquiries. Systems are fully operational.
        </p>
        <div
          className={`${
            theme === 'dark' ? 'bg-gray-900/30' : 'bg-gray-200/30'
          } p-8 rounded-xl shadow-[0_0_30px_rgba(0,255,255,0.2)] card-glow backdrop-blur-sm max-w-lg mx-auto mb-10`}
        >
          <div
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className={`p-3 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-900'
              } border ${
                theme === 'dark' ? 'border-cyan-500/50' : 'border-cyan-600/50'
              } focus:outline-none focus:ring-2 focus:ring-cyan-400`}
              required
              aria-label="Your name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`p-3 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-900'
              } border ${
                theme === 'dark' ? 'border-cyan-500/50' : 'border-cyan-600/50'
              } focus:outline-none focus:ring-2 focus:ring-cyan-400`}
              required
              aria-label="Your email"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
              className={`p-3 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-900'
              } border ${
                theme === 'dark' ? 'border-cyan-500/50' : 'border-cyan-600/50'
              } focus:outline-none focus:ring-2 focus:ring-cyan-400`}
              required
              aria-label="Your message"
            ></textarea>
            <button
              type="submit"
              className={`px-6 py-3 rounded-full ${
                theme === 'dark' ? 'bg-cyan-500 text-gray-900' : 'bg-cyan-600 text-white'
              } hover:opacity-90 transition-all duration-300 shadow-[0_0_20px_rgba(0,255,255,0.6)] font-['Orbitron'] text-lg`}
              aria-label="Send message"
            >
              Transmit Signal
            </button>
          </div>
          {status && (
            <p
              className={`mt-4 font-['Roboto_Mono'] ${
                status.includes('successfully') ? 'text-cyan-400' : 'text-red-400'
              }`}
            >
              {status}
            </p>
          )}
        </div>
        <div className="flex justify-center space-x-10">
          <a
            href="https://github.com/dhananjaiyadav1234"
            className={`${
              theme === 'dark' ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-600'
            } glow text-xl font-['Orbitron']`}
            aria-label="GitHub profile"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/dhananjai-yadav-220162307/"
            className={`${
              theme === 'dark' ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-600'
            } glow text-xl font-['Orbitron']`}
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
          <a
            href="mailto:dhananjaiyadav2006@gmail.com"
            className={`${
              theme === 'dark' ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-600'
            } glow text-xl font-['Orbitron']`}
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </motion.section>
  );
};

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={`font-['Roboto_Mono'] relative ${theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
      <div
        className={`absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(to_right,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] animate-[pulse_8s_ease-in-out_infinite] z-0 opacity-30 ${
          theme === 'light' ? 'hidden' : ''
        }`}
        style={{
          transform: `perspective(1000px) rotateX(${(mousePos.y / window.innerHeight - 0.5) * 10}deg) rotateY(${(mousePos.x / window.innerWidth - 0.5) * 10}deg)`,
        }}
      />
      <div className={`absolute inset-0 overflow-hidden z-0 ${theme === 'light' ? 'hidden' : ''}`}>
        <div
          className="absolute w-2 h-2 bg-cyan-400 rounded-full top-[10%] left-[20%] animate-dot"
          style={{
            transform: `translate(${(mousePos.x / window.innerWidth - 0.2) * 20}px, ${(mousePos.y / window.innerHeight - 0.1) * 20}px)`,
          }}
        />
        <div
          className="absolute w-2 h-2 bg-cyan-300 rounded-full top-[30%] left-[70%] animate-dot delay-500"
          style={{
            transform: `translate(${(mousePos.x / window.innerWidth - 0.7) * 20}px, ${(mousePos.y / window.innerHeight - 0.3) * 20}px)`,
          }}
        />
        <div
          className="absolute w-2 h-2 bg-cyan-500 rounded-full top-[50%] left-[40%] animate-dot delay-1000"
          style={{
            transform: `translate(${(mousePos.x / window.innerWidth - 0.4) * 20}px, ${(mousePos.y / window.innerHeight - 0.5) * 20}px)`,
          }}
        />
        <div
          className="absolute w-2 h-2 bg-cyan-200 rounded-full top-[70%] left-[90%] animate-dot delay-1500"
          style={{
            transform: `translate(${(mousePos.x / window.innerWidth - 0.9) * 20}px, ${(mousePos.y / window.innerHeight - 0.7) * 20}px)`,
          }}
        />
        <div
          className="absolute w-2 h-2 bg-cyan-400 rounded-full top-[90%] left-[10%] animate-dot delay-2000"
          style={{
            transform: `translate(${(mousePos.x / window.innerWidth - 0.1) * 20}px, ${(mousePos.y / window.innerHeight - 0.9) * 20}px)`,
          }}
        />
      </div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero theme={theme} />
        <ArcReactor theme={theme} />
        <About theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Contact theme={theme} />
      </main>
    </div>
  );
};

export default App;