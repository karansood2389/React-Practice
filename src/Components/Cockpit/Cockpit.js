import React, { useEffect, useRef, useContext } from "react";
import classesMod from "./Cockpit.module.css";
import AuthContext from "../../context/AuthContext";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const useEffectMsg = "[Cockpit.js] useEffect called";
    // const alertMsg = "Data is saved in cloud!";
    const cleanUpMsg = "[Cockpit.js] useEffect clean up ";

    console.log(useEffectMsg);

    toggleBtnRef.current.click();

    // setTimeout(() => {
    //   alert(alertMsg);
    // }, 1000);

    return () => {
      console.log(cleanUpMsg);
    };
  }, []);

  useEffect(() => {
    const use2ndEffectMsg = "[Cockpit.js] 2nd useEffect called";
    const clean2ndUpMsg = "[Cockpit.js] 2nd useEffect clean up";

    console.log(use2ndEffectMsg);

    return () => {
      console.log(clean2ndUpMsg);
    };
  });

  const classes = [];
  const btnClass = props.showPerson ? classesMod.Red : "";

  if (props.personsLength <= 2 && !classes.includes("red")) {
    classes.push(classesMod.red);
  }

  if (props.personsLength <= 1 && !classes.includes("bold")) {
    classes.push(classesMod.bold);
  }

  return (
    <div className={classesMod.Cockpit}>
      <h1>{props.title}</h1>
      <p className={classes.join(" ")}>Group of HCLietes</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Person
      </button>
      {<button onClick={authContext.login}>Login to Authenticate</button>}
    </div>
  );
};

export default React.memo(Cockpit);
