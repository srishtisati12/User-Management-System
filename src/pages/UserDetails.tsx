import { useNavigate, useParams } from "react-router-dom";
import UserCard from "../components/UserCard";
import type { User } from "../types/User";

type UserDetailsProps = {
  users: User[];
};

function UserDetails({ users }: UserDetailsProps) {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.find(
    (item) => item.id === Number(id)
  );

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div>
      <h1>User Details</h1>

      <UserCard user={user} />

      <button onClick={() => navigate("/users")}>  Back </button>
    </div>
  );
}
export default UserDetails;