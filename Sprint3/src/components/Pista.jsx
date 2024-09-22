import React from 'react'

export default function Pista({dados}) {
  return (
    <>
      {
        dados.map((card, index) => (
            <section className="Info-Circuito" key={index} class="sm:flex sm:flex-col sm:items-center sm:justify-center sm:w-screen">
              <div class="sm:flex sm:items-center sm:gap-2 ">
                <h3 class="sm:text-4xl">Pista: {card.localPista}</h3>
                <img src={card.bandeira} class="sm:w-16"/>
              </div>

              <div class="sm:flex sm:items-center">
                <img src={card.circuito} class="sm:w-96 sm:rounded-xl"/>
                <p class="sm:text-2xl">Pista {index +1}</p>
              </div>
                <hr border="1px" solid black width="100%" />
            </section>
        ))
      }
    </>
  )
}
