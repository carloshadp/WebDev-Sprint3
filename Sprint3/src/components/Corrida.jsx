import React, { useRef, useEffect, useState } from 'react';

const CarRace = () => {
  const canvasRef = useRef(null);
  const [cars, setCars] = useState([
    { x: 0,
      y: 100, 
      speed: Math.random() * 0.00005 + 0.012 },
    { x: 0,
      y: 135,
      speed: Math.random() * 0.00005 + 0.012 },
    { x: 0,
      y: 185,
      speed: Math.random() * 0.00005 + 0.012 },
    { x: 0,
      y: 235,
      speed: Math.random() * 0.00005 + 0.012 },
    { x: 0,
      y: 270,
      speed: Math.random() * 0.00005 + 0.012 },
  ]);
  const [countdown, setCountdown] = useState(3);
  const [winner, setWinner] = useState(null);
  const [raceStarted, setRaceStarted] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timerId = setInterval(() => {
        setCountdown(prev => prev - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      setRaceStarted(true);
    }
  }, [countdown]);

  useEffect(() => {
    if (raceStarted && !winner) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      let animationFrameId;

      const drawTrack = () => {
        ctx.fillStyle = 'gray';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

  
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 5;
        ctx.setLineDash([15, 10]);
        for (let i = 1; i <= 5; i++) {
          ctx.beginPath();
          ctx.moveTo(0, i * 50);
          ctx.lineTo(canvas.width, i * 50);
          ctx.stroke();
        }
      };

      const drawCars = () => {
        cars.forEach((car, index) => {
          ctx.fillStyle = ['red', 'blue', 'green', 'yellow', 'purple'][index];
          ctx.fillRect(car.x, car.y, 40, 20);
          
        });
      };

      const updateCars = () => {
        setCars(prevCars => 
          prevCars.map(car => {
            if (car.x < canvas.width - 30) {
              return { ...car, x: car.x + car.speed };
            } else if (!winner) {
              setWinner(prevCars.indexOf(car) + 1);
            }
            return car;
          })
        );
      };

      const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height); 
        drawTrack(); 
        drawCars(); 
        updateCars(); 

        if (!winner) {
          animationFrameId = requestAnimationFrame(render); 
        }
      };

      render();

      return () => cancelAnimationFrame(animationFrameId); 
    }
  }, [raceStarted, cars, winner]);

  
  const resetRace = () => {
    setCars([
      { 
        x: 0, 
        y: 50,
        speed: Math.random() * 0.05 + 0.012 
      },
      { 
        x: 0, 
        y: 100, 
        speed: Math.random() * 0.05 + 0.012 
      },
      { 
        x: 0, 
        y: 150, 
        speed: Math.random() * 0.05 + 0.012 
      },
      { 
        x: 0, 
        y: 200, 
        speed: Math.random() * 0.05 + 0.012 
      },
      { 
        x: 0, 
        y: 250, 
        speed: Math.random() * 0.05 + 0.012 
      },
    ]);
    setCountdown(3);
    setWinner(null); 
    setRaceStarted(false); 
  };

  return (
    <div>
      <canvas ref={canvasRef} class="lg:w-3/6 lg:h-1/6 w-60 h-20 sm:w-3/5 sm:h-1/5 mt-36 rounded-lg" width={800} height={300} />
      {countdown > 0 && <h1>Iniciando em: {countdown}</h1>}
      {winner && <h2>O Carro {winner} venceu!</h2>}
      <button onClick={resetRace} class="mt-5 p-4 text-base bg-gradient-to-r from-cyan-800 to-blue-900 rounded-xl border border-black ">
        Reiniciar Corrida
      </button>
    </div>
  );
};

export default CarRace;