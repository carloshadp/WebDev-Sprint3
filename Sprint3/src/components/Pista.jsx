import React from 'react'

export default function Pista({dados}) {
  return (
    <>
      {
        dados.map((card, index) => (
            <div className="Info-Circuito" key={index} class="flex flex-col items-center justify-center w-screen">
              <div class="flex items-center gap-2 ">
                <h3 class="text-4xl">Pista: {card.localPista}</h3>
                <img src={card.bandeira} class="w-16"/>
              </div>

              <div class="flex items-center">
                <img src={card.circuito} class="w-96 rounded-xl"/>
                <p class="text-2xl">Pista {index +1}</p>
              </div>
                <hr border="1px" solid black width="100%" />
            </div>
        ))
      }
    </>
  )
}
