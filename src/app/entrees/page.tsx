'use client'
import { useState, useEffect } from 'react';

import FoodItem from "@/app/food_item"

export default function Entrees() {
  const [entrees, setEntrees] = useState<string[]>(null);

  // Followed structure from https://nextjs.org/docs/app/building-your-application/data-fetching/fetching
  useEffect(() => {
    async function fetchEntrees() {
      let fileContentsResponse: Awaited<Promise<string>> = await fetch('/entrees.txt');
      let fileContents = await fileContentsResponse.text();
      // Cross platform newline regex
      const loadedEntrees = fileContents.split(/\r?\n/);
      setEntrees(loadedEntrees);
    }
    fetchEntrees();
  }, []
  );

  // I do like this gaurd if over the && syntax
  if (!entrees) {
    return <div>Loading entrees...</div>
  }

  return (
    <div>
      <h1>Entrees</h1>
      <p>Try out our entrees!</p>
      <ul>
        {entrees.map((entree, index) => (
          // I've learned that parenthesis instead of brackets have an implicit return.
          <FoodItem name={entree} key={index}/>
        ))}
      </ul>
    </div>
  );
}
