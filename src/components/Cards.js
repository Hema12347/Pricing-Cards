import React from 'react'
import Card from './Card'

import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'

const cards = [
    {
        id: 1,
        title: 'Member Account',
        image: image1,
        text: 'Nail Cutting & Styling',
        text1: 'Hair Colouring',
        text2: 'Body Massage',
        price: 'Subscribe @ $100/Month'
    },
    {
        id: 2,
        title: 'Prime Account',
        image: image2,
        text: 'Nail Cutting & Styling',
        text1: 'Hair Colouring',
        text2: 'Body Massage',
        text3: 'Manicure',
        price: 'Subscribe @ $125/Month'
    },
    {
        id: 3,
        title: 'VIP Account',
        image: image3,
        text: 'Nail Cutting & Styling',
        text1: 'Hair Colouring',
        text2: 'Body Massage',
        text3: 'Manicure',
        text4: 'Pedicure',
        text5: 'Free WI-FI',
        price: 'Subscribe @ $150/Month'
    },
]

function Cards() {
    console.log(cards)
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
               {
                   cards.map(card => (
                       <div className="col-md-4" key={card.id}>
                           <Card title={card.title} imageSource={card.image} text={card.text} text1={card.text1} text2={card.text2} text3={card.text3} text4={card.text4} text5={card.text5} price={card.price}/>
                        </div>
                   ))
               }
            </div>
        </div>
    )
}

export default Cards
