import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
    const navigation = useNavigation();
    const location = useLocation();
    // console.log(navigation)

    return (
        <div>
            <Header></Header>
            {
                navigation.state === "loading" ? <p style={{font: '30px',color: "red" }}>Loading...</p>: <Outlet></Outlet>  
            }

            <Footer></Footer>
        </div>
    );
};

export default Home;