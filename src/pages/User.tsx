import { useNavigate } from "react-router-dom";
import UserTable from "../components/UserTable";
import type { User } from "../types/User";

type UsersProps = {
  users: User[];
  onDelete: (id: number) => void;
};
function Users({ users, onDelete }: UsersProps) {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/users/add")}>Add User </button>
      <UserTable
        users={users}
        onDelete={onDelete} />
    </div>
  );
}
export default Users;