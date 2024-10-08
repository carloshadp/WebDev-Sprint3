import PilotoStats from "../PilotoStats";




function InfoPilotos(){
    const infos = [
        {
            nomePiloto: "Nick Cassidy",
            bandeira: "/imgs/Bandeiras/nz.svg",
            foto: "/imgs/Fotos-Pilotos/Nick Cassidy.webp",
            idade: "30",
            equipe: "Jaguar TCS Racing",
            vitorias: "7 / 63",
            podios: "20 / 63",
            nomePais: "Nova Zelândia"
        },
        {
            nomePiloto: "Mitch Evans",
            bandeira: "/imgs/Bandeiras/nz.svg",
            foto: "/imgs/Fotos-Pilotos/Mitch Evans.webp",
            idade: "30",
            equipe: "Jaguar TCS Racing",
            vitorias: "12 / 111",
            podios: "31 / 111",
            nomePais: "Nova Zelândia"
        
        },
        {
            nomePiloto: "Pascal Wehrlein",
            bandeira: "/imgs/Bandeiras/ale.svg",
            foto: "/imgs/Fotos-Pilotos/Pascal Wehrlein.webp",
            idade: "29",
            equipe: "TAG Heuer Porsche",
            vitorias: "7 / 80",
            podios: "12 / 80",
            nomePais: "Alemanha"
        },
        {
            nomePiloto: "António Félix da Costa",
            bandeira: "/imgs/Bandeiras/pt.svg",
            foto: "/imgs/Fotos-Pilotos/António Félix da Costa.webp",
            idade: "33",
            equipe: "TAG Heuer Porsche",
            vitorias: "12 / 128",
            podios: "23 / 128",
            nomePais: "Portugal"
         
        },
        {
            nomePiloto: "Oliver Rowland",
            bandeira: "/imgs/Bandeiras/ing.svg",
            foto: "/imgs/Fotos-Pilotos/Oliver Rowland.webp",
            idade: "32",
            equipe: "Nissan",
            vitorias: "3 / 78",
            podios: "12 / 78",
            nomePais: "Grã-Bretanha"
        },
        {
            nomePiloto: "Jean-Eric Vergne",
            bandeira: "/imgs/Bandeiras/fr.svg",
            foto: "/imgs/Fotos-Pilotos/Jean-Eric Vergne.webp",
            idade: "34",
            equipe: "Peugeot TotalEnergies",
            vitorias: "11 / 130",
            podios: "36 / 130",
            nomePais: "França"
   
        },
        {
            nomePiloto: "Jake Dennis",
            bandeira: "/imgs/Bandeiras/ing.svg",
            foto: "/imgs/Fotos-Pilotos/Jake Dennis.webp",
            idade: "29",
            equipe: "Andretti Autosport",
            vitorias: "6 / 63",
            podios: "21 / 63",
            nomePais: "Grã-Bretanha"
        },
        {
            nomePiloto: "Maximilian Günther",
            bandeira: "/imgs/Bandeiras/ale.svg",
            foto: "/imgs/Fotos-Pilotos/Maximilian Günther.jpg",
            idade: "27",
            equipe: "Maserati MSG Racing",
            vitorias: "5 / 83",
            podios: "10 / 83",
            nomePais: "Alemanha"
        },
        {
            nomePiloto: "Robin Frijns",
            bandeira: "/imgs/Bandeiras/hol.svg",
            foto: "/imgs/Fotos-Pilotos/Robin Frijns.webp",
            idade: "33",
            equipe: "BMW M Team WRT",
            vitorias: "2 / 102",
            podios: "16 / 102",
            nomePais: "Países Baixos"
          
        },
        {
            nomePiloto: "Stoffel Vandoorne",
            bandeira: "/imgs/Bandeiras/bel.svg",
            foto: "/imgs/Fotos-Pilotos/Stoffel Vandoorne.jpeg",
            idade: "32",
            equipe: "Peugeot TotalEnergies",
            vitorias: "3 / 87",
            podios: "16 / 87",
            nomePais: "Bélgica"
        },
        
        
    ]
    
    return(
        
        <PilotoStats dados={infos} /> 
        
    )
}


export default InfoPilotos;