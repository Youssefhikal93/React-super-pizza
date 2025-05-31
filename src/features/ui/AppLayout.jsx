import Header from "./Header";
import CartOverview from "../cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto my-10 w-screen max-w-3xl">
          {/* {isLoading ? <Loader /> : <Outlet />}*/}
          {isLoading && <Loader />}
          <Outlet />
        </main>
      </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
