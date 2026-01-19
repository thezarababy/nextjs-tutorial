type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
type Album = {
  userId: number;
  id: number;
  title: string;
};

async function fetchPostsByUser(userId: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
  );
  return res.json();
}
async function fetchAlbumsByUser(userId: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/albums?userId=${userId}`,
  );
  return res.json();
}

const UserProfile = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const postsData = fetchPostsByUser(Number(id));
  const albumsData = fetchAlbumsByUser(Number(id));
  const [posts, albums] = await Promise.all([postsData, albumsData]);

  return <div></div>;
};

export default UserProfile;
