import {
  Popup,
  View,
  Icon,
  Button,
  Navbar,
  NavTitle,
  NavLeft,
  NavRight,
} from "framework7-react";
import {
  Stack,
  Typography,
  Link,
  Box,
  Badge,
  IconButton,
  useTheme,
  useMediaQuery,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Divider,
  InputBase,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { logo as oldLogo } from "../../../assets/index";
import newLogo from "../../../assets/food-app-logo.svg";
import Avatar from "../TextElem/Avatar";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getSelectedData } from "../../../store/components/library/library";
import { setToggleStatus } from "../../../store/components/uiInteraction/uiInteraction";

import "./header.scss";
import { useState } from "react";

// import { useNavigate } from "react-router-dom";

const Header = (props) => {
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selectedSite = useAppSelector(getSelectedData("site"));
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null);

  const handleMobileMenuOpen = (event) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const handleProfileClick = () => {
    handleMobileMenuClose();
    props.onUserIconClick();
  };

  return (
    <>
      <div className="header">
        {/* Left Section */}
        <div className="header-left">
          <Button
            round={false}
            style={{ padding: "0px", overflow: "visible" }}
            onClick={() => {
              dispatch(setToggleStatus({ key: "leftNav", status: true }));
            }}
          >
            <img src={newLogo} style={{ width: "41px" }} alt="Logo" />
          </Button>
        </div>

        {/* Title Section */}
        <div className="header-title">
          {isMobile ? (
            // Mobile View
            <>
              <Box
                className="location-section"
                onClick={() =>
                  dispatch(setToggleStatus({ key: "site", status: true }))
                }
              >
                <LocationOnIcon
                  sx={{ color: "primary.main", fontSize: "1.25rem" }}
                />
                <Typography noWrap className="location-text">
                  {selectedSite ? selectedSite.name : "Select Location"}
                </Typography>
                <ArrowDropDownIcon />
              </Box>
            </>
          ) : (
            // Desktop View
            <Box className="header-search-container">
              <Box
                className="location-section"
                onClick={() =>
                  dispatch(setToggleStatus({ key: "site", status: true }))
                }
              >
                <LocationOnIcon sx={{ color: "primary.main" }} />
                <Typography noWrap className="location-text">
                  {selectedSite
                    ? `${selectedSite.name}, ${selectedSite.variant}`
                    : "Select Location"}
                </Typography>
                <ArrowDropDownIcon />
              </Box>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ mx: 1, height: "28px", alignSelf: "center" }}
              />
              <Box className="search-section">
                <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
                <InputBase
                  placeholder="Search for restaurant, cuisine or a dish"
                  fullWidth
                  className="search-input"
                />
              </Box>
            </Box>
          )}
        </div>

        {/* Right Section */}
        <div className="header-right">
          {!isMobile ? (
            // Desktop Right Section
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton
                size="small"
                sx={{
                  color: theme.palette.text.secondary,
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <Badge badgeContent={3} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <Button
                round={false}
                style={{ padding: "0px", overflow: "visible" }}
                onClick={(e) => {
                  e.preventDefault();
                  props.onUserIconClick();
                }}
              >
                <Avatar name="Pardeep Kumar" />
              </Button>
            </Stack>
          ) : (
            // Mobile Right Section
            <Stack direction="row-reverse" spacing={1} alignItems="center">
              <IconButton
                size="small"
                onClick={handleMobileMenuOpen}
                sx={{
                  color: theme.palette.text.secondary,
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <MoreVertIcon />
              </IconButton>
              <Button
                round={false}
                style={{ padding: "0px", overflow: "visible" }}
                onClick={(e) => {
                  e.preventDefault();
                  props.onUserIconClick();
                }}
              >
                <Avatar name="Pardeep Kumar" />
              </Button>
            </Stack>
          )}
        </div>
      </div>

      {
        isMobile && (
          <div className="header">
            {/* Left Section */}
            {/* <div className="header-left">
              <Button
                round={false}
                style={{ padding: "0px", overflow: "visible" }}
                onClick={() => {
                  dispatch(setToggleStatus({ key: "leftNav", status: true }));
                }}
              >
                <img src={newLogo} style={{ width: "41px" }} alt="Logo" />
              </Button>
            </div> */}

            {/* Title Section */}
            <div className="header-title" style={{ gridColumn: "1/2" }}>
              <Box className="search-section">
                <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
                <InputBase
                  placeholder="Search for restaurant, cuisine or a dish"
                  fullWidth
                  className="search-input"
                />
              </Box>
            </div>

            {/* Right Section */}
            <div className="header-right">
              <Stack direction="row" spacing={1} alignItems="center">
                <IconButton
                  size="small"
                  sx={{
                    color: theme.palette.text.secondary,
                    "&:hover": {
                      backgroundColor: theme.palette.action.hover,
                    },
                  }}
                >
                  <Badge badgeContent={3} color="primary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </Stack>
            </div>
          </div>)
      }
      {/* Mobile Menu */}
      <Menu
        anchorEl={mobileMenuAnchor}
        open={Boolean(mobileMenuAnchor)}
        onClose={handleMobileMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 200,
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
          },
        }}
      >
        <MenuItem onClick={handleMobileMenuClose}>
          <ListItemIcon>
            <Badge badgeContent={3} color="primary">
              <ShoppingCartIcon fontSize="small" />
            </Badge>
          </ListItemIcon>
          <ListItemText>Cart (3)</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleProfileClick}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleMobileMenuClose}>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleMobileMenuClose}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Logout</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Header;
