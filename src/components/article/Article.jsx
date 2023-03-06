import React from 'react'
import { Features } from '../../container'
import './article.css'

export default function Article() {
  return (
    <div id='Open_AI' className='containerr'>
      <div className="first__porsion">
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="second__porsion">
        <div className="second__porsion-parts">
          <div className="feturess"><Features data='Improving end distrusts instantly '/></div>
          <p>From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.</p>
        </div>
        <div className="second__porsion-parts">
          <div className="feturess"><Features data='Become the tended active'/></div>
          <p>Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.</p>
        </div>
        <div className="second__porsion-parts">
          <div className="feturess"><Features data='Message or am nothing'/></div>
          <p>Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.</p>
        </div>
        <div className="second__porsion-parts">
          <div className="feturess"><Features data='Really boy law county'/></div>
          <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.</p>
        </div>
      </div>
    </div>
  )
}
