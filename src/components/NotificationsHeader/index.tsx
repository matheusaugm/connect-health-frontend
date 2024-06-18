import React, { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Typography } from "@mui/material";
import {
  MainContainer,
  StyledIconContainer,
  StyledLogoIcon,
  StyledNotificationIcon,
} from "@/components/NotificationsHeader/styles";
import headerIcon from "@/assets/header_icon.svg";
import notificationIcon from "@/assets/notification_icon.svg";

interface NotificationsHeaderProps {
  pageName?: string;
}

const NotificationsHeader: FC<NotificationsHeaderProps> = ({ pageName }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <MainContainer>
      {location.pathname !== "/home" && location.pathname !== "/register" ? (
        <>
          <StyledIconContainer>
            <ChevronLeftIcon onClick={() => navigate(-1)} />
          </StyledIconContainer>
          <Typography
            sx={{ justifySelf: "center" }}
            color="primary"
            fontWeight="600"
            fontSize="1.5rem"
          >
            {pageName}
          </Typography>
        </>
      ) : (
        <>
          <StyledLogoIcon src={headerIcon} alt="mainLogo" />
          <StyledNotificationIcon
            src={notificationIcon}
            alt="notificationIcon"
          />
        </>
      )}
    </MainContainer>
  );
};

export default NotificationsHeader;
