import {
  useGetAllSetsQuery,
  useGetVerifiedSetMembersQuery,
} from "../../../Redux/services/NosaSetApiSlice";
import { useEffect, useState } from "react";
import { useMakeSetAdminMutation } from "../../../Redux/services/SetAminApiSlice";

const AddAdmin = () => {
  const [setId, setSetId] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [message, setMessage] = useState({ text: "", type: "" });

  const { data } = useGetAllSetsQuery();
  const [makeSetAdmin, { isLoading }] = useMakeSetAdminMutation();

  const handleMakeAdmin = async () => {
    if (!selectedUser || !setId) {
      setMessage({ text: "Please select a NOSA set and a user.", type: "error" });
      return;
    }

    try {
      const response = await makeSetAdmin({ userId: selectedUser._id, setId }).unwrap();
      setMessage({ text: response.message, type: "success" });
    } catch (error) {
      console.error("Error making set admin:", error);
      setMessage({ text: error.data?.message || "Failed to set admin", type: "error" });
    }
  };

  return (
    <div className="bg-gray-200 rounded-md shadow my-10 px-5 py-10">
      {/* Notification Message */}
      {message.text && (
        <div
          className={`p-4 mb-5 rounded ${
            message.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}>
          {message.text}
        </div>
      )}

      <div className="relative my-5">
        <select
          onChange={(e) => setSetId(e.target.value)}
          className="bg-primary-500 text-white appearance-none cursor-pointer py-2 md:py-4 px-5 md:px-7 border-[1px] border-gray-400 outline-none rounded">
          <option value="" disabled>
            Select a NOSA Set
          </option>
          {data?.sets?.map((date) => (
            <option key={date._id} value={date._id}>
              NOSA Set {date.name}
            </option>
          ))}
        </select>
      </div>

      {setId && <Form setId={setId} setSelectedUser={setSelectedUser} />}

      <div className="flex justify-end my-7">
        <button
          className="bg-primary-500 text-white py-3 px-5 md:px-6 shadow rounded"
          onClick={handleMakeAdmin}
          disabled={isLoading}>
          {isLoading ? "Setting Admin..." : "Make Set Admin"}
        </button>
      </div>
    </div>
  );
};

export default AddAdmin;

export const Form = ({ setId, setSelectedUser }) => {
  const { data } = useGetVerifiedSetMembersQuery(setId);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (user) {
      setEmail(user.email || "");
      setPhone(user.phone || "");
    }
  }, [user]);

  return (
    <div className="flex flex-col md:flex-row items-center gap-5">
      <div className="w-full md:w-1/2">
        <select
          onChange={(e) => {
            const selectedUser = data?.data?.find((u) => u._id === e.target.value);
            setUser(selectedUser);
            setSelectedUser(selectedUser);
          }}
          className="appearance-none cursor-pointer py-4 px-7 border-[1px] border-gray-400 outline-none rounded w-full">
          <option value="" disabled>
            Select Full Name
          </option>
          {data?.data?.map((user) => (
            <option key={user._id} value={user._id}>
              {user.fullName}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-3 w-full md:w-1/2">
        <input
          placeholder="Email"
          type="email"
          value={email}
          readOnly
          className="py-4 px-7 border-[1px] border-gray-400 outline-none rounded w-[70%]"
        />
        <input
          placeholder="Phone"
          value={phone}
          readOnly
          type="text"
          className="py-4 px-7 border-[1px] border-gray-400 outline-none rounded w-[70%]"
        />
      </div>
    </div>
  );
};
