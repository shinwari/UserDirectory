import { Link } from "react-router-dom"

export default function Layout({ children }: any) {
  return (
    <div>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/users" style={{ marginRight: 20 }}>List</Link>
        <Link to="/users/add">Add</Link>
      </nav>

      <div style={{ padding: 20 }}>
        {children}
      </div>
    </div>
  )
}