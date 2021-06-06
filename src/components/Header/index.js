import React from "react";
import FormHeader from "./FormHeader";
import MainHeader from "./MainHeader";
function Header({ type, label, navigation }) {
  switch (type) {
    case "main":
      return <MainHeader />;
    case "form":
      return <FormHeader label={label} navigation={navigation} />;
    default:
      return <MainHeader />;
  }
}

export default Header;
