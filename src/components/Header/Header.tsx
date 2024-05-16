import logo from '../../../public/logo.png';

export const Header = () => {
  return (
    <header className="shadow-md bg-[#66ff00] py-[12px]">
      <div className="container flex justify-center font-exo-bold text-2xl text-black">
        <div className="flex items-center gap-[2px]">
          <img src={logo} alt="Logo" className="size-[28px]" />
          MultiverseRM
        </div>
      </div>
    </header>
  );
};
