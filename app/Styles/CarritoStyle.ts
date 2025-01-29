import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles";

export const CarritoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.colorWhite,
    padding: 20,
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.juaRegular,
    fontWeight: "bold",
  },
  subText: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.juaRegular,
    color: "#666",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    fontSize: FontSize.size_mini,
  },
  emptyCartText: {
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.juaRegular,
    textAlign: "center",
    marginTop: 40,
    color: "#444",
  },
  buyButton: {
    marginTop: 20,
    paddingVertical: 15,
    width: "80%",
    backgroundColor: "#000",
    borderRadius: 10,
    alignItems: "center",
  },
  buyButtonText: {
    fontSize: FontSize.size_mini,
    fontFamily: FontFamily.juaRegular,
    color: "#fff",
  },
});

export default CarritoStyles;
