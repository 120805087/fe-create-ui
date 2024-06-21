import React from "react";
import createStyles from "../createStyles";

const useStyles = createStyles(() => ({
  calendar: {
    backgroundColor: "rebeccapurple",
    height: "100%",
    width: "100%",
  },
  text: {
    color: "white",
  },
}));

function Calendar() {
  const { styles } = useStyles();

  return (
    <div className={styles.calendar}>
      <p className={styles.text}>Calendar</p>
    </div>
  );
}

export default Calendar;
