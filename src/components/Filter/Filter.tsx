import { useForm } from 'react-hook-form';
import { IoClose } from 'react-icons/io5';

import { SearchParams } from '../../types/character';
import { createQueryString } from '../../helpers/createQueryString';

interface FilterPops {
  setParams: (data: string) => void;
}

export const Filter = ({ setParams }: FilterPops) => {
  const { register, handleSubmit, setValue } = useForm<SearchParams>();

  const onSubmit = (data: SearchParams): void => {
    setParams(createQueryString(data));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="text-xl flex justify-start items-center w-full gap-5 rounded-xl p-3.5 text-black border border-solid border-gray-300 shadow-md"
    >
      <label className="label relative">
        <input
          type="text"
          className="input-field focus:border-[#66ff00]"
          placeholder="search by name"
          {...register('name')}
        />
        <IoClose
          onClick={() => setValue('name', '')}
          className="absolute size-[16px] right-3 top-4.5 fill-gray-400 hover:fill-red-600 cursor-pointer"
        />
      </label>
      <label className="label text-lg gap-2">
        Status:
        <select className="input-field w-full" {...register('status')}>
          <option value="">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </label>
      <label className="label text-lg gap-2 ">
        Gender:
        <select className="input-field w-full" {...register('gender')}>
          <option value="">All</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown"</option>
        </select>
      </label>
      <button className="btn btn-wide bg-teal-300 ml-auto text-lg text-gray-500 border-none h-6 rounded-xl shadow-md hover:bg-teal-400">
        Search
      </button>
    </form>
  );
};
