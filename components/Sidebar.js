import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import {
  SidebarBottom,
  SidebarContainer,
  SidebarList,
  SidebarListItem,
} from "./StyleComponents";

const navLinks = [
  { name: "home", link: "", icon: "", active: true },
  { name: "rooms", link: "rooms", icon: "", active: false },
  { name: "services", link: "services", icon: "", active: false },
  { name: "contact", link: "contact", icon: "", active: false },
];

const Sidebar = () => {
  const router = useRouter();
  const newRoute = router.route.split('/')
  return (
    <SidebarContainer>
      <SidebarList>
        {navLinks.map((link, i) => (
          <SidebarListItem key={i} activeLink={newRoute[1] === link.link}>
            <Link href={`/${link.link}`} passHref>
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
