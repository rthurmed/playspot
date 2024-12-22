"use client";

import { useState } from "react";

export function TabSelector() {
  const [tabSelected, setTabSelected] = useState<TabType>("all");
  const tabOptions = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Albums",
      value: "album",
    },
    {
      label: "Podcasts",
      value: "podcast",
    },
  ] as Option<TabType>[];

  return (
    <div className="flex flex-row gap-2">
      {tabOptions.map((option) => (
        <button
          key={option.value}
          className={`btn ${tabSelected === option.value ? "btn-primary" : ""}`}
          onClick={() => setTabSelected(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}