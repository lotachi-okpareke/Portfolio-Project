import React, { useState } from 'react';
import { Menu, X, Mail, Github, Linkedin, ExternalLink, Code, Palette, Rocket } from 'lucide-react';

// Main App Component with Routing
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
      
      {currentPage === 'home' && <HomePage navigate={navigate} />}
      {currentPage === 'project-detail' && <ProjectDetailPage navigate={navigate} />}
      
      <Footer />
    </div>
  );
}

// Navigation Component
function Navigation({ currentPage, navigate, menuOpen, setMenuOpen }) {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => navigate('home')}
            className="text-xl font-bold text-gray-800 hover:text-blue-600 transition"
          >
            YourName.dev
          </button>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-blue-600 transition">About</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-600 transition">Projects</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition">Contact</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-600"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4">
            <a href="#about" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-600 hover:text-blue-600">About</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-600 hover:text-blue-600">Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
}

// Home Page Component
function HomePage({ navigate }) {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection navigate={navigate} />
      <ContactSection />
    </main>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          Hi, I'm <span className="text-blue-600">Your Name</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-700 mb-8">
          Frontend Developer | Problem Solver | Creative Thinker
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a 
            href="#contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Get In Touch
          </a>
          <a 
            href="#projects" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition border-2 border-blue-600"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
          About Me
        </h2>
        
        <div className="bg-gray-50 rounded-xl p-6 sm:p-8 mb-8">
          <p className="text-lg text-gray-700 mb-4">
            I'm a passionate frontend developer with a love for creating beautiful, functional web experiences. 
            With a strong foundation in modern web technologies, I focus on building responsive and user-friendly applications.
          </p>
          <p className="text-lg text-gray-700">
            My technical focus includes React, JavaScript, and modern CSS frameworks. I enjoy solving complex problems 
            and turning creative ideas into reality through clean, maintainable code.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <Code className="w-12 h-12 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Clean Code</h3>
            <p className="text-gray-600 text-sm">Writing maintainable and scalable solutions</p>
          </div>
          
          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <Palette className="w-12 h-12 text-purple-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">UI/UX Design</h3>
            <p className="text-gray-600 text-sm">Creating intuitive user experiences</p>
          </div>
          
          <div className="text-center p-6 bg-green-50 rounded-lg">
            <Rocket className="w-12 h-12 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Fast Learner</h3>
            <p className="text-gray-600 text-sm">Constantly adapting to new technologies</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Projects Section
function ProjectsSection({ navigate }) {
  const projects = [
    {
      id: 1,
      name: "E-Commerce Platform",
      description: "A full-featured online shopping platform with cart functionality, product filtering, and checkout system.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      link: "#",
      featured: true
    },
    {
      id: 2,
      name: "Weather Dashboard",
      description: "Real-time weather application that displays current conditions and 7-day forecasts for multiple cities.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=500&fit=crop",
      tech: ["React", "API Integration", "CSS3"],
      link: "#"
    },
    {
      id: 3,
      name: "Task Management App",
      description: "Productivity tool for organizing tasks with drag-and-drop functionality and priority levels.",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=500&fit=crop",
      tech: ["React", "Local Storage", "Responsive Design"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
          My Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Each one taught me something new and helped me grow as a developer.
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
                  <a
                    href={project.link}
                    className={`${project.featured ? 'flex-1' : 'w-full'} bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition text-center flex items-center justify-center gap-2`}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section (CTA)
function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Let's Work Together
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a
            href="mailto:your.email@example.com"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2"
          >
            <Mail size={20} />
            Email Me
          </a>
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition flex items-center justify-center gap-2"
          >
            WhatsApp
          </a>
        </div>
        
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/yourusername" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            <Github size={28} />
          </a>
          <a 
            href="https://linkedin.com/in/yourusername" 
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

// Project Detail Page
function ProjectDetailPage({ navigate }) {
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
          E-Commerce Platform
        </h1>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {["React", "Tailwind CSS", "JavaScript", "Responsive Design"].map((tech, index) => (
            <span 
              key={index}
              className="bg-blue-100 text-blue-800 text-sm px-4 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <img 
          src="https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&h=600&fit=crop"
          alt="E-Commerce Platform"
          className="w-full h-64 sm:h-96 object-cover rounded-xl mb-8"
        />
        
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Project Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              This e-commerce platform was built to provide users with a seamless online shopping experience. 
              The application features a modern, intuitive interface that allows customers to browse products, 
              add items to their cart, and complete purchases with ease.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">The Problem</h2>
            <p className="text-gray-700 leading-relaxed">
              Small businesses often struggle to establish an online presence due to the complexity and cost 
              of traditional e-commerce solutions. This project aimed to create a lightweight, user-friendly 
              platform that could be easily customized for different types of retail businesses.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Key Features</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Product catalog with advanced filtering and search functionality</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Shopping cart with real-time price calculations and quantity updates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Responsive design that works flawlessly on mobile, tablet, and desktop devices</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>Product image gallery with zoom functionality</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span>User-friendly checkout process with form validation</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Technologies Used</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The project was built using React for component-based architecture and state management. 
              Tailwind CSS was used for rapid UI development and consistent styling across the application. 
              JavaScript ES6+ features were utilized for clean, modern code.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Screenshots</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                alt="Dashboard view"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img 
                src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=600&h=400&fit=crop"
                alt="Product page"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What I Learned</h2>
            <p className="text-gray-700 leading-relaxed">
              This project taught me valuable lessons about state management in React, particularly when 
              dealing with complex cart logic. I learned how to optimize component re-renders and implement 
              efficient data structures for product filtering. Additionally, I gained experience in creating 
              responsive layouts that maintain functionality across different screen sizes. The project also 
              improved my understanding of user experience design and the importance of intuitive navigation.
            </p>
          </div>
          
          <div className="flex gap-4 pt-6">
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center gap-2"
            >
              <ExternalLink size={20} />
              View Live Demo
            </a>
            <a
              href="#"
              className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition flex items-center gap-2"
            >
              <Github size={20} />
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-2">© 2025 Your Name. All rights reserved.</p>
        <p className="text-gray-400 text-sm">Built with React & Tailwind CSS</p>
      </div>
    </footer>
  );
}

export default App;