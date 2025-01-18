"use client";
import Loading from "@/app/(auth)/loading";
import { useGetUnverifiedSetMembersQuery } from "../../../../../Redux/services/NosaSetApiSlice";

const PendingRequest = ({ nosaSet }) => {
  const { data, isLoading } = useGetUnverifiedSetMembersQuery(nosaSet);
  console.log(data);
  if (isLoading) <Loading />;
  return (
    <div className="bg-gray-200 p-5 shadow rounded mt-10 overflow-x-auto">
      <div className="font-bold text-xl ">Pending Set Requests</div>
      <div className="my-5">
        {data?.data?.length < 1 ? (
          <div>No Pending request yet</div>
        ) : (
          data?.data?.slice(0, 3).map((user, i) => {
            return (
              <div key={i} className="pending-grid py-2 border-b-[1px] border-gray-300">
                <div className="pl-5">{i + 1}</div>
                <div className="text-base lg:text-xl truncate max-w-xs">{user?.fullName}</div>
                <div className="text-base lg:text-xl truncate max-w-xs">{user?.email}</div>
                <div className="text-base lg:text-xl truncate max-w-xs">
                  {user?.phone || "No Phone"}
                </div>
                <div className="flex gap-6">
                  <button className="py-2 md:py-3 px-3 md:px-6 shadow rounded bg-red-800 text-white">
                    Decline
                  </button>
                  <button className="py-2 md:py-3 px-3 md:px-6 shadow rounded bg-primary-500 text-white">
                    Accept
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default PendingRequest;
