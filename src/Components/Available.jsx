import PropTypes from 'prop-types';
import Card from './Card';

const Available = ({ datas, handelChoseData }) => {

    return (
        <div>
            <h1 className='text-2xl font-bold pb-5'>Available Players</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    datas.map(data => <Card key={data.id} data={data} handelChoseData={handelChoseData}></Card>)
                }
            </div>
        </div>
    );
};
Available.propTypes = {
    datas: PropTypes.array,
    handelChoseData: PropTypes.func
}

export default Available;