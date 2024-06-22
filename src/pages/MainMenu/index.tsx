import React, { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Typography } from "@mui/material";
import {
  FillerContainer,
  MainContainer,
  MenuOptionsContainer,
  StyledTitleContainer,
} from "@/pages/MainMenu/styles";
import NotificationsHeader from "@/components/NotificationsHeader";
import BottomNav from "@/components/BottomNav";
import { menuOptions } from "@/utils/menuOptions";
import MenuOptions from "@/components/MenuOptions";

function MainMenu() {
  const [menu, setMenu] = useState<{ label: string; value: string } | null>(
    null,
  );
  const [searchValue, setSearchValue] = useState("");

  const filteredMenuOptions = menuOptions.filter((menuOption) =>
    menuOption.label.toLowerCase().includes(searchValue.toLowerCase()),
  );

  return (
    <>
      <MainContainer>
        <Autocomplete
          id="size-medium-filled"
          options={menuOptions}
          size="small"
          value={menu}
          onChange={(
            event: unknown,
            newValue: { label: string; value: string } | null,
          ) => setMenu(newValue as { label: string; value: string })}
          onInputChange={(event, newInputValue) => {
            setSearchValue(newInputValue);
          }}
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon
                      fontSize="large"
                      sx={{ paddingBottom: "12px" }}
                    />
                  </InputAdornment>
                ),
              }}
              variant="filled"
              label={
                <Typography fontWeight="medium" fontSize="1rem">
                  Pesquisar
                </Typography>
              }
            />
          )}
        />
        <FillerContainer />
        <StyledTitleContainer>
          <Typography fontWeight="600" fontSize="1.5rem">
            Registros
          </Typography>
        </StyledTitleContainer>
        <MenuOptionsContainer>
          {filteredMenuOptions.map((menuOption) => (
            <MenuOptions
              key={menuOption.value}
              route={menuOption.route || "/"}
              menuName={menuOption.label}
              menuIcon={menuOption.icon}
            />
          ))}
        </MenuOptionsContainer>
      </MainContainer>
      <NotificationsHeader />
      <BottomNav />
    </>
  );
}

export default MainMenu;
