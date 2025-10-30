import type { User } from "./UserList";

interface UserProps {
  user: User;
}

function UserProfileCard({ user }: UserProps) {
  return (
    <div style={{ border: "2px solid black", margin: "5px" }}>
      <h4>{user.name}</h4>
      <p>{user.email}</p>
    </div>
  );
}

export default UserProfileCard;
