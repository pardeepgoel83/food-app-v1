import {
  Popup,
  // View,
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
  IconButton,
  Paper,
} from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";

import { useAppDispatch, useAppSelector } from "../../store/hooks";

import {
  setToggleStatus,
  getToggleStatus,
  getDynamicFormData,
} from "../../store/components/uiInteraction/uiInteraction";

import FormRenderer from "../../components/common/FormRenderer/FormRenderer";

export default () => {
  const dispatch = useAppDispatch();
  const toggleStatus = useAppSelector(getToggleStatus);
  const dynamicFormData: any = useAppSelector(getDynamicFormData);

  return (
    <Popup
      id="my-popup"
      opened={toggleStatus("dynamicForm")}
      onPopupSwipeClose={() => {
        dispatch(
          setToggleStatus({ key: "dynamicForm", status: false })
        );
      }}
      onPopupClose={() => {
        dispatch(
          setToggleStatus({ key: "dynamicForm", status: false })
        );
      }}
    >
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
              backgroundColor: "info.main",
              color: "info.contrastText",
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
                color: "info.contrastText",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
              onClick={() => {
                dispatch(
                  setToggleStatus({ key: "dynamicForm", status: false })
                );
              }}
            >
              <CloseIcon />
            </IconButton>
            
            <AssignmentIcon sx={{ fontSize: 48, marginBottom: 2 }} />
            <Typography variant="h5" sx={{ fontWeight: 600, marginBottom: 1 }}>
              {dynamicFormData && dynamicFormData.pageTitle ? dynamicFormData.pageTitle : "Dynamic Form"}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Please fill in the required information
            </Typography>
          </Box>

          {/* Form Content */}
          <Box sx={{ padding: 3 }}>
            <Paper
              elevation={0}
              sx={{
                padding: 3,
                backgroundColor: "background.default",
                borderRadius: 2,
                minHeight: "400px",
              }}
            >
              {dynamicFormData &&
                dynamicFormData.formData &&
                dynamicFormData.formData.formElements ? (
                <FormRenderer
                  formData={dynamicFormData.formData}
                  key={dynamicFormData}
                />
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "300px",
                    color: "text.secondary",
                  }}
                >
                  <AssignmentIcon sx={{ fontSize: 64, marginBottom: 2, opacity: 0.5 }} />
                  <Typography variant="h6" sx={{ marginBottom: 1 }}>
                    No Form Data
                  </Typography>
                  <Typography variant="body2">
                    Form configuration is not available
                  </Typography>
                </Box>
              )}
            </Paper>
          </Box>
        </Box>
      </Page>
    </Popup>
  );
};
