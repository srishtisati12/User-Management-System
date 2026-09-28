import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Users from "../src/pages/User";
import AddUser from "./pages/AddUser";
import UserDetails from "./pages/UserDetails";
import Dashboard from "./pages/Dashboard";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "./services/userService";

import type { User } from "./types/User";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  const handleSave = async (
    userData: Omit<User, "id">,
    id?: number
  ) => {
    if (id) {
      const updatedUser = {
        id,
        ...userData,
      };

      setUsers(
        users.map((user) =>
          user.id === id ? updatedUser : user
        )
      );

      if (id <= 10) {
        await updateUser(id, userData);
      }
    } else {
      const newUser = await createUser(userData);

      const userWithId = {
        ...newUser,
        id: Date.now(),
      };

      setUsers([...users, userWithId]);
    }
  };

  const handleDelete = async (id: number) => {
    if (id <= 10) {
      await deleteUser(id);
    }

    setUsers(
      users.filter((user) => user.id !== id)
    );
  };

  return (
    <BrowserRouter>
    <Header/>
    <div className="layout">
      <Sidebar/>
      <main>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/users" />}
        />
         <Route
          path="/dashboard"
          element={<Dashboard />} />
        <Route
          path="/users"
          element={
            <Users
              users={users}
              onDelete={handleDelete} />
          }
        />
        <Route
          path="/users/add"
          element={
            <AddUser
              users={users}
              onSave={handleSave}/>
          }
        />
        <Route
          path="/users/edit/:id"
          element={
            <AddUser
              users={users}
              onSave={handleSave} />
          }
        />
        <Route
          path="/users/:id"
          element={
            <UserDetails users={users} />
          } />
      </Routes>
      </main>
      </div>
    </BrowserRouter>
  );
}
export default App;