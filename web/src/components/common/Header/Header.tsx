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
  useMediaQuery
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

import { logo } from "../../../assets/index";
import Avatar from "../TextElem/Avatar";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { getSelectedData } from "../../../store/components/library/library";
import { setToggleStatus } from "../../../store/components/uiInteraction/uiInteraction";

import "./header.scss";

// import { useNavigate } from "react-router-dom";

const Header = (props) => {
  // const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const selectedSite = useAppSelector(getSelectedData("site"));
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Navbar title="" className="header">
        <NavLeft>
          <Button
            round={false}
            // panelOpen="#panel-nested"
            style={{ padding: "0px", overflow: "visible" }}
            onClick={() => {
              dispatch(setToggleStatus({ key: "leftNav", status: true }));
            }}
          >
            <img src={logo} style={{ width: "41px" }} />
          </Button>
        </NavLeft>
        <NavTitle>
          {selectedSite && (
            <Stack
              spacing={isMobile ? 1 : 2}
              direction="row"
              alignItems="center"
              sx={{ 
                padding: "0px 5px",
                minWidth: 0, // Allow text to shrink
                flex: 1
              }}
            >
              <Box sx={{ minWidth: 0, flex: 1 }}>
                <Typography 
                  noWrap 
                  variant={isMobile ? "body2" : "body1"}
                  sx={{ 
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    fontSize: isMobile ? "0.875rem" : "1rem"
                  }}
                >
                  {selectedSite.name}
                </Typography>
                <Typography 
                  noWrap 
                  variant="caption"
                  sx={{ 
                    color: theme.palette.text.secondary,
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5
                  }}
                >
                  <LocationOnIcon sx={{ fontSize: "0.875rem" }} />
                  {selectedSite.variant}
                </Typography>
              </Box>
              <IconButton
                size="small"
                onClick={() => {
                  dispatch(setToggleStatus({ key: "site", status: true }));
                }}
                sx={{
                  color: theme.palette.primary.main,
                  '&:hover': {
                    backgroundColor: theme.palette.primary.light + '20'
                  }
                }}
              >
                <ModeEditIcon sx={{ fontSize: "1.25rem" }} />
              </IconButton>
            </Stack>
          )}
        </NavTitle>
        <NavRight>
          <Stack direction="row" spacing={1} alignItems="center">
            {!isMobile && (
              <>
                <IconButton
                  size="small"
                  sx={{
                    color: theme.palette.text.secondary,
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover
                    }
                  }}
                >
                  <SearchIcon />
                </IconButton>
                <IconButton
                  size="small"
                  sx={{
                    color: theme.palette.text.secondary,
                    '&:hover': {
                      backgroundColor: theme.palette.action.hover
                    }
                  }}
                >
                  <Badge badgeContent={3} color="primary">
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
              </>
            )}
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
        </NavRight>
        {/* <div slot="before-inner">Before Inner</div>
        <div slot="after-inner">After Inner</div>
        <div>Default slot</div> */}
      </Navbar>
    </>
  );
};

export default Header;
