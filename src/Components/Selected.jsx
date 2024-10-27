import { MdDeleteForever } from "react-icons/md";
import PropTypes from 'prop-types';
import { useState } from "react";
const Selected = ({ datas, setActive,setChoseData }) => {
    const [newDatas, setNewdatas] = useState(datas)

    const handelDelete = (data) => {
        const temp = newDatas.filter(item => item !== data)
        setNewdatas(temp)
        setChoseData(newDatas)
    }


    return (

        <div>
            <h1 className='text-2xl font-bold pb-5'>Selected Player ({newDatas.length}/6)</h1>
            <div className="space-y-4">

                {
                    newDatas.length >= 1 && newDatas.map(data =>
                        <div key={data.id} className='border-2 p-5 rounded-xl flex justify-between items-center'>
                            <div className='flex gap-5 items-center'>
                                <div className="avatar">
                                    <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
                                        <img src={data.image} />
                                    </div>
                                </div>
                                <div>
                                    <h1 className='text-xl font-bold'>{data.name}</h1>
                                    <h1 className='text-gray-500'>{data.batting_style}</h1>
                                </div>
                            </div>
                            <MdDeleteForever onClick={() => handelDelete(data)} className="text-3xl text-red-500 cursor-pointer" />
                        </div>
                    )
                }
                <div className='border-[1px] inline-block rounded-xl border-primary'>
                    <button onClick={() => setActive(true)} className="btn m-1 bg-primary border-none hover:bg-primary">Add More Player</button>
                </div>
            </div>
        </div>
    );
};
Selected.propTypes = {
    datas: PropTypes.array,
    setActive: PropTypes.func,
    setChoseData: PropTypes.func
}


export default Selected;