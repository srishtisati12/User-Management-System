import type { User } from "../types/User";

type UserCardProps = {
  user: User;
};

function UserCard({ user }: UserCardProps) {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}
export default UserCard;