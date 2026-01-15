"use client";
import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
};
export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUsers = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();
      setUsers(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

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
