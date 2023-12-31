import { useState } from 'react';
import CardDetailPlanet from './CardDetailPlanet';

export default function CarouselPlanets({ planets, isHidden, setIsHidden }) {
  const [currDeg, setCurrDeg] = useState(0);
  const [current, setCurrent] = useState(0);
  const [cardDetail, setCardDetail] = useState(0);
  const [imgCard, setImgCard] = useState('');

  const slide = (i) => {
    setCurrDeg((currDeg) => currDeg - 36 * (i - current));
    setCurrent(i);
  };
  return (
    <>
      <div className="flex justify-center">
        <div className="relative z-20 mt-28 w-48 perspective-1000">
          <div
            className={`transform-style rotate-y-[${currDeg}deg] absolute h-full w-full duration-[1000ms]`}
          >
            {planets.map((p, i) => (
              <img
                src={`https://starwars-visualguide.com/assets/img/planets/${
                  p.url.split('/')[5]
                }.jpg`}
                onError={(e) => {
                  e.target.src = `${
                    import.meta.env.BASE_URL
                  }placeholder-planet.png`;
                }}
                alt={p.name}
                key={i}
                onClick={() => {
                  slide(i);
                  setCardDetail(i);
                  setImgCard(p.url.split('/')[5]);
                  setIsHidden(false);
                }}
                className={`${
                  current === i ? 'shadow-xl shadow-yellow-200/30' : ''
                } absolute block h-48 w-48 rounded-full bg-slate-600 object-cover [transform:rotateY(${
                  i * 36
                }deg)translateZ(400px)] cursor-pointer`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={isHidden ? 'hidden' : ''}>
        <CardDetailPlanet planet={planets[cardDetail]} img={imgCard} />
      </div>
    </>
  );
}
