import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles";

export const FooterNavigationStyle = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: Color.colorWhite,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  footerItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  footerIcon: {
    fontSize: 28,
    color: Color.colorBlack,
  },
  footerText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
    color: "#aaa",
    marginTop: 5,
  },
  activeItem: {
    color: "#90ee90",
    fontWeight: "bold",
  },
  activeIcon: {
    color: "#000",
  }
});