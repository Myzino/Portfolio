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
     <p className='flex text-lg md:text-xl text-black mb-2'><FaLocationArrow /> Valencia City, Bukidnon 8709</p>
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
        
        {/* Lower Section */}
        <div className="p-8 md:p-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-8 text-center">My Projects</h2>
          <div className="space-y-8">
            {[
              {
                imgSrc: 'https://placehold.co/600x200',
                alt: 'Mockup of a modern e-commerce website dashboard with product listings, shopping cart icons, and responsive design on a laptop screen showcasing clean navigation and colorful product cards',
                title: 'E-Commerce Platform',
                desc: 'A fully responsive e-commerce site built with React and Node.js, featuring real-time inventory and secure payments.',
              },
              {
                imgSrc: 'https://placehold.co/600x200',
                alt: 'Dashboard of a data analytics tool displaying interactive charts, graphs with bars and lines in vibrant blues and greens, connected to a database icon in the background',
                title: 'Analytics Dashboard',
                desc: 'Interactive dashboard for data visualization using D3.js and Python, providing insights for business decisions.',
              },
              {
                imgSrc: 'https://placehold.co/600x200',
                alt: 'Mobile app interface sketch showing fitness tracking screens with heart rate monitors, workout plans, and progress bar widgets in clean modern UI design',
                title: 'Fitness Mobile App',
                desc: 'Cross-platform fitness app developed with Flutter, integrating sensors for real-time health tracking.',
              },
            ].map((project, index) => (
              <div key={index} className="bg-purple-50 rounded-xl p-6 shadow-lg hover:scale-105 transition-transform">
                <img
                  src={project.imgSrc}
                  alt={project.alt}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  onError={(e) => {
                    e.currentTarget.src = 'https://placehold.co/600x200/ccccff/666666?text=Image+Error'
                    e.currentTarget.alt = 'Placeholder for project image'
                  }}
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600">Created by: Jeffrey Sedoro</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
