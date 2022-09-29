import { useEffect, useState } from "react";
import { getAllUsers } from "../store/actions/Index";
import BaseCard from "./base-components/BaseCard";
import avatar from "../assets/avatar.png";

const AllUsers = () => {
  let [allUsers, setAllUsers] = useState(null);
  let userToken = localStorage.getItem("token");
  useEffect(() => {
    getAllUsers(userToken)
      .then((res) => {
        // dispatch({ type: "ALL_USERS", payload: res.data });
        setAllUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="w-full">
      <div className="flex justify-center items-center">
        {!allUsers && (
          <BaseCard>
            <div>We have no users at the moment</div>
          </BaseCard>
        )}

        {allUsers && (
          <ul className="flex flex-wrap">
            {allUsers.map((user, index) => {
              return (
                <li
                  className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 mb-12"
                  key={index}
                >
                  <div className="px-3">
                    <div className="bg-white rounded flex flex-col justify-center items-center min-h-[200px]">
                      <div className="w-24 mb-3 h-24 rounded-full bg-[#13113f30] flex justify-center items-center">
                        <img src={avatar} alt="avatar" />
                      </div>
                      <h2>Username: {user.username}</h2>
                      <p>Role: {user.role}</p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllUsers;