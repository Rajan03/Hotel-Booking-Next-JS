import React, { useState } from "react";
import Link from "next/link";
import {
  SidebarBottom,
  SidebarContainer,
  SidebarList,
  SidebarListItem,
} from "./StyleComponents";

const navLinks = [
  { name: "home", link: "/", icon: "", active: true },
  { name: "rooms", link: "/rooms", icon: "", active: false },
  { name: "services", link: "/", icon: "", active: false },
  { name: "contact", link: "/", icon: "", active: false },
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
            <Link href={link.link} passHref>
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
