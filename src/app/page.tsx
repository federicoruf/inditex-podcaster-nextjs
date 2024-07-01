"use client";

import React, { useState } from "react";
import { LoadingProvider } from "../context/LoadingContext";
import { PodcastList } from "../components";

export default function Home() {
  const [filter, setFilter] = useState<string>("");
  const [results, setResults] = useState<number>();

  const onChangeFilter = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    setFilter(value);
  };

  return (
    <>
      <div className="flex flex-col pt-2">
        <div className="self-end">
          <span
            className="bg-blue-600 text-white rounded-md px-2 mr-3"
            data-testid="result-value"
          >
            {results}
          </span>
          <input
            type="text"
            placeholder="Filter podcasts..."
            value={filter}
            onChange={onChangeFilter}
          />
        </div>
        <PodcastList filter={filter} setResults={setResults} />
      </div>
    </>
  );
}
