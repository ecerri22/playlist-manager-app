import { AiOutlineUser } from 'react-icons/ai';
import { useContext, useEffect, useState } from "react";
import { TokenContext } from "../context/TokenProvider";
import { getInfoAbtMe } from "../api";

function User() {
  const { token } = useContext(TokenContext);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    getInfoAbtMe(token)
      .then(response => {
        setUserInfo(response);
      })
      .catch(error => {
        console.error(error);
      });
  }, [token]);

  return (
    <div>
      <div className="flex flex-row items-center px-1 bg-gray-600 rounded py-1 px-2 dark:bg-neutral-800">
        <div className="w-6">
          {userInfo?.images?.length !== 0 ? (
            <img
              src={userInfo?.images[0]?.url}
              alt="user-pfp"
              className="aspect-square"
            />
          ) : (
            <button className="text-sm text-white hover:text-gray-200">
              <AiOutlineUser />
            </button>
          )}
        </div>

        <div className="pl-2 text-white text-sm p-2">
          <p>{userInfo?.display_name}</p>
        </div>
      </div>
    </div>
  );
}

export default User;