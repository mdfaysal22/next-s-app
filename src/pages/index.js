export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
      
      <div className="grid grid-cols-3 gap-5 m-10">
      {posts.map((post) => {
        return (
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{post.title.slice(0,20)}</h2>
              <p>{post.body.slice(0, 100)}</p>
              <div className="card-actions justify-start">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
}
