// components/Layout.js
import NavBar from "./Navegacion/Navbar";
import Footers from "./Footers";


const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
     <Footers/>
    
    </div>
  );
};

export default Layout;