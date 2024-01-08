// import React from 'react'
// import { Element } from 'react-scroll'
// import "./Projectcontainer.css"
// import project from '../project/Project'


// const Projectcontainer = () => {

//     const projects = [
//         {
//           img:'https://www.shutterstock.com/image-photo/project-manager-working-update-tasks-260nw-1756612595.jpg',
//           title:"Facebook",
//           desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500",
//           link:"www.google.com"
//         },
//         {
//           img:'https://www.shutterstock.com/image-photo/project-manager-working-update-tasks-260nw-1756612595.jpg',
//           title:"Facebook",
//           desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500",
//           link:"www.google.com"
//         },
//         {
//           img:'https://www.shutterstock.com/image-photo/project-manager-working-update-tasks-260nw-1756612595.jpg',
//           title:"Facebook",
//           desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500",
//           link:"www.google.com"
//         },
//         {
//           img:'https://www.shutterstock.com/image-photo/project-manager-working-update-tasks-260nw-1756612595.jpg',
//           title:"Facebook",
//           desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500",
//           link:"www.google.com"
//         },
//         {
//           img:'https://www.shutterstock.com/image-photo/project-manager-working-update-tasks-260nw-1756612595.jpg',
//           title:"Facebook",
//           desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500",
//           link:"www.google.com"
//         },
//         {
//           img:'https://www.shutterstock.com/image-photo/project-manager-working-update-tasks-260nw-1756612595.jpg',
//           title:"Facebook",
//           desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500",
//           link:"www.google.com"
//         },


//     ]

    
//   return (
//    <Element classname="projectcontainer" id="projects">
//     <h1>Projects</h1>
//     <p>
//       Here are my projects
//     </p>
//     <div className='projectcontainer_projects'> 
// { 
//     projects.map((project,index)=>{
//     return (
//      <project
//       key={index} 
//       img={project.img} 
//       title={project.title} 
//       desc={project.desc}
//       link={project.link}
//      />
//     )
//   })
// }
//     </div>
//    </Element>
//   )
// }

// export default Projectcontainer









import React from 'react';
import { Element } from 'react-scroll';
import "./Projectcontainer.css";
import Project from '../Project/project'; 

const Projectcontainer = () => {

  const projects = [
    {
      img:'https://img.freepik.com/free-photo/aerial-view-doctor-writing-patient-daily-report-checklist_53876-14930.jpg?w=740&t=st=1704282868~exp=1704283468~hmac=c90f1c6f82386d35eb494c641fbc13df6cd1a96809fbc498ce751128bc52393e',
      title:"Loreum ipsum",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500",
      link:"www.google.com"
    },
    {
      img:'https://img.freepik.com/free-photo/aerial-view-doctor-writing-patient-daily-report-checklist_53876-14930.jpg?w=740&t=st=1704282868~exp=1704283468~hmac=c90f1c6f82386d35eb494c641fbc13df6cd1a96809fbc498ce751128bc52393e',
      title:"Loreum ipsum",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500",
      link:"www.google.com"
    },
    {
      img:'https://img.freepik.com/free-photo/aerial-view-doctor-writing-patient-daily-report-checklist_53876-14930.jpg?w=740&t=st=1704282868~exp=1704283468~hmac=c90f1c6f82386d35eb494c641fbc13df6cd1a96809fbc498ce751128bc52393e',
      title:"Loreum ipsum",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500",
      link:"www.google.com"
    },
    {
      img:'https://img.freepik.com/free-photo/aerial-view-doctor-writing-patient-daily-report-checklist_53876-14930.jpg?w=740&t=st=1704282868~exp=1704283468~hmac=c90f1c6f82386d35eb494c641fbc13df6cd1a96809fbc498ce751128bc52393e',
      title:"Loreum ipsum",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500",
      link:"www.google.com"
    },
    {
      img:'https://img.freepik.com/free-photo/aerial-view-doctor-writing-patient-daily-report-checklist_53876-14930.jpg?w=740&t=st=1704282868~exp=1704283468~hmac=c90f1c6f82386d35eb494c641fbc13df6cd1a96809fbc498ce751128bc52393e',
      title:"Loreum ipsum",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500",
      link:"www.google.com"
    },
    {
      img:'https://img.freepik.com/free-photo/aerial-view-doctor-writing-patient-daily-report-checklist_53876-14930.jpg?w=740&t=st=1704282868~exp=1704283468~hmac=c90f1c6f82386d35eb494c641fbc13df6cd1a96809fbc498ce751128bc52393e',
      title:"Loreum ipsum",
      desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500",
      link:"www.google.com"
    },

  ];

  return (
    <Element className="projectcontainer" id="projects">
      <h1>Projects</h1>
      <p>
      Every project is an opportunity to learn, to figure out problems and challenges, to invent and reinvent.


      </p>
      <div className='projectcontainer_projects'>
        {
          projects.map((project, index) => (
            <Project
              key={index}
              img={project.img}
              title={project.title}
              desc={project.desc}
              link={project.link}
            />
          ))
        }
      </div>
    </Element>
  );
}

export default Projectcontainer;
