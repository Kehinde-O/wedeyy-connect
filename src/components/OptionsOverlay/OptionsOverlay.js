import React from "react";
import { Link } from "react-router-dom";
import styles from "./OptionsOverlay.module.css";
import crossIcon from "../../images/cross.svg";

const Options = props => {
  return (
    <div className={styles.OptionsOverlay} onClick={props.click}>
      <div className={styles.content} onClick={props.stopPropagation}>
        <div className={styles.header}>
          <img src={crossIcon} alt="close" onClick={props.click} />
          <h3>{props.heading}</h3>
        </div>
        <div className={styles.options}>
          {props.options.map((option, index) => {
            if (option.name === "View Shared Items") {
              return (
                <Link to="/shared-items" key={option.name + index}>
                  <div className={styles.option}>
                    <div>
                      <img src={option.icon} alt="" />
                    </div>
                    <p>{option.name}</p>
                  </div>
                </Link>
              )
            } else if (option.name.startsWith("Share")) {
              return (
                <div className={styles.option} key={option.name + index} onClick={props.openShareOverlay}>
                  <div>
                    <img src={option.icon} alt="" />
                  </div>
                  <p>{option.name}</p>
                </div>
              )
            } else {
              return (
                <div className={styles.option} key={option.name + index}>
                  <div>
                    <img src={option.icon} alt="" />
                  </div>
                  <p>{option.name}</p>
                </div>
              )
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Options;
