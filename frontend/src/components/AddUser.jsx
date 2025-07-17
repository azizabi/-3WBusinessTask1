import { useContext, useState } from "react";
import { SelectedUserContext } from "../context/SelectedUserContext";
import { PlusCircle, X } from "lucide-react";
import API from "../services/api";

const AddUser = () => {
  const { fetchUsers } = useContext(SelectedUserContext);
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState("");
  const [recentUsers, setRecentUsers] = useState([]);

  const addUser = async () => {
    const trimmed = newUser.trim();
    if (!trimmed) return;

    await API.post("/users", { name: trimmed });
    setRecentUsers([trimmed, ...recentUsers.slice(0, 4)]);
    setNewUser("");
    fetchUsers();
    setShowModal(false);
  };

  return (
    <>
      {/* Floating Add Button */}
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-2 px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-xl shadow-lg transition-all"
      >
        <PlusCircle size={22} />
        <span className="hidden sm:inline">Add Member</span>
      </button>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center h-[90vh] bg-black/60 backdrop-blur-sm rounded-xl">
          {/* Modal Card */}
          <div className="bg-gradient-to-br from-[#2d2d2d] to-[#1c1c1c] w-[90%] max-w-md rounded-2xl border border-white/10 p-6 text-white relative shadow-xl">
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold text-center mb-6">Add New Member</h2>

            {/* Recent Users */}
            {recentUsers.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {recentUsers.map((user, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-700 text-white rounded-full text-sm shadow hover:bg-purple-600 transition"
                  >
                    {user}
                  </span>
                ))}
              </div>
            )}

            {/* Input + Button */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter name"
                value={newUser}
                onChange={(e) => setNewUser(e.target.value)}
                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={addUser}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddUser;
