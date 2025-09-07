import { useState } from 'react';
import { FaLocationArrow } from "react-icons/fa";
import './App.css';
import avatar from './assets/jep.png';
import avatar1 from './assets/jep2.png';




interface HoverableImageProps {
  defaultImage: string;
  hoverImage: string;
  alt?: string;
  className?: string;
}

const HoverableImage: React.FC<HoverableImageProps> = ({
  defaultImage, 
  hoverImage,
  alt = 'profile Image',
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  
  return(  
  <img
      className={`transition-all duration-300 ease-in-out ${className}`}
      src={isHovered ? hoverImage : defaultImage}
      alt={alt}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onError={(e) => {
        e.currentTarget.src = 'https://placehold.co/100x100/ffcccc/666666?text=Image+Error'
        e.currentTarget.alt = 'Placeholder for profile image'
      }}
    />
  );
}


function App() {

  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      imgSrc: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=E-Commerce',
      alt: 'E-Commerce Platform',
      title: 'E-Commerce Platform',
      desc: 'A fully responsive e-commerce site built with React and Node.js, featuring real-time inventory and secure payments.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#'
    },
    {
      imgSrc: 'https://placehold.co/600x400/10B981/FFFFFF?text=Analytics',
      alt: 'Analytics Dashboard',
      title: 'Analytics Dashboard',
      desc: 'Interactive dashboard for data visualization using D3.js and Python, providing insights for business decisions.',
      tech: ['D3.js', 'Python', 'PostgreSQL', 'Docker'],
      github: '#',
      demo: '#'
    },
    {
      imgSrc: 'https://placehold.co/600x400/F59E0B/FFFFFF?text=Mobile+App',
      alt: 'Fitness Mobile App',
      title: 'Fitness Mobile App',
      desc: 'Cross-platform fitness app developed with Flutter, integrating sensors for real-time health tracking.',
      tech: ['Flutter', 'Firebase', 'REST API', 'SQLite'],
      github: '#',
      demo: '#'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };


  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">

        {/* Upper Section */}
   <div className="flex flex-col md:flex-row md:items-start items-center bg-gray-50 p-8 md:p-12">
  <HoverableImage
        defaultImage={avatar}
        hoverImage={avatar1}      
        alt="avatar of Jeffrey Sedoro"
        className="w-50 h-50 rounded-xl shadow-lg mb-4 md:mb-0 md:mr-8 flex-shrink-0 object-cover hover:shadow-xl cursor-pointer"
      />

  <div className="flex-1 text-center md:text-left">
    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Jeffrey Sedoro</h1>
     <p className='flex text-lg md:text-xl text-black mb-2'><FaLocationArrow className=''/> <p className='text-black md:ml-2'>Valencia City, Bukidnon 8709</p></p>
    <p className="text-lg md:text-xl text-gray-600 mb-2">Full-Stack Developer</p>
    <p className="text-gray-700 mb-6 leading-relaxed">
      Passionate about creating innovative web solutions and user-centric designs. With a deep knowledge and experience in modern technologies, I specialize in building scalable applications and elegant interfaces.
    </p>
    
    {/* Fixed Skills Section */}
    <div className="flex flex-wrap justify-center md:justify-start gap-3">
      {['JavaScript/TypeScript', 'React', 'Node.js','Next.js', 'Python', 'Laravel', 'UI/UX'].map((skill) => (
        <div
          key={skill}
          className="bg-blue-100 px-4 py-2 rounded-lg font-semibold text-blue-800 border border-blue-300 hover:bg-blue-200 hover:transform hover:-translate-y-1 transition-all duration-200 text-sm md:text-base whitespace-nowrap"
        >
          {skill}
        </div>
      ))}
    </div>
  </div>
</div>
        


{/* Section 1: Projects */}
 <div className="p-8 md:p-12 bg-white">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Side - Project Details */}
        <div className="lg:w-1/2 space-y-6">
          <div className="bg-purple-50 rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {projects[currentProject].title}
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {projects[currentProject].desc}
            </p>
            
            {/* Tech Stack */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-600 mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {projects[currentProject].tech.map((tech, index) => (
                  <span 
                    key={index}
                    className="bg-purple-200 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                <span>View Demo</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2">
                <span>GitHub</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Navigation Arrows */}
         
        </div>

        {/* Right Side - Carousel */}
        <div className="lg:w-1/2">
          {/* Image Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentProject * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <img
                      src={project.imgSrc}
                      alt={project.alt}
                      className="w-full h-64 md:h-77 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://placehold.co/600x400/ccccff/666666?text=Image+Error'
                        e.currentTarget.alt = 'Placeholder for project image'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Circle Indicators */}
         <div className="flex justify-center p-3 gap-4">
            <button 
              onClick={prevProject}
              className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors"
              aria-label="Previous project"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextProject}
              className="bg-gray-200 hover:bg-gray-300 p-3 rounded-full transition-colors"
              aria-label="Next project"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

{/* Section 2: Experience */}
<div className="p-8 md:p-12 bg-blue-50">
  <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Experience</h2>
  <div className="space-y-6">
    {[
      {
        company: 'Tech Solutions Inc.',
        position: 'Senior Full-Stack Developer',
        period: '2022 - Present',
        description: 'Led development of scalable web applications using React and Node.js'
      },
      {
        company: 'Digital Innovations Co.',
        position: 'Frontend Developer',
        period: '2020 - 2022',
        description: 'Built responsive user interfaces and improved user experience'
      }
    ].map((job, index) => (
      <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
        <h3 className="text-xl font-semibold text-gray-800">{job.position}</h3>
        <p className="text-blue-600 font-medium">{job.company}</p>
        <p className="text-gray-500 text-sm mb-2">{job.period}</p>
        <p className="text-gray-700">{job.description}</p>
      </div>
    ))}
  </div>
</div>

{/* Section 3: Education & Certifications */}
<div className="p-8 md:p-12 bg-green-50">
  <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Education & Certifications</h2>
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Education</h3>
      <p className="text-green-600 font-medium">Bachelor of Computer Science</p>
      <p className="text-gray-500">University of Technology (2018-2022)</p>
    </div>
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Certifications</h3>
      <ul className="space-y-1 text-gray-700">
        <li>• AWS Certified Developer</li>
        <li>• React Professional Certificate</li>
        <li>• Google Cloud Professional</li>
      </ul>
    </div>
  </div>
</div>

{/* Section 4: Contact & Footer */}
<div className="p-8 md:p-12 bg-gray-100">
  <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Let's Connect</h2>
  <div className="text-center space-y-4">
    <p className="text-gray-700 max-w-2xl mx-auto">
      I'm always interested in new opportunities and exciting projects. 
      Feel free to reach out if you'd like to work together!
    </p>
    <div className="flex justify-center space-x-6">
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
        Email Me
      </button>
      <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
        LinkedIn
      </button>
      <button className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-lg font-semibold transition-colors">
        GitHub
      </button>
    </div>
    <div className="mt-12 pt-8 border-t border-gray-300">
      <p className="text-gray-600">Created by: Jeffrey Sedoro</p>
    </div>
  </div>
</div>
      </div>
    </div>
  )
}

export default App
