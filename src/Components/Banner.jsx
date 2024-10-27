import bg from '../../public/bg-shadow.png'
import PropTypes from 'prop-types';
const Banner = ({setCoin,coin}) => {
    return (
        <div>
            <div className=" bg-no-repeat bg-cover min-h-[32vw] space-y-8 rounded-3xl  flex items-center justify-center flex-col bg-black text-white"
                style={{
                    backgroundImage: `url(${bg})`,
                }}>
                <img src="/public/banner-main.png" className='' alt="" />
                <h1 className="mb-5 text-5xl font-bold w-full text-center">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="mb-5">
                    Beyond Boundaries Beyond Limits
                </p>
                <div className='border-[1px] inline-block rounded-xl border-primary'>
                    <button onClick={()=>setCoin(coin+100000000)} className="btn m-1 bg-primary border-none hover:bg-primary">Claim Free Credit</button>
                </div>
            </div>
        </div>
    );
};
Banner.propTypes = {
    coin:PropTypes.string,
    setCoin:PropTypes.func
}

export default Banner;