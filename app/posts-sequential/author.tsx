type Author = {
  id: number;
  name: string;
};
export default async function Author({ userId }: { userId: number }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  const author: Author = await response.json();
  return (
    <div>
      <h3>Author Information</h3>
      <p>ID: {author.id}</p>
      <p>Name: {author.name}</p>
    </div>
  );
}
