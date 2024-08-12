import { usePost } from "./usePost";

const CustomHook = () => {
  const { posts, isLoading, error, refetch } = usePost();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        {`Error: ${error}`}
        <div>
          <button onClick={refetch}>Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {posts?.map((post) => (
        <div key={post.id} style={{ marginBottom: "40px" }}>
          {`Title: ${post.title}`} <br />
          {`Body: ${post.body}`} <br />
        </div>
      ))}
    </div>
  );
};

export default CustomHook;
