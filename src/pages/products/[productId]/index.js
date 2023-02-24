import { useRouter } from 'next/router';

const productId = () => {
    const router = useRouter()
    const productId = router.query.productId;

    return (
        <div>
            <h1 className='text-3xl font-mono text-red-400'>Product Details Page Here. {productId}</h1>
        </div>
    );
};

export default productId;