import Header from "../UI/Header/Header";
import SideNav from "../UI/SideNav/SideNav";

const MainLayout = (props) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(121deg, rgba(2,0,36,1) 9%, rgba(0,0,0,1) 550%, rgba(0,212,255,1) 100%)",
        minHeight: "100vh",
        backgroundAttachment: "fixed",
      }}
    >
      <Header />
      <SideNav />
      <section className="content-container">{props.children}</section>
    </div>
  );
};

export default MainLayout;
