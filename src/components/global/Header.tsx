import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Avatar, Box, Menu, MenuItem, Typography } from "@mui/material";

import styled from "styled-components";

import palette from "@assets/colors/palette";

import useAuthStore from "@stores/useAuthStore";

const Header = () => {
  const nav = useNavigate();

  const { logout } = useAuthStore();

  const [menuAnchor, setMenuAnchor] = useState<HTMLElement>();

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
  };

  return (
    <HeaderWrapper>
      <Home variant="h5" onClick={handleHomeClick}>
        Weavon
      </Home>
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

  padding: 10px 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${palette.primary.main};
`;

const Home = styled(Typography)`
  font-weight: bolder;
  color: white;
  cursor: pointer;
`;

const Profile = styled(Avatar)`
  width: 30px !important;
  height: 30px !important;
`;

export default Header;
