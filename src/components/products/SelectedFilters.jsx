import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { removeAllFilters, removeFilter } from '@/store/features/filterSlice';
import { useDispatch } from 'react-redux';

export default React.memo(function SelectedFilters({ filters }) {
  const dispatch = useDispatch();
  console.log('selected filters run');
  return (
    <div className='flex flex-wrap gap-2'>
      {filters?.map((filter) => (
        <div
          key={filter[1]}
          className='flex gap-2 cursor-default items-center px-6 py-2 border border-gray-300 rounded-full'
        >
          <AiOutlineClose
            size={16}
            onClick={() =>
              dispatch(removeFilter({ name: filter[0], value: filter[1] }))
            }
            className='cursor-pointer'
          />
          <span className='capitalize'>{filter[0]}</span> -{' '}
          <span>{filter[1]}</span>
        </div>
      ))}
      {filters.length > 1 && (
        <button
          onClick={() => dispatch(removeAllFilters())}
          className='px-6 py-2 capitalize bg-red-50 rounded-full text-red-500'
        >
          clear all
        </button>
      )}
    </div>
  );
});
