import React from 'react'


export default function PilotoStats({dados}) {
  return (
    <>
      {
        dados.map((card, index) => (
          <section  key={index} className='pilotosContainer'>
            <section class="sm:m-28 sm:grid sm:grid-cols-3">
              <div class="sm:grid sm:grid-rows-3">
                <div>
                  <h3 class="text-xl sm:text-5xl sm:mb-6 ">{card.nomePiloto} </h3>
                </div>

                <div class="sm:flex sm:items-center sm:gap-1">
                  <img class="sm:w-11 sm:justify-self-end sm:mr-1" src={card.bandeira} />
                  <h4 class="sm:col-span-2 ">{card.nomePais}</h4>
                </div>

                <div class="sm:flex sm:flex-col">
                  <h4 class="sm:text-sm text-sky-400 sm:col-start-2">IDADE</h4>
                  <h4 class="sm:col-start-2">{card.idade}</h4>
                </div>
              </div>

              <div class="sm:rounded">
                <img class="md:w-24 lg:w-36 xl:w-72 sm:rounded-3xl sm:border-4 border-black" src={card.foto} />
              </div>

              <div class="sm:grid sm:grid-rows-3">
                <div>
                  <h4 class="sm:text-sm text-sky-400">Equipe</h4>
                  <h4>{card.equipe}</h4>
                </div>

                <div>
                  <h4 class="sm:text-sm text-sky-400">Vitórias</h4>
                  <h4>{card.vitorias}</h4>
                </div>

                <div>
                  <h4 class="sm:text-sm text-sky-400">Pódios</h4>
                  <h4>{card.podios}</h4>
                </div>
              </div>

            </section>
            <hr border="1px" solid black width="100%" />
          </section>
        ))
      }
    </>
  )
}