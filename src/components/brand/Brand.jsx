import React from 'react'
import './brand.css'
import { google,atlassian,shopify,dropbox,slack } from './import'
function Brand() {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <i class="fa-brands fa-react"></i>
      </div>
      <div>
      <i className="fa-brands fa-square-js"></i>
      </div>
      <div>
      <i className="fa-brands fa-figma"></i>
      </div>
      <div>
      <i className="fa-brands fa-github"></i>
      </div>
      <div>
      <i className="fa-brands fa-bootstrap"></i>
      </div>
    </div>
  )
}

export default Brand