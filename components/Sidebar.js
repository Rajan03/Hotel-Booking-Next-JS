import React, { useState } from "react";
import Link from "next/link";
import {
  SidebarBottom,
  SidebarContainer,
  SidebarList,
  SidebarListItem,
} from "./StyleComponents";

const navLinks = [
  { name: "home", icon: "", active: true },
  { name: "rooms", icon: "", active: false },
  { name: "services", icon: "", active: false },
  { name: "contact", icon: "", active: false },
];

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <SidebarContainer>
      <SidebarList>
        {navLinks.map((link, i) => (
          <SidebarListItem
            key={i}
            activeLink={activeLink === i}
            onClick={() => setActiveLink(i)}
          >
            <Link href={link !== "home" ? `/${link.name}` : "/"} passHref>
              <a>{link.name}</a>
            </Link>
          </SidebarListItem>
        ))}
      </SidebarList>
      <SidebarBottom>
        &copy; 2021 by Traveller. All rights reserved.
      </SidebarBottom>
    </SidebarContainer>
  );
};

export default Sidebar;
