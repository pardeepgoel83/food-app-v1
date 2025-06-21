import {
  Popup,
  View,
  NavRight,
  Block,
  Link,
  Page,
  Navbar,
} from "framework7-react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Typography,
  Button,
  Stack,
  Divider,
  IconButton,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";

import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { getLoginStatus } from "../../store/components/users/users";
import {
  setToggleStatus,
  getToggleStatus,
} from "../../store/components/uiInteraction/uiInteraction";

export default () => {
  const isLoggedIn = useAppSelector(getLoginStatus);
  const toggleStatus = useAppSelector(getToggleStatus);
  const dispatch = useAppDispatch();

  return (
    <Popup
      id="my-popup"
      className="popup-from-left"
      opened={toggleStatus("profilePage")}
    >
      <View>
        <Page>
          <Box
            sx={{
              backgroundColor: "background.paper",
              minHeight: "100vh",
              padding: 0,
            }}
          >
            {/* Header */}
            <Box
              sx={{
                backgroundColor: "primary.main",
                color: "primary.contrastText",
                padding: 3,
                textAlign: "center",
                borderRadius: "0 0 16px 16px",
                position: "relative",
              }}
            >
              <IconButton
                sx={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  color: "primary.contrastText",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
                onClick={() => {
                  if (isLoggedIn)
                    dispatch(
                      setToggleStatus({ key: "profilePage", status: false })
                    );
                  else
                    dispatch(
                      setToggleStatus({ key: "loginForm", status: false })
                    );
                }}
              >
                <CloseIcon />
              </IconButton>
              
              <Avatar
                sx={{
                  width: 80,
                  height: 80,
                  margin: "0 auto 16px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  border: "3px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                <PersonIcon sx={{ fontSize: 40 }} />
              </Avatar>
              <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1 }}>
                John Doe
              </Typography>
              <Chip
                label="Premium Member"
                size="small"
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  color: "primary.contrastText",
                  fontWeight: 500,
                }}
              />
            </Box>

            {/* Profile Content */}
            <Box sx={{ padding: 3 }}>
              <Paper
                elevation={0}
                sx={{
                  padding: 3,
                  backgroundColor: "background.default",
                  borderRadius: 2,
                  marginBottom: 3,
                }}
              >
                <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 600 }}>
                  Personal Information
                </Typography>
                
                <List sx={{ padding: 0 }}>
                  <ListItem sx={{ padding: "12px 0" }}>
                    <ListItemIcon>
                      <EmailIcon sx={{ color: "primary.main" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Email"
                      secondary="john.doe@example.com"
                      primaryTypographyProps={{ fontWeight: 500 }}
                    />
                  </ListItem>
                  
                  <Divider />
                  
                  <ListItem sx={{ padding: "12px 0" }}>
                    <ListItemIcon>
                      <PhoneIcon sx={{ color: "primary.main" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Phone"
                      secondary="+1 (555) 123-4567"
                      primaryTypographyProps={{ fontWeight: 500 }}
                    />
                  </ListItem>
                  
                  <Divider />
                  
                  <ListItem sx={{ padding: "12px 0" }}>
                    <ListItemIcon>
                      <LocationOnIcon sx={{ color: "primary.main" }} />
                    </ListItemIcon>
                    <ListItemText
                      primary="Location"
                      secondary="New York, NY"
                      primaryTypographyProps={{ fontWeight: 500 }}
                    />
                  </ListItem>
                </List>
              </Paper>

              {/* Action Buttons */}
              <Stack spacing={2}>
                <Button
                  variant="outlined"
                  fullWidth
                  startIcon={<EditIcon />}
                  sx={{
                    borderRadius: 2,
                    padding: "12px 24px",
                    borderColor: "primary.main",
                    color: "primary.main",
                    "&:hover": {
                      backgroundColor: "rgba(255, 107, 53, 0.08)",
                      borderColor: "primary.dark",
                    },
                  }}
                >
                  Edit Profile
                </Button>
                
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<LogoutIcon />}
                  sx={{
                    borderRadius: 2,
                    padding: "12px 24px",
                    backgroundColor: "error.main",
                    "&:hover": {
                      backgroundColor: "error.dark",
                    },
                  }}
                >
                  Sign Out
                </Button>
              </Stack>
            </Box>
          </Box>
        </Page>
      </View>
    </Popup>
  );
};
