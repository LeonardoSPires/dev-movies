import { useState, useEffect } from "react";
import api from "./api";

export default function useFetchLists(sliderConfigs) {
  const [lists, setLists] = useState({});
  const [mainHighlight, setMainHighlight] = useState();

  useEffect(() => {
    async function fetchAll() {
      try {
        const promises = sliderConfigs.map(cfg =>
          api.get(cfg.endpoint).then(res => ({
            key: cfg.key,
            type: cfg.type,              // <- pegamos o type da config
            results: res.data.results
          }))
        );

        const resultsArray = await Promise.all(promises);
        const newLists = {};

        resultsArray.forEach(({ key, type, results }) => {
          // Adiciona _type em cada item da lista
          const typedResults = results.map(item => ({ ...item, _type: type }));

          newLists[key] = typedResults;

          // Define o mainHighlight (Ex: primeiro item de "popMovies")
          if (key === "popMovies" && typedResults.length > 0) {
            setMainHighlight(typedResults[0]);  // Já vem com _type
          }
        });

        setLists(newLists);
      } catch (error) {
        console.error("Erro ao buscar listas:", error);
      }
    }

    fetchAll();
  }, [sliderConfigs]);

  return { lists, mainHighlight };
}
