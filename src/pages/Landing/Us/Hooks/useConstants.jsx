import { useState } from "react";

const useConstants = (constants) => {

  const [card, setCard] = useState(constants.novedades);
  const [stats, setStats] = useState(constants.stats)

  const handleSelectNewsCard = (index) => {
    setCard((prev) => {
      return prev?.map((news, indexNews) => {
        if (index === indexNews) {
          return { ...news, selected: !news.selected }
        }
        return { ...news }
      });
    })
  }

  return {
    card,
    handleSelectNewsCard,
    stats
  }
}

export default useConstants;