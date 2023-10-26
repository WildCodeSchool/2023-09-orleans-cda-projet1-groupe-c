import { useState, useEffect } from 'react';
import getInfo from './fetch/getInfo';
import SmallCard from './SmallCard';
import Loading from './Loading';

export default function CharacterScrollingCard() {
  const [charactersData, setCharactersData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    let loadedCount = 0;

    const fetchCharacters = async (url) => {
      try {
        const data = await getInfo(url, controller);

        data.results.forEach((Character) => {
          const id = parseInt(
            Character.url.split('people/')[1].replace('/', ''),
          );
          const imageUrl = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`;

          if (id <= 10) setLoading(false);

          setCharactersData((prev) => [
            ...prev,
            { name: Character.name, image: imageUrl, height: Character.height },
          ]);
          loadedCount++;
        });

        if (data.next && loadedCount < 80) {
          fetchCharacters(data.next);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    };

    fetchCharacters('https://swapi.dev/api/people/');

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="cards-perspective flex h-[40vh] justify-center">
      <div className="hide-scrollbar mx-auto mt-[-980px] flex w-2/3 flex-wrap justify-center gap-3 overflow-y-scroll scale-90">
        <div className="h-[990px] w-full"></div>
        {charactersData.map((character, index) => {
          if (!character.name || !character.image) {
            return null;
          }
          return (
            <div
              key={index}
              className="transition-transform duration-500 ease-in-out transform hover:-translate-y-10 hover:scale-110 "
            >
              <SmallCard
                image={character.image}
                name={character.name}
                role={`Size : ${character.height} cm`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
