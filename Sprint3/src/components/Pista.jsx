import React from 'react'

export default function Pista({dados}) {
  return (
    <>
      {
        dados.map((card, index) => (
            <div className="Info-Circuito" key={index}>
                <h3>Pista: {card.localPista}</h3>
                <img src={card.bandeira} />
                <img src={card.circuito} />
                <p>Pista {index +1}</p>
                <hr border="1px" solid black width="100%" />
            </div>
        ))
      }
    </>
  )
}
