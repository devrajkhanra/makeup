import { ImSpinner2 } from 'react-icons/im'

const Hero = ({ items }) => {

    return (
        <>
            {/* Checking if Items array not empty*/}
            {items.length ? (
                items.filter(item => item.id == '1046').map(filterItem => (

                    // Grid
                    <div className=' bg-pink-300 grid grid-flow-row-dense grid-cols-2 place-items-center py-10  bg-gradient-to-br from-pink-300 to-pink-500' key={filterItem.id}>

                        {/* Balls */}
                        <div className='z-0 rounded-full sm:h-8 sm:w-8 md:h-10 md:w-10 2xl:scale-[1100%] xl:scale-[1000%] lg:scale-[900%] md:scale-[700%] sm:scale-[600%] bg-gradient-to-br from-pink-100 to-yellow-600 absolute top-[30%] left-[10%] shadow-xl'></div>
                        <div className='z-0 rounded-full sm:h-4 sm:w-4 md:h-8 md:w-8 2xl:scale-[1100%] xl:scale-[1000%] lg:scale-[900%] md:scale-[700%] sm:scale-[600%] bg-gradient-to-br from-pink-300 to-amber-500 absolute top-[70%] left-[40%] shadow-xl'></div>

                        {/* First Column */}
                        <div className='z-10 flex flex-col bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-red-900 '>
                            <h1 className='font-extrabold md:text-7xl sm:text-5xl flex flex-row-reverse py-2 '>{filterItem.brand}</h1>
                            <p className=' font-normalbold md:text-7xl sm:text-5xl flex flex-row-reverse py-2 static' >{filterItem.product_type}</p>
                            <p className=' font-extranormal md:text-5xl sm:text-4xl flex flex-row-reverse py-2 static'>{filterItem.name}</p>
                        </div>

                        {/* Second Column */}
                        <div className='flex '>
                            <img src={filterItem.image_link} alt='hello' className='rounded h-[75%] w-[75%]' />
                        </div>
                    </div>
                ))
            ) : (
                // If Items array is empty 
                <div className='grid grid-cols-1 place-items-center pt-32'>
                    <ImSpinner2 className="animate-spin h-20 w-20" />
                    <h4>Loading ...</h4>
                </div>
            )}
        </>
    )
}

export default Hero