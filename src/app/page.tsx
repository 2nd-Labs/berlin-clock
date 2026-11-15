"use client";

import { useEffect, useState } from "react";

type ClockTime = {
  hours: number;
  minutes: number;
  seconds: number;
};

function getBerlinTime(date: Date): ClockTime {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Berlin",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value ?? 0);

  return {
    hours: value("hour"),
    minutes: value("minute"),
    seconds: value("second"),
  };
}

function useTime(): Date | null {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => setTime(new Date());
    updateTime();
    const id = setInterval(updateTime, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

function LampRow({
  count,
  active,
  quarterHours = false,
}: {
  count: number;
  active: number;
  quarterHours?: boolean;
}) {
  return (
    <div className="clock-row" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => {
        const isLit = index < active;
        const isQuarterHour = quarterHours && (index + 1) % 3 === 0;
        const color = isLit ? (isQuarterHour ? "red" : "yellow") : "off";

        return <span className={`lamp lamp-${color}`} key={index} />;
      })}
    </div>
  );
}

export default function Home() {
  const now = useTime();
  const { hours, minutes, seconds } = now
    ? getBerlinTime(now)
    : { hours: 0, minutes: 0, seconds: 0 };
  const timeLabel = now
    ? [hours, minutes, seconds]
        .map((part) => String(part).padStart(2, "0"))
        .join(":")
    : "--:--:--";

  return (
    <main className="clock-page">
      <h1>Berlin-Uhr</h1>
      <p className="clock-description">
        Die Weltzeituhr am Alexanderplatz, dargestellt als Lichtreihen
      </p>
      <section
        className="clock"
        role="img"
        aria-label={`Berlin-Uhr, ${timeLabel} Uhr`}
      >
        <div
          className={`seconds-lamp ${seconds % 2 === 0 && now ? "seconds-on" : ""}`}
        />
        <LampRow count={4} active={Math.floor(hours / 5)} />
        <LampRow count={4} active={hours % 5} />
        <LampRow count={11} active={Math.floor(minutes / 5)} quarterHours />
        <LampRow count={4} active={minutes % 5} />
      </section>
      <time className="digital-time" aria-live="off">
        {timeLabel}
      </time>
      <p className="timezone">Europe/Berlin</p>
    </main>
  );
}
