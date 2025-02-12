import React, { useState } from "react";
import { Pressable, Text, View, Modal, FlatList, TextInput } from "react-native";
import { CategoryNavigationStyles } from "../Styles/CategoryNavigationStyles"; // Asegúrate de que la ruta sea correcta

interface CategoryNavigationProps {
  onCategorySelect: (category: string) => void;
  onSearchQueryChange: (query: string) => void;
}

const CategoryNavigation = ({
  onCategorySelect,
  onSearchQueryChange,
}: CategoryNavigationProps) => {
  const [searchQuery, setSearchQuery] = useState<string>(""); // Query de búsqueda
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false); // Control modal
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // Categoría seleccionada

  const categories = ["Marcas", "Mujer", "Hombre", "Belleza", "Calzado"];

  // Función para seleccionar una categoría
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    onCategorySelect(category); // Llama a la función pasada como prop
  };

  // Función para mostrar todas las categorías
  const handleShowAllCategories = () => {
    setSelectedCategory(null); // Restablece la selección de categoría
    setIsModalVisible(false); // Cierra el modal
  };

  // Función para actualizar el texto de búsqueda
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    onSearchQueryChange(query); // Llama a la función pasada como prop
  };

  return (
    <View style={CategoryNavigationStyles.container}>
      {/* Buscador y Botón de filtro */}
      <View style={CategoryNavigationStyles.searchContainer}>
        <TextInput
          style={CategoryNavigationStyles.searchInput}
          placeholder="Buscar categoría..."
          value={searchQuery}
          onChangeText={handleSearchChange} // Actualiza el estado de búsqueda
        />
        {/* Botón para abrir el modal de categorías */}
        <Pressable style={CategoryNavigationStyles.filterButton} onPress={() => setIsModalVisible(true)}>
          <Text style={CategoryNavigationStyles.filterButtonText}>Filtro</Text>
        </Pressable>
      </View>

      {/* Modal para seleccionar la categoría */}
      <Modal visible={isModalVisible} animationType="slide" onRequestClose={() => setIsModalVisible(false)}>
        <View style={CategoryNavigationStyles.modalContainer}>
          <Text style={CategoryNavigationStyles.modalTitle}>Seleccionar Categoría</Text>
          <FlatList
            data={categories}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Pressable
                style={[
                  CategoryNavigationStyles.modalOption,
                  selectedCategory === item && CategoryNavigationStyles.modalOptionActive,
                ]}
                onPress={() => handleCategorySelect(item)}
              >
                <Text
                  style={[
                    CategoryNavigationStyles.modalOptionText,
                    selectedCategory === item && CategoryNavigationStyles.modalOptionTextActive,
                  ]}
                >
                  {item}
                </Text>
              </Pressable>
            )}
          />
          {/* Botón para mostrar todas las categorías */}
          <Pressable style={CategoryNavigationStyles.clearCategoryButton} onPress={handleShowAllCategories}>
            <Text style={CategoryNavigationStyles.clearCategoryText}>Mostrar todo</Text>
          </Pressable>
          <Pressable style={CategoryNavigationStyles.closeButton} onPress={() => setIsModalVisible(false)}>
            <Text style={CategoryNavigationStyles.closeButtonText}>Cerrar</Text>
          </Pressable>
        </View>
      </Modal>
    </View>
  );
};

export default CategoryNavigation;
