import { useEffect, useState } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
};

export default function FetchUser() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch('chatbot-backeb-production.up.railway.app/api/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>

      {users.length > 0 ? (
        users.map(user => (
          <p key={user.id}>{user.name} - {user.email} </p>
        ))
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}