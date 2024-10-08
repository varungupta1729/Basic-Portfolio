import React, { useEffect, useState } from 'react';
import Loader from '../Layout/Loader';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/projects');
        setProjects(response.data);

        const imagePromises = response.data.map(() =>
          axios.get(`https://picsum.photos/385/256?random=${new Date().getTime()}`)
        );

        const images = await Promise.all(imagePromises);
        setImageUrls(images.map(img => img.request.responseURL));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); 
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <Loader />; 
  }

  if (error) {
    return <div>Error: {error}</div>;  
  }
  //  actual practice to limit paragraph
   function truncateWords(text){
    const words = text.split(' ');
    if (words.length <= 11) {
      return text;
    }
    return words.slice(0, 11).join(' ') + '...';
  };
  return (
    <section id='projects' className='px-5 lg:px-24 flex justify-center items-center bg-[#F0F0F6]'>
      <div className='flex flex-col justify-center items-center gap-4 mt-12'>
        <h2 className='text-[#2B2B2B] text-[2rem] font-bold'>Projects</h2>
        <p className='text-[#767676]  lg:w-[50%] text-center text-[0.94rem] capitalize'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
        </p>
        <div className="grid  lg:grid-cols-2 xl:grid-cols-3 gap-12 mt-6 px-0">

          {projects.map((project, index) => (
            <div key={index} className="border-[1px] border-[#00000033] bg-white rounded-xl shadow-custom-card">
              <img className='rounded-t-xl' src={imageUrls[index]} alt={project.title} />
              <div className='px-4 py-4 pb-4 flex flex-col gap-[0.4rem] max-w-[385px]  h-[176px] '>
                <h3 className='text-[#2B2B2B] font-medium'>{project.title}</h3>
                <p className='text-[#767676] text-sm capitalize'> {truncateWords(project.description)}</p>
                <div className=" w-full flex flex-wrap gap-[0.625rem] my-1">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="py-[.15rem] rounded-full border-[1px] px-[0.875rem] text-[0.8125rem] border-[#0000000D] bg-[#EFEFEF]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
