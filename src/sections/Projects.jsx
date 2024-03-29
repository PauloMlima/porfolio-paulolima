import React from 'react'
import CardProjects from '../components/cardProjects/cardProjects'
import { ProjectManu } from '../components/image'

const Projects = () => {
  const Projetoinf =[
    {
    img: ProjectManu,
    titulo: "Em manutenção",
    informacao: "Projeto ainda a ser postado", 
    github: "", 
    demo: "" 
  },
  {
    img: ProjectManu,
    titulo: "Em manutenção",
    informacao: "Projeto ainda a ser postado", 
    github: "", 
    demo: "" 
  },
  {
    img: ProjectManu,
    titulo: "Em manutenção",
    informacao: "Projeto ainda a ser postado", 
    github: "", 
    demo: "" 
  },
  ]
  return (
    <>
    <div id='Projetos'>
    <div className="flex flex-col gap-12 justify-center items-center w-full m-auto pt-28 pb-28 px-28 bg-gray-50 max-sm:px-6 2xl:px-96">
        <div className="flex items-center">
          <h1 className="font-poppins text-3xl pb-16" >Projetos</h1>
        </div>
        <div>
        {Projetoinf.map ((card, index) => (
         <CardProjects
         key={index}
         img={card.img}
         titulo={card.titulo}
         informacao={card.informacao}
         github={card.github}
         demo={card.demo}
       />
        ))}
        </div>
      </div>
      
      </div>
  </>
  )
}

export default Projects
