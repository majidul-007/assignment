import { useEffect, useState } from "react";
import Available from "./Available";
import Selected from "./Selected";
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Bottom = ({ coin, setCoin }) => {
    const [datas, setDatas] = useState([])
    const [active, setActive] = useState(true)
    const [choseData, setChoseData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])


    const handelChoseData = (data) => {
        const exists = choseData.some(item => item.id === data.id);
        if (exists) {
            toast.error(`${data.name} is Already Added`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
        }
        else if(!exists && choseData.length <=5) {
            const currentBalance=coin-data.price
            
            console.log(currentBalance)
            if(currentBalance >=0){
                toast.success(`${data.name} is Added`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    
                });
                const temp = [...choseData, data]
                setChoseData(temp)
                setCoin(currentBalance)
            }else{
                toast.error(`You dont have Money`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
    
                });
            }
            
        }
        else if(choseData.length >5){
            toast.error(`You can only Add 6 player`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            });
        }


    }


    return (
        <div className='min-h-screen pt-[5vw]' >
            <div className='flex justify-end items-center'>
                
                <div className='flex'>
                    <button onClick={() => setActive(true)} className='btn rounded-br-none focus:bg-primary rounded-tr-none bg-white font-normal '>Available</button>
                    <button onClick={() => setActive(false)} className='btn rounded-bl-none focus:bg-primary rounded-tl-none bg-white font-normal'>Selected <span className="font-bold">({choseData.length})</span></button>
                </div>
            </div>
            <div>
                {
                    active ? <Available datas={datas} handelChoseData={handelChoseData}></Available> : <Selected setActive={setActive} setChoseData={setChoseData} datas={choseData}></Selected>
                }



            </div>
            <ToastContainer />
        </div>
    );
};
Bottom.propTypes = {
    coin: PropTypes.string,
    setCoin: PropTypes.func
}

export default Bottom;