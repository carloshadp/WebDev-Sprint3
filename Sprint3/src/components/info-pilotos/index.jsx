import PilotoStats from "../PilotoStats";




function InfoPilotos(){
    const infos = [
        {
            nomePiloto: "Nick Cassidy",
            bandeira: "/src/imgs/Bandeiras/nz.svg",
            foto: "/src/imgs/Fotos-Pilotos/Nick Cassidy.webp",
            idade: "30",
            equipe: "Jaguar TCS Racing",
            vitorias: "7 / 63",
            podios: "20 / 63",
        },
        {
            nomePiloto: "Mitch Evans",
            bandeira: "/src/imgs/Bandeiras/nz.svg",
            foto: "/src/imgs/Fotos-Pilotos/Mitch Evans.webp",
            idade: "30",
            equipe: "Jaguar TCS Racing",
            vitorias: "12 / 111",
            podios: "31 / 111",
        },
        {
            nomePiloto: "Pascal Wehrlein",
            bandeira: "/src/imgs/Bandeiras/ale.svg",
            foto: "/src/imgs/Fotos-Pilotos/Pascal Wehrlein.webp",
            idade: "29",
            equipe: "TAG Heuer Porsche",
            vitorias: "7 / 80",
            podios: "12 / 80",
        },
        {
            nomePiloto: "António Félix da Costa",
            bandeira: "/src/imgs/Bandeiras/pt.svg",
            foto: "/src/imgs/Fotos-Pilotos/António Félix da Costa.webp",
            idade: "33",
            equipe: "TAG Heuer Porsche",
            vitorias: "12 / 128",
            podios: "23 / 128",
        },
        {
            nomePiloto: "Oliver Rowland",
            bandeira: "/src/imgs/Bandeiras/ing.svg",
            foto: "/src/imgs/Fotos-Pilotos/Oliver Rowland.webp",
            idade: "32",
            equipe: "Nissan",
            vitorias: "3 / 78",
            podios: "12 / 78",
        },
        {
            nomePiloto: "Jean-Eric Vergne",
            bandeira: "/src/imgs/Bandeiras/fr.svg",
            foto: "/src/imgs/Fotos-Pilotos/Jean-Eric Vergne.webp",
            idade: "34",
            equipe: "Peugeot TotalEnergies",
            vitorias: "11 / 130",
            podios: "36 / 130",
        },
        {
            nomePiloto: "Jake Dennis",
            bandeira: "/src/imgs/Bandeiras/ing.svg",
            foto: "/src/imgs/Fotos-Pilotos/Jake Dennis.webp",
            idade: "29",
            equipe: "Andretti Autosport",
            vitorias: "6 / 63",
            podios: "21 / 63",
        },
        {
            nomePiloto: "Maximilian Günther",
            bandeira: "/src/imgs/Bandeiras/ale.svg",
            foto: "/src/imgs/Fotos-Pilotos/Maximilian Günther.webp",
            idade: "27",
            equipe: "Maserati MSG Racing",
            vitorias: "5 / 83",
            podios: "10 / 83",
        },
        {
            nomePiloto: "Robin Frijns",
            bandeira: "/src/imgs/Bandeiras/hol.svg",
            foto: "/src/imgs/Fotos-Pilotos/Robin Frijns.webp",
            idade: "33",
            equipe: "BMW M Team WRT",
            vitorias: "2 / 102",
            podios: "16 / 102",
        },
        {
            nomePiloto: "Stoffel Vandoorne",
            bandeira: "/src/imgs/Bandeiras/bel.svg",
            foto: "/src/imgs/Fotos-Pilotos/Stoffel Vandoorne.webp",
            idade: "32",
            equipe: "Peugeot TotalEnergies",
            vitorias: "3 / 87",
            podios: "16 / 87",
        },
        
        
    ]
    
    return(
        
        <PilotoStats dados={infos} /> 
        
    )
}


export default InfoPilotos;