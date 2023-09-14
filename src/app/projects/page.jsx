import Navbar from '@/components/Navbar'
import ProjectsPage from '@/components/ProjectsPage'
import { getData } from '@/lib/dbActions'
import React from 'react'

const Projects = async() => {
    const portfolioData = await getData();
  return (
    <div>
        <Navbar/>
<ProjectsPage portfolioData={portfolioData}/>
    </div>
  )
}

export default Projects