import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import ErrorMessage from "../components/ErrorMessage";
import { getUsers } from "../api/usersApi";
import type { User } from "../models/user";

export default function ListUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getUsers();
        if (!cancelled) setUsers(data);
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? "Failed to load users");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage message={error} />;

  if (users.length === 0) {
    return <div style={{ padding: 10 }}>No users yet. Click <b>Add</b> to create one.</div>;
  }

  return (
    <div>
      <h2 style={{ marginTop: 0 }}>Users</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={th}>Name</th>
            <th style={th}>Age</th>
            <th style={th}>City</th>
            <th style={th}>State</th>
            <th style={th}>PinCode</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td style={td}>{u.name}</td>
              <td style={td}>{u.age}</td>
              <td style={td}>{u.city}</td>
              <td style={td}>{u.state}</td>
              <td style={td}>{u.pinCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th: React.CSSProperties = {
  textAlign: "left",
  borderBottom: "1px solid #ddd",
  padding: "8px",
};

const td: React.CSSProperties = {
  borderBottom: "1px solid #f0f0f0",
  padding: "8px",
};