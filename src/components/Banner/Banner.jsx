import { Typography } from '@material-tailwind/react';
import { Input, Button } from '@material-tailwind/react';
const Banner = ({ setValue, handleSearch, value }) => {
    const clearInput = () => {
        setValue('');
    };
    return (
        <div className='min-h-[450px] relative flex flex-col justify-center items-center'>
            <div className="absolute inset-0 bg-[url('/images/bg.png')] opacity-10 bg-no-repeat bg-cover bg-center"></div>
            <Typography variant='h2'>
                I Grow By Helping People In Need
            </Typography>
            <div className='relative flex w-full max-w-[24rem] mt-4'>
                <Input
                    type='text'
                    label='Category'
                    value={value}
                    className='pr-20'
                    onChange={(e) => setValue(e.target.value)}
                    containerProps={{
                        className: 'min-w-0',
                    }}
                />
                <Button
                    size='sm'
                    color={'red'}
                    onClick={() => {
                        handleSearch();
                        clearInput();
                    }}
                    className='!absolute right-1 top-1 rounded'
                >
                    Search
                </Button>
            </div>
        </div>
    );
};

export default Banner;
