import { useStateContext } from "../../HBOProvider";

const Login = () => {
  const globalState = useStateContext();

  return (
    <div className="login-user">
      <div className="login-user__top">
        <div className="login-user__logo" />
        <span className="login-user__title">Who is watching?</span>
      </div>
      <div className="login-user__form">
        <div className="login-user__user-box">
          <img
            className="login-user__user-img"
            alt="user"
            src="https://images.generated.photos/B7CJLWXHEhr73EmhhiWyTK-WT39VwobNNqwknL-vwUg/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/NzY1NDcuanBn.jpg"
          />
          <div className="login-user__user-name">{globalState.test}</div>
        </div>
      </div>
      <div className="login-user__buttons">
        <button className="login-user__adult">Add Adult</button>
        <button className="login-user__kid">Add Kid</button>
      </div>
    </div>
  );
};

export default Login;
