'use client'

import { useState } from "react";

export default function Home() {
  const [now, setNow] = useState(new Date());

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const firstRow = Math.floor(hours / 5);
  const secondRow = hours % 5;
  const thirdRow = Math.floor(minutes / 5);
  const fourthRow = minutes % 5;

  setInterval(() => setNow(new Date()), 1000);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1>Berlin Clock</h1>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
            <circle r="45" cx="50" cy="50" fill={seconds % 2 != 0 ? "grey" : "red"} />
          </svg> 
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill={firstRow / 1 >= 1 ? "yellow" : "grey"} />
          </svg>
          <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill={firstRow / 2 >= 1 ? "yellow" : "grey"} />
          </svg> 
          <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill={firstRow / 3 >= 1 ? "yellow" : "grey"} />
          </svg> 
          <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill={firstRow / 4 >= 1 ? "yellow" : "grey"} />
          </svg> 
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill={secondRow / 1 >= 1 ? "yellow" : "grey"} />
          </svg>
          <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill={secondRow / 2 >= 1 ? "yellow" : "grey"} />
          </svg> 
          <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill={secondRow / 3 >= 1 ? "yellow" : "grey"} />
          </svg> 
          <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill={secondRow / 4 >= 1 ? "yellow" : "grey"} />
          </svg> 
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <svg width="50" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="100" x="10" y="10" rx="20" ry="20" fill={thirdRow / 1 >= 1 ? "yellow" : "grey"} />
          </svg>
          <svg width="50" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="100" x="10" y="10" rx="20" ry="20" fill={thirdRow / 2 >= 1 ? "yellow" : "grey"} />
          </svg>
          <svg width="50" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="100" x="10" y="10" rx="20" ry="20" fill={thirdRow / 3 >= 1 ? "red" : "grey"} />
          </svg>
          <svg width="50" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="100" x="10" y="10" rx="20" ry="20" fill={thirdRow / 4 >= 1 ? "yellow" : "grey"} />
          </svg>
          <svg width="50" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="100" x="10" y="10" rx="20" ry="20" fill={thirdRow / 5 >= 1 ? "yellow" : "grey"} />
          </svg>
          <svg width="50" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="100" x="10" y="10" rx="20" ry="20" fill={thirdRow / 6 >= 1 ? "red" : "grey"} />
          </svg>
          <svg width="50" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="100" x="10" y="10" rx="20" ry="20" fill={thirdRow / 7 >= 1 ? "yellow" : "grey"} />
          </svg>
          <svg width="50" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="100" x="10" y="10" rx="20" ry="20" fill={thirdRow / 8 >= 1 ? "yellow" : "grey"} />
          </svg>
          <svg width="50" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="100" x="10" y="10" rx="20" ry="20" fill={thirdRow / 9 >= 1 ? "red" : "grey"} />
          </svg>
          <svg width="50" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="100" x="10" y="10" rx="20" ry="20" fill={thirdRow / 10 >= 1 ? "yellow" : "grey"} />
          </svg>
          <svg width="50" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="50" height="100" x="10" y="10" rx="20" ry="20" fill={thirdRow / 11 >= 1 ? "yellow" : "grey"} />
          </svg>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill={fourthRow / 1 >= 1 ? "yellow" : "grey"} />
          </svg>
          <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill={fourthRow / 2 >= 1 ? "yellow" : "grey"} />
          </svg> 
          <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill={fourthRow / 3 >= 1 ? "yellow" : "grey"} />
          </svg>
          <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill={fourthRow / 4 >= 1 ? "yellow" : "grey"} />
          </svg> 
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
