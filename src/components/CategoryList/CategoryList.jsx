import CardDefault from '../Card/CardDefault';
import CustomSpinner from '../CustomSpinner/CustomSpinner';

const CategoryList = ({ filteredData, loading }) => {
    if (loading) {
        return <CustomSpinner />;
    }
    return (
        <div className='grid grid-cols-4 gap-4 max-w-7xl mx-auto px-5 py-10'>
            {filteredData.map((item) => (
                <CardDefault key={item.id} item={item} />
            ))}
        </div>
    );
};

export default CategoryList;
