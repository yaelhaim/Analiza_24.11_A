
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function UserGreeting() {
  const userName = useContext(UserContext);

  return (
    <div>
      <p>Hello, {userName}!</p>
    </div>
  );
}

export default UserGreeting;
