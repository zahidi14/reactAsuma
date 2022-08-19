import Nav from "../navbar/Nav";
import Sidebar from "../sidebar/sidebar";
import "./home.scss";

const Home = () =>{
    return(
        <div className="home">
            <Sidebar />
            <div className="container">
                <Nav />
            </div>
        </div>
    );
};

export default Home;