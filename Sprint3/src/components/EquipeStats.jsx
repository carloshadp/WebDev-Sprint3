import React from 'react'

export default function PilotoStats({dados}) {
  return (
    <>
      {
        dados.map((card, index) => (
            <div key={index}>
                <div>
                    <div>
                        <img class="w-56" src={card.logo} />
                    </div>
                    <div>
                        <h2>{card.nome}</h2>
                        <div>
                            <img class="w-11" src={card.pais} />
                            <h4>{card.pais_nome}</h4>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h4>{card.vitorias}</h4>
                        <div>
                            <div>
                                <img class="w-11" src={card.foto_piloto_1} />
                                <h4>{card.nome_piloto_1}</h4>
                            </div>
                            <div>
                                <img class="w-11" src={card.foto_piloto_2} />
                                <h4>{card.nome_piloto_2}</h4>
                            </div>

                        </div>
                    </div>
                    <div>
                        <div>
                            <h4>{card.podios}</h4>
                        </div>
                        <div>
                            <h4>{card.poles}</h4>
                        </div>

                    </div>
                </div>
            </div>
        ))
      }
    </>
  )
}