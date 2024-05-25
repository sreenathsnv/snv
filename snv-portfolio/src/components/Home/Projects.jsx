import React from 'react'
import ProjectCard from './ProjectCard'

import ArtsDay from '../../assets/images/projects/jalakadmin.jpg'
import Notepad from '../../assets/images/projects/notepad.jpg'
import CCTV from '../../assets/images/projects/cctv.png'
import Todo from '../../assets/images/projects/todo.png'




const Projects = () => {

    let cardsData = [
        {
            heading:"Storage Optimisation for cctv",
            desc :"This project comprises both a desktop application and a web application. Its primary objective is to reduce storage usage of CCTV footage by removing redundant frames. The technologies employed include Python-Django, OpenCV, Tkinter, requests, REST API, HTML, CSS, JavaScript, and Bootstrap.",
            image:CCTV,
            github:"https://github.com/sreenathsnv/CCTV-Storage-optimisation",
        },
        {
            heading:"Jalakam",
            desc :"I developed this project during my undergraduate studies for my college's Fine Arts Day to facilitate the management and viewing of results. In this project, coordinators can upload real-time results, which students can then access seamlessly. The technologies utilized include Python-Flask, HTML, CSS, and JavaScript.",
            image:ArtsDay,
            github:"https://github.com/sreenathsnv/jalakam-online",
        },
        {
            heading:"Todo using React",
            desc :"A simple and straightforward to-do application developed using React, enabling users to perform CRUD (Create, Read, Update, Delete) operations on to-do items. Additionally, it leverages the web browser's local storage feature to store notes.",
            image:Todo,
            github:"https://github.com/sreenathsnv/Todo--React",
        },
        
        {
            heading:"Notepad",
            desc :"A straightforward notepad application developed with Tkinter, allowing users to type, style, and save text.",
            image:Notepad,
            github:"https://github.com/sreenathsnv/Python---Notepad",
        },
    ]
  return (
    <div className='project-conatiner'>
         <p class="proj-head">Projects</p>
         <div class="project-card-container">
            {
                cardsData.map((data,index)=>(
                    <ProjectCard key ={index} data = {data}/>
                ))
            }
         </div>
    </div>
  )
}

export default Projects