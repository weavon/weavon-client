import React, { useState } from "react";

import { Avatar, Box, Menu, MenuItem, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

import palette from "@/assets/colors/palette";

const Header = () => {
  const nav = useNavigate();

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
    nav("/logout");
  };

  return (
    <HeaderWrapper>
      <HomeIcon src="/src/assets/images/weavon.png" onClick={handleHomeClick} />
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

const HomeIcon = styled("img")`
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
