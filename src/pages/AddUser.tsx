import { useNavigate, useParams } from "react-router-dom";
import UserForm from "../components/UserForm";
import type { User } from "../types/User";

type AddUserProps = {
  users: User[];
  onSave: (user: Omit<User, "id">, id?: number) => void;
};

function AddUser({ users, onSave }: AddUserProps) {
  const navigate = useNavigate();
  const { id } = useParams();

  const user = users.find(
    (item) => item.id === Number(id)
  ) || null;

  const handleSave = (userData: Omit<User, "id">) => {
    onSave(userData, user?.id);
    navigate("/users");
  };

  return (
    <div>
      <h1>{user ? "Edit User" : "Add User"}</h1>
      
      <UserForm
        user={user}
        onSave={handleSave} />

      <button onClick={() => navigate("/users")}> Back </button>
    </div>
  );
}
export default AddUser;