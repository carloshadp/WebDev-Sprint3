import Pista from "../Pista";



function infoCircuitos(){

    const infos = [
        {
            localPista: "Alemanha",
            bandeira: "/src/imgs/Bandeiras/ale.svg",
            circuito: "/src/imgs/Circuitos/Eprix-Tempelhof.svg",
        },
        {
            localPista: "China",
            bandeira: "/src/imgs/Bandeiras/chi.svg",
            circuito: "/src/imgs/Circuitos/Eprix-Shanghai.svg",
        },
        {
            localPista: "Coreia",
            bandeira: "/src/imgs/Bandeiras/cor.svg",
            circuito: "/src/imgs/Circuitos/Eprix-Seoul.svg",
        },
        {
            localPista: "Espanha",
            bandeira: "/src/imgs/Bandeiras/esp.svg",
            circuito: "/src/imgs/Circuitos/Eprix-Valencia.svg",
        },
        {
            localPista: "Inglaterra",
            bandeira: "/src/imgs/Bandeiras/ing.svg",
            circuito: "/src/imgs/Circuitos/Eprix-London.svg",
        },
        {
            localPista: "Italia",
            bandeira: "/src/imgs/Bandeiras/ita.svg",
            circuito: "/src/imgs/Circuitos/Eprix-Italia.svg",
        },
        {
            localPista: "Mexico",
            bandeira: "/src/imgs/Bandeiras/mex.svg",
            circuito: "/src/imgs/Circuitos/Eprix-Mexico.svg",
        },
        {
            localPista: "Monaco",
            bandeira: "/src/imgs/Bandeiras/mon.svg",
            circuito: "/src/imgs/Circuitos/Eprix-Monaco.svg",
        },
        {
            localPista: "Arabia Saudita",
            bandeira: "/src/imgs/Bandeiras/sau.svg",
            circuito: "/src/imgs/Circuitos/Eprix-Riyadh-SA.svg",
        },
        {
            localPista: "Estados Unidos",
            bandeira: "/src/imgs/Bandeiras/usa.svg",
            circuito: "/src/imgs/Circuitos/Eprix-NewYork.svg",
        },
    ]

    return(
        
        <Pista dados={infos} />
       
    )
}

export default infoCircuitos;