import React, { useState } from "react";
import Chat from "../componants/Chat";
import Sidebar from "../componants/Sidebar";
import Welcome from "./welcome";

const Home = () => {
  
  const [showWelcome, setShowWelcome] = useState(false);

  const handleChatSelect = (status) => {
    setShowWelcome(status);
    console.log(status)
  };

    return (
      <div className='home'>
        <div className="container">
          <Sidebar showMenu={handleChatSelect} />
          {!showWelcome ? <Welcome />: <Chat/>}
          {/* {showWelcome && <Chat/>} */}
        </div>
      </div>
    )
  }
  
  export default Home