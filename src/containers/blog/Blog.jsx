import React from 'react'
import './blog.css'
import { Article } from '../../components'
import { port1, port2, port3, port4, port6, port7} from './imports'
function Blog() {
  return (
    <div className="gpt3__blog section__padding" id='blog'>
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          My Work
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
            <Article imgUrl={port1} imgDate={"Sep 26, 2021"} title={"GPT-3 and Open Ai is the future.Let us explore how it is?"}/>    
        </div>
        <div className="gpt3__blog-container_groupB">
            <Article imgUrl={port2} imgDate={"Sep 26, 2021"} title={"GPT-3 and Open Ai is the future.Let us explore how it is?"}/>
            <Article imgUrl={port4} imgDate={"Sep 26, 2021"} title={"GPT-3 and Open Ai is the future.Let us explore how it is?"}/>
            <Article imgUrl={port6} imgDate={"Sep 26, 2021"} title={"GPT-3 and Open Ai is the future.Let us explore how it is?"}/>
            <Article imgUrl={port7} imgDate={"Sep 26, 2021"} title={"GPT-3 and Open Ai is the future.Let us explore how it is?"}/>

        </div>
      </div>
    </div>
  )
}

export default Blog