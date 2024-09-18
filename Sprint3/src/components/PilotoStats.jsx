import React from 'react'

export default function Pista({dados}) {
  return (
    <>
      {
        dados.map((card, index) => (
            <div className="PilotoStats" key={index}>
                <section>
                    <div class="nomeEfoto">
                        <div>
                            <h3>{card.nomePiloto} </h3>
                            <img src={card.pais} />
                        </div>
                        <div>
                            <img src={card.foto} />
                        </div>
                    </div>
                    <div>

                    </div>

                </section>

            </div>
        ))
      }
    </>
  )
}