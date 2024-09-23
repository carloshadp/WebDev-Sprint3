import React from 'react'

export default function Pista({dados}) {
  return (
    <>
      {
        dados.map((card, index) => (
            <section key={index} class="w-screen">
              <div class="sm:grid sm:grid-cols-3 sm:w-screen">
                <div>
                  <div class="sm:flex sm:items-center sm:gap-2 ">
                  <h3 class="sm:text-2xl">Pista: {card.localPista}</h3>
                  <img src={card.bandeira} class="sm:w-16"/>

                  </div>
                  <div>
                    <h3 class="sm:text-sm text-slate-200">{card.informacoes}</h3>
                  </div>
                </div>

                <div class="sm:flex sm:items-center">
                  <img src={card.circuito} class="sm:w-96 sm:rounded-xl"/>
                </div>
                <div class="flex">
                  <div>
                    <h3>Curiosidades</h3>

                  </div>
                  <p class="sm:text-2xl justify-end self-end mr-5">Pista {index +1}</p>
                </div>

              </div>
                <hr border="1px" solid black class="w-screen mt-3 mb-3" />
            </section>
        ))
      }
    </>
  )
}
