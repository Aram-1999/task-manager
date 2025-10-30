import UserProfileCard from "./UserProfileCard";

export interface User {
    id: number;
    name: string;
    email: string;
}

const users: User[] = [
  {
    "id": 1,
    "email": "john@gmail.com",
    "name": "john doe"
  },
  {
    "id": 2,
    "email": "morrison@gmail.com",
    "name": "david morrison"
  },
  {
    "id": 3,
    "email": "kevin@gmail.com",
    "name": "kevin ryan" 
  },
  {
    "id": 4,
    "email": "don@gmail.com",
    "name": "don romer"
  },
  {
    "id": 5,
    "email": "derek@gmail.com",
    "name": "derek powell"
  }
]

function UserList() {
    return (
        <div>
            <h3>User List</h3>

            {users.map(user => (
                <UserProfileCard key={user.id} user={user} />
            ))}
        </div>
    )
}

export default UserList;