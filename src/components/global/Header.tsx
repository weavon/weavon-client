import React, { useState } from "react";

import { Avatar, Box, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import palette from "@/assets/colors/palette";
import useAuthStore from "@/stores/useAuthStore";

const Header = () => {
  const { logout } = useAuthStore();

  const [menuAnchor, setMenuAnchor] = useState<HTMLElement>();

  const nav = useNavigate();

  const menuOpen = !!menuAnchor;

  const handleProfileClick = (e: React.MouseEvent<HTMLElement>) => {
    setMenuAnchor(e.currentTarget);
  };

  const handleHomeClick = () => {
    nav("/");
  };

  const handleMenuClose = () => {
    setMenuAnchor(undefined);
  };

  const handleLogout = () => {
    logout();
    nav("/login");
  };

  return (
    <HeaderWrapper>
      <HomeI src="/src/assets/images/weavon.png" onClick={handleHomeClick} />
      <Profile onClick={handleProfileClick} />
      <Menu open={menuOpen} anchorEl={menuAnchor} onClose={handleMenuClose}>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled(Box)`
  width: 100%;
  height: 50px;

  padding: 10px 150px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${palette.primary.main};
`;

const HomeI = styled.img`
  width: 30px;
  height: 30px;

  border-radius: 50%;
  background: ${palette.primary.main};
  box-shadow:
    3px 3px 6px #302283,
    -3px -3px 6px #5038db;

  cursor: pointer;
`;

const Profile = styled(Avatar)`
  width: 30px !important;
  height: 30px !important;
`;

export default Header;
