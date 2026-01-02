import React, { useState } from 'react';
import { Menu, X, Mail, Github, Linkedin, ExternalLink} from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (page) => {
    setCurrentPage(page);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation 
        currentPage={currentPage} 
        navigate={navigate} 
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
      
      {currentPage === 'home' && <Home navigate={navigate} />}
      {currentPage === 'project-detail' && <ProjectDetails navigate={navigate} />}
          </div>
  );
}


function Navigation({ currentPage, navigate, menuOpen, setMenuOpen }) {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => navigate('home')}
            className="text-xl font-bold text-gray-800 hover:text-blue-600 transition"
          >
            Lotachi Okpareke's Portfolio
          </button>
          
          /*Navigation section that helps to jump to desired portion of website*/
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About Me</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition">My Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">My Contact Info</a>
          </div>

          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-600"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {menuOpen && (
          <div className="md:hidden pb-4">
            <a href="#about" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-600 hover:text-blue-600">About Me</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-600 hover:text-blue-600">My Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-600 hover:text-blue-600">My Contact Info</a>
          </div>
        )}
      </div>
    </nav>
  );
}
function Home({ navigate }) {
  return (
    <main>
      <Intro />
      <AboutSect />
      <ProjectsSection navigate={navigate} />
      <Contacts />
    </main>
  );
}

function Intro() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Hello, I'm Lotachi Okpareke
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-8">
          Frontend Developer | Problem Solver | Team Worker & Leader
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get In Touch With Me
          </a>
          <a 
            href="#projects" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition border-2 border-blue-600"
          >
            View My Projects
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutSect() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
          Get to Know Me
        </h2>
        
        <div className="bg-gray-50 rounded-xl p-6 sm:p-8 mb-8">
          <p className="text-lg text-gray-700 mb-4">
            I'm a final year student of Computer Science who's a passionate frontend developer with a love for creating user-friendly, aesthetically pleasing and functional web experiences. 
            With a strong foundation in modern web technologies, I focus on building responsive and accessible applications.
          </p>
          <p className="text-lg text-gray-700">
            My technical focus includes JavaScript using React, Python and CSS frameworks. I enjoy solving complex problems 
            and turning creative ideas into reality through clean, maintainable code.
          </p>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          My Strengths
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Concise Code</h4>
            <p className="text-gray-600 text-sm">Writing maintainable and scalable solutions</p>
          </div>
          
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Intuitive UI/UX Design</h4>
            <p className="text-gray-600 text-sm">Creating dynamic user experiences with design</p>
          </div>
          
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Fast Learner</h4>
            <p className="text-gray-600 text-sm">Constantly adapting to new technologies and open to knowledge expansion</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection({ navigate }) {
  const projects = [
    {
      id: 1,
      name: "Staff Sign-In Portal",
      description: "A school sign up, sign in and shift request app.",
      image: "C:\Users\Okpareke\Documents\lolo's school stuff\CSC 419 - advances in web\Portfolio\Screenshot (193).png",
      tech: ["Apache NetBeans", "Java", "PSQL",],
      link: "#",
      featured: true
    },
    {
      id: 2,
      name: "Task Manager App",
      description: "A corporation in-house productivity tool for organizing tasks with drag-and-drop functionality and priority levels.",
      image: "C:\Users\Okpareke\Documents\lolo's school stuff\CSC 419 - advances in web\Portfolio\taskmanager.jpeg",
      tech: ["PowerApps", "Power Fx", "PSQL"],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
          My Works
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Below are some projects I've worked on. Each one gave me added insight and facilitated a strengthening of my knowlede in tech.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
              <img 
                src={project.image} 
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.featured && (
                    <button
                      onClick={() => navigate('project-detail')}
                      className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
                    >
                      View Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Contacts() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Let's Work Together!
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a
            href="mailto:lotachiokpareke@gmail.com"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Email Me
          </a>
          <a
            href="https://wa.me/07086167643"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
          >
            Reach Me On WhatsApp
          </a>
        </div>
        
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/lotachi-okpareke" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            <Github size={28} />
          </a>
          <a 
            href="https://www.linkedin.com/in/lotachi-okpareke-987142234/" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            <Linkedin size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectDetails({ navigate }) {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => navigate('home')}
          className="text-blue-600 hover:text-blue-700 mb-6 flex items-center gap-2 font-semibold"
        >
          ← Back to Projects
        </button>
        
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Staff Sign-In Portal
        </h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {["Apache NetBeans", "PSQL", "Java"].map((tech, index) => (
            <span 
              key={index}
              className="bg-blue-100 text-blue-800 text-sm px-4 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <img 
          src="C:\Users\Okpareke\Documents\lolo's school stuff\CSC 419 - advances in web\Portfolio\Screenshot (193).png"
          alt="Staff Sign-In Portal"
          className="w-full h-64 sm:h-96 object-cover rounded-xl mb-8"
        />
        
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Project Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              This sign in portal enabled school staff to register, sign in, request and carry out 
              shift swaps as well as print their schedule with the updated shifts, allowing
              for minimal supervisor intervention save from approving or denying the request.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Problem Definition</h2>
            <p className="text-gray-700 leading-relaxed">
              Staff in a school found it difficult to keep track of and request shift swaps
              manually so this system streamlines and automates it.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Key Features</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Head of department and Head of IT dashboards allowed for overseeing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Printing display of upadated shift schedules</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Email integration that sends an email of sign in confirmation to user and head</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Sign up page with allowance for fingerprint and photo identification</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>User-friendly and intuitive design</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Technologies Used</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              This project was built on the Apache NetBeans IDE which aided in the creation
              of the frontend with the use of Java and PSQL for the database allowing for quick
              response from the database when a field was added.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Snapshots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img 
                src="C:\Users\Okpareke\Documents\lolo's school stuff\CSC 419 - advances in web\Portfolio\Screenshot (194).png"
                alt="Login Page"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="C:\Users\Okpareke\Documents\lolo's school stuff\CSC 419 - advances in web\Portfolio\Screenshot (195).png"
                alt="Department Head Screen"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What I Learned</h2>
            <p className="text-gray-700 leading-relaxed">
              This project taught me valuable lessons about abstraction and allowing different users to use
              and see different parts of an app. It also helped me understand exception handling with throw
              and catch statements email integration, as well as backend and database connection and hashing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;