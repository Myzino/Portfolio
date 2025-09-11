import { useState } from 'react';
import { FaLocationArrow } from "react-icons/fa";
import './App.css';
import Image from './assets/images/buksucaps.jpg';
import Image1 from './assets/images/cityvet.jpg';
import Image2 from './assets/images/ebrangay.png';
import avatar from './assets/jep.png';
import avatar1 from './assets/jep2.png';
import Counters from './components/ui/counterapi';
import FlipWords from './components/ui/flip-word';
import Velocity from "./components/ui/velocity";


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
      imgSrc: Image,
      alt: 'Capstone Project',
      title: 'BuksuLabSecure',
      desc: ' A capstone project enhancing lab security and attendance at Bukidnon State University using IoT Based RFID access control and real-time tracking, with a web dashboard for attendance monitoring and managing access and generating reports. ',
      tech: ['Laravel', 'MySQL',],
    },
    {
      imgSrc: Image1,
      alt: 'Malaybalay Vetirenary Clinic',
      title: 'MCityVet',
      desc: 'MCityVet is a project enhancing veterinary services and pet healthcare in Malaybalay City through an online platform for scheduling, medical records, and consultations, with a web dashboard for monitoring services, managing clinic operations, and generating reports.',
      tech: ['React', 'Express', 'Nodejs', 'MongoDB'],
      github: '#',
      demo: '#'
    },
    {
      imgSrc: Image2,
      alt: 'Barangay Project',
      title: 'E-Barangay Management System',
      desc: 'E-Barangay is a project designed for Barangay Sinayawan to streamline community services through a multi-tenancy system that generates official documents such as barangay indigency and barangay clearance, with a web dashboard for managing records, processing requests, and generating reports.',
      tech: ['MySQL', 'Laravel'],
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

  const words = [
    "Full-Stack Developer",
    "Web Designer",
    "Tech Enthusiast",
    "Problem Solver",
  ]

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
     <h2 className='flex text-xs md:text-xs text-black mb-2'><FaLocationArrow className=''/> <p className='text-black md:ml-2'>Valencia City, Bukidnon 8709</p></h2>
    <h2 className="text-lg md:text-xl text-gray-600 mb-2"><FlipWords words = {words}/></h2>
    <h1><Counters /></h1>
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
  <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Projects</h2>
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
         <div className="flex justify-center items-center spac  e-x-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
                <span>View More</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            </div> 
            
          </div>

          {/* Navigation Arrows */}
        </div>

        {/* Right Side - Carousel */}
            <div className="lg:w-1/2">
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

    {/*Prallax from motion ni  */}
<section className="p-8 md:p-15 bg-red-50">

  <Velocity />
</section>
{/* Section 2: Experience */}
<div className="p-8 md:p-12 bg-blue-50">
  <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Experience</h2>
  <div className="space-y-6">
    {[
      {
        company: 'logicBase Interactive Ent.',
        position: 'Web Developer (Intern)',
        period: ' Jan 2025 - May 2025',
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
      <p className="text-green-600 font-medium">Bachelor of Science in Information Technology</p>
      <p className="text-gray-500">Bukidnon State University (2021-2025)</p>
    </div>
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">Certifications</h3>
      <ul className="space-y-1 text-gray-700">
        <li>• TopCit Level 2</li>
        <li>• Certificate of Internship</li>
        <li>• Cyber Threat Management</li>
        <li>• Introduction to Cybersecurity</li>
         <li>• Patent Drafting Certificate</li>
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
  <button 
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors" 
  onClick={() => window.location.href = 'https://www.facebook.com/Benkiekun/'}
  >
   Facebook
  </button>

  <button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
  onClick={() => window.location.href = 'https://www.linkedin.com/in/jeffrey-sedoro/'}
  >
    LinkedIn
  </button>
  
  <button className="bg-gray-800 hover:bg-black text-white px-6 py-3 rounded-lg font-semibold transition-colors"
   onClick={() => window.location.href = 'https://github.com/Myzino'}
  >
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
