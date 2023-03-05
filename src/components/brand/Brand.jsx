import React from 'react'
import './brand.css'
import image_1 from '../../assets/google.png'
import image_2 from '../../assets/slack.png'
import image_3 from '../../assets/atlassian.png'
import image_4 from '../../assets/dropbox.png'
import image_5 from '../../assets/shopify.png'

export default function Brand() {
  return (
    <div>
      <div className="brand_container">
          <img src={image_1} alt="Google" />
          <img src={image_2} alt="Slack" />
          <img src={image_3} alt="Atlassian" />
          <img src={image_4} alt="Dropbox" />
          <img src={image_5} alt="Shopify" />
      </div>

    </div>
  )
}
