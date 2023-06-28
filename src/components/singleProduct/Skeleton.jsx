
export default function SingleProductSkeleton() {
  return (
    <div role='status' className='bg-white p-8 rounded-md '>
      <div className='animate-pulse h-full'>
        <div className='grid grid-cols-2 gap-8 h-full '>
          {/* --------- IMG ----------- */}
          <div className='flex flex-col justify-between h-full gap-4'>
            <div className=' w-full flex-grow rounded-md bg-gray-200 '></div>
            <div className='flex h-[80px] gap-4'>
              <div className=' rounded-md w-[80px] bg-gray-200'></div>
              <div className=' rounded-md w-[80px] bg-gray-200'></div>
            </div>
          </div>
          {/* --------- Details ----------- */}
          <div className='flex flex-col'>
            <div className='w-[500px] h-6 rounded-md bg-gray-200 mb-2'></div>
            <div className='w-[100px] h-6 rounded-md bg-gray-200 mb-4'></div>
            <div className='flex items-center gap-4 mb-8'>
              <div className='w-[100px] h-2 rounded-md bg-gray-200'></div>
              <div className='w-[100px] h-2 rounded-md bg-gray-200'></div>
              <div className='w-[100px] h-2 rounded-md bg-gray-200'></div>
            </div>
            <div className='w-[100px] h-6 rounded-md bg-gray-200 mb-6'></div>
            <div className='mb-6 flex flex-col gap-4'>
              <div className='w-[400px] h-3 rounded-md bg-gray-200'></div>
              <div className='w-[300px] h-3 rounded-md bg-gray-200'></div>
              <div className='w-[200px] h-3 rounded-md bg-gray-200'></div>
            </div>
            <div className='w-[500px] h-10 rounded-md bg-gray-200 mb-6'></div>
            <div className='grid grid-cols-[1fr_2fr] gap-4'>
              <p className='w-[100px] h-2 rounded-md bg-gray-200'></p>
              <p className='w-[100px] h-2 rounded-md bg-gray-200'></p>
              <p className='w-[100px] h-2 rounded-md bg-gray-200'></p>
              <p className='w-[100px] h-2 rounded-md bg-gray-200'></p>
              <p className='w-[100px] h-2 rounded-md bg-gray-200'></p>
              <p className='w-[100px] h-2 rounded-md bg-gray-200'></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
