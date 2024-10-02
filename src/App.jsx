import { useEffect, useState } from "react";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import RightSide from "./components/RightSide";
import defaultTweets from "./assets/data/tweets.js";
import user from "./assets/data/user.js";

import { createContext } from "react";

const TwitterContext = createContext();

function App() {
  const [tweets, setTweets] = useState(defaultTweets);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    theme === "light"
      ? (document.body.style.backgroundColor = "white")
      : (document.body.style.backgroundColor = "black");
  }, [theme]);

  return (
    <TwitterContext.Provider
      value={{ tweets, setTweets, setTheme, user, theme }}
    >
      <div className="container">
        <Header />
        <Tweets />
        <RightSide />
      </div>
    </TwitterContext.Provider>
  );
}

export { App, TwitterContext };
