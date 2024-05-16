"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import AdminPages from "../page";

export default function UserList() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token not found");
        }
        const response = await axios.get("http://localhost:8000/admin/users", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (id: number) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Token not found");
      }
      await axios.delete(`http://localhost:8000/admin/removeUsers/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.contact.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <AdminPages />
      <main className="flex min-h-screen flex-col justify-between p-24 container mx-auto px-1 lg:px-20 md:px-10">
        <div>
          <h1 className="text-3xl font-bold mb-8">User List</h1>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border border-gray-300 px-4 py-2 rounded-md mb-4"
          />
          {loading ? (
            <p className="text-lg">Loading...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                {/* Table headers */}
                <tbody>
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="bg-white">
                      {/* Table data */}
                      <td className="border border-gray-300 px-4 py-2">
                        {user.id}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {user.name}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {user.username}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {user.companyName}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {user.contact}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {/* Delete button */}
                        <button
                          className=""
                          onClick={() => deleteUser(user.id)}
                        >
                          Delete
                        </button>
                        <br />
                        <Link
                          href={{
                            pathname: "/adminPages/user/edit",
                            query: {
                              id: user.id,
                              name: user.name,
                              company: user.companyName,
                              contact: user.contact
                            },
                          }}
                        >
                          Edit
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
