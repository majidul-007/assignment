import PropTypes from 'prop-types';
import { FaUserAlt } from "react-icons/fa";
import { HiMiniFlag } from "react-icons/hi2";

const Card = ({ data,handelChoseData }) => {
    const { country, image, name, price, rating, role,batting_style } = data
    
    return (
        <div>
            <div className="p-4 border-[1px] rounded-xl  text-gray-800">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <img src={image} alt="" className="block object-cover object-center w-full rounded-md h-56 bg-gray-500" />
                        <div className="flex items-center gap-2">
                            <FaUserAlt />
                            <h1 className='text-xl font-bold'>{name}</h1>
                        </div>
                        <div className='flex justify-between items-center border-b-[2px] pb-2'>
                            <div className='flex items-center gap-1 text-gray-400' >
                                <HiMiniFlag />
                                <h1 className=''>{country}</h1>
                            </div>
                            <h1 className='bg-slate-200 px-2 py-1 rounded-lg text-sm'>{role}</h1>
                        </div>
                        <div className='space-y-2'>
                            <div className='flex justify-between items-center'>
                                <h1 className='font-semibold'>Rating</h1>
                                <h1 className='text-gray-500'>{rating}</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <h1 className='font-semibold'>Batting Style</h1>
                                <h1 className='text-gray-500'>{batting_style}</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <h1 className='font-semibold'>price</h1>
                                <h1 className='text-gray-500'>${price}</h1>
                            </div>
                            <button onClick={()=>handelChoseData(data)} className='py-1 w-full hover:bg-secondary duration-150 hover:text-white bg-primary px-3 rounded-lg '>Choose Player</button>
                        </div>
                    </div>
                    <div className="space-y-2">
                    </div>
                </div>
            </div>
        </div>
    );
};
Card.propTypes = {
    data: PropTypes.object,
    handelChoseData:PropTypes.func
}

export default Card;