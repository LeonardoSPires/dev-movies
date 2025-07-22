import { useState, useEffect } from "react";
import api from "./api";

export default function useFetchLists(sliderConfigs) {
  const [lists, setLists] = useState({});
  const [mainHighlight, setMainHighlight] = useState();

  
  useEffect(() => {
    sliderConfigs.forEach(async (cfg) => {
      try {
        const { data: { results } } = await api.get(cfg.endpoint);

        setLists(prev => ({ ...prev, [cfg.key]: results }));
        if (cfg.key === "popMovies" && results.length > 0) setMainHighlight(results[0]);
      } catch (error) {
        console.error(`Error fetching ${cfg.key}:`, error);
      }
    });
  }, [sliderConfigs]);

  return { lists, mainHighlight };
}