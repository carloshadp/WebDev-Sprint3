import React from 'react'

export default function Footer() {
  return (
    <>
      <footer class="bg-gradient-to-b from-cyan-950 to-blue-950 sm:h-32 sm:grid grid-cols-3 sm:items-center sm:justify-around bg-sky-950 mt-auto  left-0 bottom-0 w-full">
        <div class="sm:place-self-center">
          <img class="sm:rounded-3xl w-48" src="/src/imgs/imgs/Gif Formula-E.gif" />
        </div>

        <div class="sm:flex sm:items-center sm:col-start-2 sm:place-self-center">
          <img src="src\assets\github-logo.png" width="30px" />
          <a class="hover:text-sky-400" href="https://github.com/CarlosHADP/WebDev-Sprint3">Link pro nosso Repositório</a>
        </div>

        <div class="sm:flex sm:flex-col">
          <div class="sm:place-self-center sm:text-lg sm:text-sky-400">
            Créditos
          </div>
          <div class="sm:flex sm:flex-col sm:place-self-center">
            <a href="https://github.com/CarlosHADP" target='blank' class="hover:text-sky-500">Carlos Henrique Pinheiro</a>
            <a href="https://github.com/CarlosHADP" target='blank' class="sm:place-self-center hover:text-sky-500">Rodrigo Hiroshi</a>
            <a href="https://github.com/CarlosHADP" target='blank' class="sm:place-self-center hover:text-sky-500">Mauricio Alves</a>
          </div>
        </div>

      </footer>
    </>
  )
}
