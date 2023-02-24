import { useRouter } from 'next/router';


const review = () => {
    const router = useRouter();
    const {review, productId} = router.query;
    console.log(router)
    return (
        <div>
            <h1 className="text-3xl text-red-400">This is {review} for {productId}</h1>
        </div>
    );
};

export default review;