import { useState, useEffect } from 'react';

export default function CardDetailCharacter({ character }) {
  const {
    name,
    gender,
    birth_year,
    mass,
    height,
    hair_color,
    skin_color,
    eye_color,
    image,
    homeworld,
    species,
    starships,
    films,
  } = character;

  const homeworldData = useFetchData(homeworld);
  const speciesData = useFetchData(species);
  const starshipsData = useFetchData(starships);
  const filmsData = useFetchData(films);

  function useFetchData(urls) {
    const [data, setData] = useState(null);

    useEffect(() => {
      const controller = new AbortController();

      if (urls) {
        if (Array.isArray(urls)) {
          Promise.all(
            urls.map((url) =>
              fetch(url, { signal: controller.signal }).then((res) =>
                res.json(),
              ),
            ),
          ).then((results) => {
            setData(results);
          });
        } else {
          fetch(urls, { signal: controller.signal })
            .then((response) => response.json())
            .then((data) => setData(data));
        }
      }
      return () => {
        controller.abort();
      };
    }, [urls]);

    return data;
  }

  return (
    <>
      <div className="flex justify-center scale-125">
        <div className="bg-[url('/card-support.png')] bg-no-repeat">
          <div className="group h-80 w-full">
            <div className="relative left-[64px] top-[33px] h-[236] w-[682px] origin-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute z-10 h-full w-full bg-no-repeat">
                <img
                  src={`${import.meta.env.BASE_URL}card-front.png`}
                  alt=""
                  className="absolute z-0"
                />
                <div className="z-20 mt-3 flex items-center justify-center space-x-8 [backface-visibility:hidden] group-hover:[transform:rotateY(180deg)]">
                  <img
                    src={image}
                    alt={name}
                    className="z-10 h-52 w-40 object-cover"
                  />
                  <div className="z-10 flex flex-col items-center font-test text-xl font-medium leading-9 text-font-color">
                    <p className="text-3xl font-bold uppercase">{name}</p>
                    <div className="flex flex-row space-x-8">
                      <div className="flex flex-col">
                        <p>
                          gender<span className="uppercase">: {gender}</span>
                        </p>
                        <p>
                          mass<span className="uppercase">: {mass} kg</span>
                        </p>
                      </div>
                      <div className="flex flex-col text-right">
                        <p>
                          year<span className="uppercase">: {birth_year}</span>
                        </p>
                        <p>
                          height<span className="uppercase">: {height} cm</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row space-x-12">
                      <p>
                        hair<span className="uppercase">: {hair_color}</span>
                      </p>
                      <p>
                        skin<span className="uppercase">: {skin_color}</span>
                      </p>
                      <p>
                        eye<span className="uppercase">: {eye_color}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-0 z-10 h-full w-full bg-primary/20 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="flex">
                  <div className="flex min-h-full w-1/2 flex-col justify-center">
                    <p className="font-medium-5 my-4 text-center font-test text-xl text-font-color">
                      Homeworld:{' '}
                      {homeworldData ? (
                        <span>{homeworldData.name}</span>
                      ) : (
                        <span>unknown</span>
                      )}
                    </p>
                    <p className="font-medium-5 my-4 text-center font-test text-xl text-font-color">
                      Species:{' '}
                      {speciesData ? (
                        <ul>
                          {speciesData.map((species) => (
                            <li key={species.name}>{species.name}</li>
                          ))}
                        </ul>
                      ) : (
                        <span>unknown</span>
                      )}
                    </p>

                    <p className="font-medium-5 my-4 text-center font-test text-xl text-font-color">
                      Starships:{' '}
                      {starshipsData ? (
                        <ul>
                          {starshipsData.map((starship) => (
                            <li key={starship.name}>{starship.name}</li>
                          ))}
                        </ul>
                      ) : (
                        <span>unknown</span>
                      )}
                    </p>
                  </div>
                  <div className="w-1/2">
                    <div className="font-medium-5 my-4 text-center font-test text-xl text-font-color">
                      <span>Films:</span>
                      {filmsData ? (
                        <ul>
                          {filmsData.map((film) => (
                            <li key={film.title}>{film.title}</li>
                          ))}
                        </ul>
                      ) : (
                        <span>unknown</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
