import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title:"Improving and distrusts instantly",
    text: "Lorem ipsum dolor sit amet  et magni aperiam rnatur voluptates tempore commodi fugiat, ex nesciunt pariatur ut dolorum molestias? Dolore?"
  },
  {
    title:"Become the Tended active",
    text: "Lorem ipsum dolor sit amet  et magni aperiam rnatur voluptates tempore commodi fugiat, ex nesciunt pariatur ut dolorum molestias? Dolore?"
  },
  {
    title:"Message or am nothing",
    text: "Lorem ipsum dolor sit amet  et magni aperiam rnatur voluptates tempore commodi fugiat, ex nesciunt pariatur ut dolorum molestias? Dolore?"
  },
  {
    title:"Really boy law county",
    text: "Lorem ipsum dolor sit amet  et magni aperiam rnatur voluptates tempore commodi fugiat, ex nesciunt pariatur ut dolorum molestias? Dolore?"
  },
]


function Features() {
  return (
    <div className="gpt3__features section__padding" id='features'>
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and you Just Need To Realize It. Step into Future
          Today & Make It Happen
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__feature-container">
          {featuresData.map((item, index)=>
            <Feature title={item.title} text={item.text} key={item.title + item.text}/>
          )}
      </div>
    </div> 
  )
}

export default Features   
