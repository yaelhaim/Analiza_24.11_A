
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function UserName() {
  const userName = useContext(UserContext);

  return (
    <div>
      <p>User Name:{userName}</p>
    </div>
  );
}

export default UserName;
