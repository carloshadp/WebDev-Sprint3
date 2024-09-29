import React from 'react'

export default function PilotoStats({dados}) {
  return (
    <>
      {
        dados.map((card, index) => (
            
            <section>
                <section key={index} class="sm:grid sm:grid-cols-2 sm:m-14">
                    <div class="grid grid-cols-2 pt-4 items-center md:pl-0 pl-5">
                        <div class="bg-slate-300 border border-white rounded-full lg:h-52 lg:w-52 md:h-44 md:w-44 sm:h-32 sm:w-32 h-24 w-24">
                            <img class="sm:w-56 w-40 " src={card.logo} />
                        </div>
                        <div class="grid grid-rows-2 items-center">
                            <div class="mb-9">
                                <h4 class="text-sm text-sky-400">EQUIPE</h4>
                                <h2 class="text-2xl">{card.nome}</h2>
                            </div>
                            
                            <div >
                                <div>
                                    <h4 class="text-sm text-sky-400 mb-2">PAÍS</h4>
                                </div>
                                <div class="flex gap-2">
                                    <img class="w-11 rounded-md" src={card.pais} />
                                    <h4 class="col-start-2">{card.pais_nome}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-rows-2 items-center md:pl-0 pl-5 md:pb-0 pb-5">
                        <div class="grid grid-cols-2">
                            <div class="">
                                <div>
                                    <h4 class="text-sm text-sky-400 mb-2">VITÓRIAS</h4>
                                </div>
                                <h4 class="ml-1">{card.vitorias}</h4>
                            </div>
                            <div class="grid sm:gap-2">
                                <div class="sm:grid sm:grid-rows-2">
                                    <div>
                                        <h4 class="text-sm text-sky-400 mb-2">PILOTOS</h4>
                                    </div>
                                    <div class="flex gap-2">
                                        <img class="w-11 rounded-full" src={card.foto_piloto_1} />
                                        <h4>{card.nome_piloto_1}</h4>
                                    </div>
                                </div>
                                <div class="flex gap-2">
                                    <img class="w-11 h-7 rounded-full" src={card.foto_piloto_2} />
                                    <h4>{card.nome_piloto_2}</h4>
                                </div>

                            </div>
                        </div>
                        <div class="sm:grid sm:grid-cols-2">
                            <div>
                                <div>
                                    <h4 class="text-sm text-sky-400 mb-2">PÓDIOS</h4>
                                </div>
                                <h4 class="ml-1">{card.podios}</h4>
                            </div>
                            <div>
                                <div>
                                    <h4 class="text-sm text-sky-400 mb-2">POLES</h4>
                                </div>
                                <h4 class="ml-1">{card.poles}</h4>
                            </div>

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