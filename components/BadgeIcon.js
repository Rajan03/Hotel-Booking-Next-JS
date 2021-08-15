import React from "react";
import { BadgeIconStyle } from "./StyleComponents";

function BadgeIcon({ icon, count }) {
  return (
    <BadgeIconStyle>
      {icon}
      <span className="nav__notification">{count}</span>
    </BadgeIconStyle>
  );
}

export default BadgeIcon;
