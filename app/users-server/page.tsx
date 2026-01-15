type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
};
export default async function UsersServer() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>name:{user.name}</strong>
          <p>email: {user.email}</p>
          <p>username: {user.username}</p>
          <p>phone: {user.phone}</p>
        </li>
      ))}
    </ul>
  );
}
