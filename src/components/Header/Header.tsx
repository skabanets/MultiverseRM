import logo from '../../../public/logo.png';

export const Header = () => {
  return (
    <header className="shadow-md bg-[#00FFFF] py-[8px]">
      <div className="container flex flex-start items-center gap-[2px] font-exo-bold text-2xl text-black">
        <img src={logo} alt="Logo" className="size-[28px]" />
        MultiverseRM
      </div>
    </header>
  );
};
