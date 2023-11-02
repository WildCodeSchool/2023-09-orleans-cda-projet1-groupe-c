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
  } = character;
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-[url('/card-support.png')] bg-no-repeat">
          <div className="group h-80 w-full">
            <div className="relative left-[64px] top-[33px] h-[236] w-[682px] origin-center transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute z-10 h-full w-full bg-no-repeat">
                <img src="/card-front.png" alt="" className="absolute z-0" />
                <div className="z-20 mt-3 flex items-center justify-center space-x-8 transition-all [backface-visibility:hidden] group-hover:[transform:rotateY(180deg)]">
                  <img
                    src={image}
                    alt={name}
                    className="z-10 h-52 w-40 object-cover"
                  />
                  <div className="z-10 flex flex-col items-center font-test text-xl font-medium leading-10 text-font-color">
                    <p className="uppercase">{name}</p>
                    <div className="flex flex-row space-x-8">
                      <div className="flex flex-col">
                        <p>
                          gender <span className="uppercase">{gender}</span>
                        </p>
                        <p>
                          mass <span className="uppercase">{mass}</span>
                        </p>
                      </div>
                      <div className="flex flex-col text-right">
                        <p>
                          year <span className="uppercase">{birth_year}</span>
                        </p>
                        <p>
                          height <span className="uppercase">{height}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row space-x-12">
                      <p>
                        hair <span className="uppercase">{hair_color}</span>
                      </p>
                      <p>
                        skin <span className="uppercase">{skin_color}</span>
                      </p>
                      <p>
                        eye <span className="uppercase">{eye_color}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-0 z-10 h-full w-full bg-primary/20 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div className="flex min-h-full flex-col items-center justify-center">
                  <p>Character</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
