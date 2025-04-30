import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) router.push('/login');
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <p>This is a protected page for logged-in users only.</p>
    </div>
  );
}
