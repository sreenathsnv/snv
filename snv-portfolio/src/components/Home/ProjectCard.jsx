import React from 'react'

const ProjectCard = ({data}) => {
    const {heading,desc,image,github} = data
  return (
    <div className="project-card">
                <div className="snapshots">
                    <img src={image} />
                </div>
                <div className="card-contents">
                    <h3 className="project-name">{heading}</h3>
                <p className="desc-project">{desc}</p>
                <a href={github} target='_blank'>
                <button className='github-btn'>
                    <p>github</p>
                    <a href={github}></a>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </a>
                </div>
            </div>
  )
}

export default ProjectCard