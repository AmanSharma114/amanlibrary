import React from "react";
import Search from "../components/Search";
import Cards from "../components/Card";

function Home(){
    return(
        <>
        <div className="home-container"> {/* Add a wrapper div */}
            <Search />
            <Cards />
        </div>
        </>
    );
}
export default Home;