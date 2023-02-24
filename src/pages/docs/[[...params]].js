import { useRouter } from "next/router";


const docs = () => {
    const router = useRouter();
    const {params = []} = router.query;
    console.log(params)

    if(params.length == 3) {
        return <h1 className="text-3xl text-red-400 text-center py-10">This is <span className="text-yellow-400">{params.length}</span>  Router in this page. first {params[0]}, second One {params[1]}, and Third One {params.length[2]}</h1>
    }
    if(params.length == 2) {
        return <h1 className="text-3xl text-red-400 text-center py-10">This is <span className="text-yellow-400">{params.length}</span> Router in this page. first {params[0]} and second One {params[1]}</h1>
    }
    return (
        <div>
            <h1 className="text-3xl text-red-400 text-center py-10">This is <span className="text-yellow-400">{params.length}</span> Router in this page. first {params[0]}</h1>
        </div>
    );
};

export default docs;