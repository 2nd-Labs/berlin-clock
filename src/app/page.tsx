'use client'

import { useState } from "react";

export default function Home() {
  const [now, setNow] = useState(new Date());

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  setInterval(() => setNow(new Date()), 1000);

  return (
    <div className="grid justify-items-center">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="flex items-center flex-col sm:flex-row">
           <h1 className="text-6xl font-bold text-gray-400">
             Berlin Clock
           </h1>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
            <circle r="45" cx="50" cy="50" fill={seconds % 2 == 0 ? "red" : "grey"} />
          </svg> 
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {
            Array.from({length: 4}, (_, i) => {
              return <>
                <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
                  <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill={Math.floor(hours / 5) / (i + 1) >= 1 ? "yellow" : "grey"} />
                </svg>
              </>
            })
          }
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {
            Array.from({length: 4}, (_, i) => {
              return <>
                <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
                  <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill={(hours % 5) / (i + 1) >= 1 ? "yellow" : "grey"} />
                </svg>
              </>
            })
          }
        </div>
        <div className="flex gap-14 items-center flex-col sm:flex-row">
          {
            Array.from({length: 11}, (_, i) => {
              return <>
                <svg width="50" height="130" xmlns="http://www.w3.org/2000/svg">
                  <rect width="50" height="100" x="1" y="1" rx="10" ry="10" fill={Math.floor(minutes / 5) / (i + 1) >= 1 ? (i + 1) % 3 == 0 ? "red" : "yellow" : "grey"} />
                </svg>
              </>
            })
          }
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          {
            Array.from({length: 4}, (_, i) => {
              return <>
                <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
                  <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill={(minutes % 5) / (i + 1) >= 1 ? "yellow" : "grey"} />
                </svg>
              </>
            })
          }
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
