import { StyleSheet } from "react-native";
import { Color, FontFamily, FontSize } from "../../constants/GlobalStyles"; // Asegúrate de que la ruta sea correcta

export const CategoryNavigationStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: Color.colorWhite,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  searchInput: {
    backgroundColor: "#f0f0f0",
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorBlack,
    borderWidth: 1,
    borderColor: "#ddd",
    flex: 1,
  },
  filterButton: {
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  filterButtonText: {
    color: "#fff",
    fontSize: FontSize.size_sm,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "white",
  },
  modalTitle: {
    fontSize: FontSize.size_md,
    fontFamily: FontFamily.juaRegular,
    marginBottom: 20,
    textAlign: "center",
  },
  modalOption: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 25,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
  },
  modalOptionActive: {
    backgroundColor: Color.colorBlack,
  },
  modalOptionText: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.juaRegular,
    color: Color.colorBlack,
  },
  modalOptionTextActive: {
    color: "#fff",
  },
  clearCategoryButton: {
    backgroundColor: "#ff4d4d",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 25,
    marginTop: 15,
    alignItems: "center",
  },
  clearCategoryText: {
    color: "#fff",
    fontSize: FontSize.size_sm,
  },
  closeButton: {
    backgroundColor: "#ff4d4d",
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 20,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: FontSize.size_sm,
  },
});


export default CategoryNavigationStyles;