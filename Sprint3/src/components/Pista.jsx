import React from 'react'

export default function Pista({dados}) {
  return (
    <>
      {
        dados.map((card, index) => (
            <section key={index} class="w-screen">
              <div class="sm:grid grid-cols-3 w-screen pl-4">
                <div>
                  <div class="sm:flex items-center gap-2 sm:p-0 p-3">
                  <h3 class="text-2xl">Pista: {card.localPista}</h3>
                  <img src={card.bandeira} class="sm:w-16 w-14"/>

                  </div>
                  <div>
                    <h3 class="text-sm text-slate-200 p-1">{card.informacoes}</h3>
                  </div>
                </div>

                <div class="sm:flex sm:items-center">
                  <img src={card.circuito} class="sm:w-96 sm:p-4 p-3"/>
                </div>
                <div class="sm:flex">
                  <div>
                    <h3>Curiosidades</h3>

                  </div>
                  <p class="sm:text-2xl sm:justify-end sm:self-end sm:mr-5">Pista {index +1}</p>
                </div>

              </div>
                <hr border="1px" solid black class="w-screen mt-3 mb-3" />
            </section>
        ))
      }
    </>
  )
}
