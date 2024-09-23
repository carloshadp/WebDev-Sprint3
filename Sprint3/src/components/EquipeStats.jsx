import React from 'react'

export default function PilotoStats({dados}) {
  return (
    <>
      {
        dados.map((card, index) => (
            
            <section>
                <section key={index} class="sm:grid sm:grid-cols-2 sm:m-14">
                    <div class="sm:grid sm:grid-cols-2">
                        <div class="bg-slate-300 border border-white sm:rounded-full sm:w-52">
                            <img class="sm:w-56" src={card.logo} />
                        </div>
                        <div class="sm:grid sm:grid-rows-2 sm:items-center">
                            <div class="sm:mb-9">
                                <h4 class="sm:text-sm text-sky-400">EQUIPE</h4>
                                <h2 class="sm:text-2xl">{card.nome}</h2>
                            </div>
                            
                            <div >
                                <div>
                                    <h4 class="sm:text-sm text-sky-400 sm:mb-2">PAÍS</h4>
                                </div>
                                <div class="sm:flex sm:gap-2">
                                    <img class="sm:w-11 sm:rounded-md" src={card.pais} />
                                    <h4 class="sm:col-start-2">{card.pais_nome}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sm:grid sm:grid-rows-2 sm:items-center">
                        <div class="sm:grid sm:grid-cols-2">
                            <div class="">
                                <div>
                                    <h4 class="sm:text-sm text-sky-400 sm:mb-2">VITÓRIAS</h4>
                                </div>
                                <h4 class="sm:ml-1">{card.vitorias}</h4>
                            </div>
                            <div class="sm:grid sm:gap-2">
                                <div class="sm:grid sm:grid-rows-2">
                                    <div>
                                        <h4 class="sm:text-sm text-sky-400 sm:mb-2">PILOTOS</h4>
                                    </div>
                                    <div class="sm:flex sm:gap-2">
                                        <img class="sm:w-11 sm:rounded-full" src={card.foto_piloto_1} />
                                        <h4>{card.nome_piloto_1}</h4>
                                    </div>
                                </div>
                                <div class="sm:flex sm:gap-2">
                                    <img class="sm:w-11 sm:h-7 sm:rounded-full" src={card.foto_piloto_2} />
                                    <h4>{card.nome_piloto_2}</h4>
                                </div>

                            </div>
                        </div>
                        <div class="sm:grid sm:grid-cols-2">
                            <div>
                                <div>
                                    <h4 class="sm:text-sm text-sky-400 sm:mb-2">PÓDIOS</h4>
                                </div>
                                <h4 class="sm:ml-1">{card.podios}</h4>
                            </div>
                            <div>
                                <div>
                                    <h4 class="sm:text-sm text-sky-400 sm:mb-2">POLES</h4>
                                </div>
                                <h4 class="sm:ml-1">{card.poles}</h4>
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