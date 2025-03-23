"use client";

import { useState, useEffect, Fragment } from "react";
import type { JSX } from "react";

function useTime(): Date {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

export default function Home(): JSX.Element {
  const now = useTime();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return (
    <main className="flex flex-col gap-6 items-center">
      <div className="columns-1">
        <h1 className="text-6xl font-bold text-gray-400">Berlin Clock</h1>
      </div>
      <div className="columns-1">
        <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
          <circle
            r="45"
            cx="50"
            cy="50"
            fill={seconds % 2 == 0 ? "red" : "grey"}
          />
        </svg>
      </div>
      <div className="columns-4">
        {Array.from({ length: 4 }, (_, i) => {
          return (
            <svg
              width="300"
              height="130"
              xmlns="http://www.w3.org/2000/svg"
              key={i}
            >
              <rect
                width="200"
                height="100"
                x="10"
                y="10"
                rx="20"
                ry="20"
                fill={Math.floor(hours / 5) / (i + 1) >= 1 ? "yellow" : "grey"}
              />
            </svg>
          );
        })}
      </div>
      <div className="columns-4">
        {Array.from({ length: 4 }, (_, i) => {
          return (
            <svg
              width="300"
              height="130"
              xmlns="http://www.w3.org/2000/svg"
              key={i}
            >
              <rect
                width="200"
                height="100"
                x="10"
                y="10"
                rx="20"
                ry="20"
                fill={(hours % 5) / (i + 1) >= 1 ? "yellow" : "grey"}
              />
            </svg>
          );
        })}
      </div>
      <div className="columns-12 gap-12">
        {Array.from({ length: 11 }, (_, i) => {
          return (
            <svg
              width="50"
              height="130"
              xmlns="http://www.w3.org/2000/svg"
              key={i}
            >
              <rect
                width="50"
                height="100"
                x="1"
                y="1"
                rx="10"
                ry="10"
                fill={
                  Math.floor(minutes / 5) / (i + 1) >= 1
                    ? (i + 1) % 3 == 0
                      ? "red"
                      : "yellow"
                    : "grey"
                }
              />
            </svg>
          );
        })}
      </div>
      <div className="columns-4">
        {Array.from({ length: 4 }, (_, i) => {
          return (
            <svg
              width="300"
              height="130"
              xmlns="http://www.w3.org/2000/svg"
              key={i}
            >
              <rect
                width="200"
                height="100"
                x="10"
                y="10"
                rx="20"
                ry="20"
                fill={(minutes % 5) / (i + 1) >= 1 ? "yellow" : "grey"}
              />
            </svg>
          );
        })}
      </div>
    </main>
  );
}
