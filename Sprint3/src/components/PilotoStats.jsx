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
                  <img src={card.bandeira} />
                </div>
                <div>
                  <img src={card.foto} />
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <h4>Idade</h4>
                    <h4>{card.idade}</h4>
                  </div>
                  <div>
                    <h4>Equipe</h4>
                    <h4>{card.equipe}</h4>
                  </div>
                </div>
                <div>
                  <div>
                    <h4>Vitórias</h4>
                    <h4>{card.vitorias}</h4>
                  </div>
                  <div>
                    <h4>Pódios</h4>
                    <h4>{card.podios}</h4>
                  </div>
                </div>
              </div>

            </section>
            <hr border="1px" solid black width="100%" />
          </div>
        ))
      }
    </>
  )
}