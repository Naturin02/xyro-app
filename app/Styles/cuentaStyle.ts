import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles";

export const CuentaStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.juaRegular,
    fontWeight: "bold",
  },
  userContainer: {
    backgroundColor: Color.colorWhite,
    alignItems: "center",
    fontSize: FontSize.size_6xl,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginBottom: 15,
  },
  userText: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.juaRegular,
  },
  optionButton: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: Color.colorSeagreen,
    borderRadius: 10,
    alignItems: "center",
    marginVertical: 5,
    fontWeight: "bold",
  },
  logoutButton: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: Color.colorDarkslategray,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  deleteButton: {
    width: "100%",
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  deleteButtonText: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.juaRegular,
    color: "red",
  },
  buttonText: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorWhite,
  },
});

export default CuentaStyles;
