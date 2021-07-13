import { useState, useEffect } from "react";
import { useStateContext } from "../../HBOProvider";
import { useRouter } from "next/router";
import ls from "local-storage";
import { useMounted } from "../../Hooks/useMounted";

const Login = () => {
  const globalState = useStateContext();
  const router = useRouter();
  const [loadingUsers, setLoadingUsers] = useState(false);
  let users = ls("users") !== null ? ls("users") : [];
  const { hasMounted } = useMounted();

  useEffect(() => {
    if (users < 1) {
      setLoadingUsers(false);
    }
    console.log("load effect", users);
  }, []);

  console.log("declared users", users);

  const selectUser = (id) => {
    console.log(id);
    ls("activeUID", id);
    router.push("/");
  };

  const showUsers = () => {
    if (!loadingUsers) {
      return users.map((user) => {
        return (
          <div
            onClick={() => selectUser(user.id)}
            className="login-user__user-box"
            key={user.id}
          >
            <img
              className="login-user__user-img"
              alt="user"
              src="https://images.generated.photos/B7CJLWXHEhr73EmhhiWyTK-WT39VwobNNqwknL-vwUg/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/NzY1NDcuanBn.jpg"
            />
            <div className="login-user__user-name">{user.user}</div>
          </div>
        );
      });
    }
  };

  const createUser = () => {
    router.push("/");
  };

  return (
    <div className="login-user">
      <div className="login-user__top">
        <div className="login-user__logo" />
        <span className="login-user__title">Who is watching?</span>
      </div>
      <div className="login-user__form">{hasMounted ? showUsers() : ""}</div>
      <div className="login-user__buttons">
        <button className="login-user__kid" onClick={createUser}>
          Create User
        </button>
      </div>
    </div>
  );
};

export default Login;
