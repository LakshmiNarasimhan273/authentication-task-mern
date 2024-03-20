import { useContext } from "react";
import { UserContext } from "../../context/userContext";

function Dashboard() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>User Dashboard</h1>
      {!!user && <h2>Hello {user?.name}</h2>}
      <button>Logout</button>
    </div>
  );
}

export default Dashboard;
