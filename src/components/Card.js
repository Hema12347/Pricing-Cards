import React from 'react'
import './cards.css'


function Card({title, imageSource, text, text1, text2, text3, text4, text5, price}) {
    return (
        <div className="card text-center bg-dark">
            
            <div className="overflow">
            <img src={imageSource} alt="" className="card-img-top" />
            </div>

            <div className="card-body text-light">
                <h4 className="card-title">{title}</h4>
                <ul class="list-unstyled my-5 text-small text-left">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>{text}</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>{text1}</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i>{text2}</li>
                    <li class="mb-3">
                      <i class="fa fa-times mr-2"></i>
                      {text3 ? text3 : <del className='text-muted'> Manicure</del>}
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-times mr-2"></i>
                      {text4 ? text4 :<del className='text-muted'>Pedicure</del>}
                    </li>
                    <li class="mb-3">
                      <i class="fa fa-times mr-2"></i>
                      {text5 ? text5 :<del className='text-muted'>Free WI-FI</del>}
                    </li>
                  </ul>
                
                <a href="#!" className="btn btn-primary btn-block p-2 shadow rounded-pill">
                    {price}
                </a>
            </div>
        </div>
    )
}


export default Card