import React from 'react'


export default function PilotoStats({dados}) {
  return (
    <>
      {
        dados.map((card, index) => (
          <section  key={index} className='pilotosContainer'>
            <section class="m-28 sm:grid sm:grid-cols-3">
              <div class="sm:grid sm:grid-rows-3">
                <div>
                  <h3 class="lg:text-5xl sm:text-4xl text-3xl sm:mb-6  ">{card.nomePiloto} </h3>
                </div>

                <div class="flex items-center gap-1">
                  <img class="w-11 justify-self-end mr-1" src={card.bandeira} />
                  <h4 class="col-span-2 ">{card.nomePais}</h4>
                </div>

                <div class="flex flex-col">
                  <h4 class="text-sm text-sky-400 col-start-2">IDADE</h4>
                  <h4 class="col-start-2">{card.idade}</h4>
                </div>
              </div>

              <div class="rounded">
                <img class="sm:w-48 lg:w-56 xl:w-72 rounded-3xl border-4 border-black" src={card.foto} />
              </div>

              <div class="grid grid-rows-3">
                <div>
                  <h4 class="text-sm text-sky-400">Equipe</h4>
                  <h4>{card.equipe}</h4>
                </div>

                <div>
                  <h4 class="text-sm text-sky-400">Vitórias</h4>
                  <h4>{card.vitorias}</h4>
                </div>

                <div>
                  <h4 class="text-sm text-sky-400">Pódios</h4>
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