import React from 'react'

export default function Footer() {
  return (
    <>
      <footer class="bg-gradient-to-b from-cyan-950 to-blue-950 sm:h-32 grid grid-cols-3 sm:items-center sm:justify-around bg-sky-950 mt-auto  left-0 bottom-0 w-full">
        <div class="place-self-center sm:p-0 p-3">
          <img class="rounded-3xl sm:w-48 w-36" src="/src/imgs/imgs/Gif Formula-E.gif" />
        </div>

        <div class="flex items-center sm:col-start-2 sm:place-self-center">
          <img src="src\assets\github-logo.png" width="30px" />
          <a class="hover:text-sky-400" href="https://github.com/CarlosHADP/WebDev-Sprint3">Link pro nosso Repositório</a>
        </div>

        <div class="sm: flex flex-col">
          <div class="place-self-center text-lg text-sky-400">
            Créditos
          </div>
          <div class="flex flex-col place-self-center sm:p-0 p-3">
            <a href="https://github.com/CarlosHADP" target='blank' class="place-self-center hover:text-sky-500">Carlos Henrique</a>
            <a href="https://github.com/CarlosHADP" target='blank' class="place-self-center hover:text-sky-500">Rodrigo Hiroshi</a>
            <a href="https://github.com/CarlosHADP" target='blank' class="place-self-center hover:text-sky-500">Mauricio Alves</a>
          </div>
        </div>

      </footer>
    </>
  )
}
