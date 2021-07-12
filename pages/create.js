import Head from "next/head";
import Image from "next/image";
import { useStateContext } from "../components/HBOProvider";

export default function CreateUser() {
  const globalState = useStateContext();
  console.log("globalState", globalState);

  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo" />
          <span className="create-user__title">Who is watching?</span>
        </div>
        <div className="create-user__form">
          <img
            className="create-user__user-img"
            alt="user"
            src={globalState.defaultUserImg}
          />
          <div className="create-user__input-group">
            <label>Name</label>
            <input
              value={globalState.user}
              onChange={globalState.createUserAction}
              type="text"
              className="create-user__inputText"
            />
            <div className="create-user__colors">
              <div
                className="create-user__color create-user__color--active"
                style={{
                  background: "rgb(2,0,36)",
                  background:
                    "linear-gradient(121deg, rgba(2,0,36,1) 9%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)",
                }}
              />
              <div
                className="create-user__color "
                style={{
                  background: "rgb(2,0,36)",
                  background:
                    "linear-gradient(132deg, rgba(18,173,56,1) 9%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)",
                }}
              />
              <div
                className="create-user__color "
                style={{
                  background: "rgb(2,0,36)",
                  background:
                    "linear-gradient(132deg, rgba(232,14,14,1) 9%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)",
                }}
              />
              <div
                className="create-user__color "
                style={{
                  background: "rgb(2,0,36)",
                  background:
                    "linear-gradient(132deg, rgba(19,183,242,1) 9%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)",
                }}
              />
              <div
                className="create-user__color "
                style={{
                  background: "rgb(2,0,36)",
                  background:
                    "linear-gradient(132deg, rgba(19,242,215,1) 9%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)",
                }}
              />
            </div>
          </div>
        </div>
        <div className="create-user__buttons">
          <button className="create-user__cancel">Cancel</button>
          <button className="create-user__save">Save</button>
        </div>
      </div>
    </div>
  );
}
