import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { port1, port2, port3, port4, port6, port7} from './imports'
function Blog() {
  return (
    <div className="anmol-port__blog section__padding" id='blog'>
      <div className="anmol-port__blog-heading">
        <h1 className="gradient__text">
          My Work
        </h1>
      </div>
      <div className="anmol-port__blog-container">
        <div className="anmol-port__blog-container_groupA">
            <Article imgUrl={port1} imgDate={"*React Project"} title={"Ecommarce Platform for Women's Clothing "}/>    
        </div>
        <div className="anmol-port__blog-container_groupB">
            <Article imgUrl={port2} imgDate={"*Html/Css"} title={"Template-1"}/>
            <Article imgUrl={port4} imgDate={"*Html/Css"} title={"Template-2"}/>
            <Article imgUrl={port6} imgDate={"*Html/Css"} title={"Template-3"}/>
            <Article imgUrl={port7} imgDate={"*Html/Css"} title={"Template-4"}/>

        </div>
      </div>
    </div>
  )
}

export default Blog
