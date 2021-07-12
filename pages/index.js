import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import { useStateContext } from "../components/HBOProvider";
import Login from "../components/UI/Login/Login";

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter();
  useEffect(() => {
    const loggedIn = false;
    if (loggedIn === false) {
      router.push("/create");
    }
  }, [router]);
  return (
    <div>
      <Login />
    </div>
  );
}
