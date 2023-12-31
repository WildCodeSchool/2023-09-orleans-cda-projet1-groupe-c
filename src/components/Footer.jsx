import FilmsFooter from './FilmsFooter';

export default function Footer() {
  return (
    <>
      <footer className="z-[100] mt-12 h-20 w-screen border-t-2 border-primary before:absolute before:h-[78px] before:w-full before:backdrop-blur">
        <div className="relative bottom-[45px] flex justify-center ">
          <FilmsFooter />
        </div>
      </footer>
    </>
  );
}
