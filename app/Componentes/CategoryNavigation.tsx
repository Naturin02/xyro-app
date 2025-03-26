import React, { useState } from "react";
import { Pressable, Text, View, TextInput } from "react-native";
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
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // Categoría seleccionada
  const [subCategory, setSubCategory] = useState<string | null>(null); // Subcategoría seleccionada

  const categories = ["Marcas", "Mujer", "Hombre", "Belleza", "Calzado"];
  const subCategories = {
    Mujer: ["Ropa", "Zapatos", "Accesorios"],
    Hombre: ["Ropa", "Zapatos", "Accesorios"],
    Belleza: ["Cosméticos", "Cuidado de la piel", "Maquillaje"],
    Calzado: ["Deportivos", "Casuales", "Formales"],
  };

  // Función para seleccionar o desmarcar una categoría
  const handleCategorySelect = (category: string) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
      setSubCategory(null); // Restablece la subcategoría cuando se desmarca la categoría
      onCategorySelect(""); // Llama a la función pasada con cadena vacía
    } else {
      setSelectedCategory(category);
      setSubCategory(null); // Restablece la subcategoría cuando se selecciona una nueva categoría
      onCategorySelect(category); // Llama a la función pasada con la categoría seleccionada
    }
  };

  // Función para seleccionar una subcategoría
  const handleSubCategorySelect = (subCategory: string) => {
    setSubCategory(subCategory);
    onSearchQueryChange(subCategory); // Llama a la función pasada para actualizar el filtro de búsqueda
  };

  // Función para actualizar el texto de búsqueda
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    onSearchQueryChange(query); // Llama a la función pasada como prop
  };

  return (
    <View style={CategoryNavigationStyles.container}>
      {/* Buscador */}
      <View style={CategoryNavigationStyles.searchContainer}>
        <TextInput
          style={CategoryNavigationStyles.searchInput}
          placeholder="Buscar categoría..."
          value={searchQuery}
          onChangeText={handleSearchChange} // Actualiza el estado de búsqueda
        />
      </View>

      {/* Botones de filtro para categorías */}
      <View style={CategoryNavigationStyles.categoriesContainer}>
        {categories.map((category, index) => (
          <Pressable
            key={index}
            style={[
              CategoryNavigationStyles.categoryButton,
              selectedCategory === category && CategoryNavigationStyles.categoryButtonActive,
            ]}
            onPress={() => handleCategorySelect(category)} // Llama a la función para seleccionar o desmarcar
          >
            <Text
              style={[
                CategoryNavigationStyles.categoryButtonText,
                selectedCategory === category && CategoryNavigationStyles.categoryButtonTextActive,
              ]}
            >
              {category}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Opciones de subcategorías basadas en la categoría seleccionada */}
      {selectedCategory && subCategories[selectedCategory] && (
        <View style={CategoryNavigationStyles.categoriesContainer}>
          {subCategories[selectedCategory].map((sub, index) => (
            <Pressable
              key={index}
              style={[
                CategoryNavigationStyles.categoryButton,
                subCategory === sub && CategoryNavigationStyles.categoryButtonActive,
              ]}
              onPress={() => handleSubCategorySelect(sub)} // Llama a la función para seleccionar subcategoría
            >
              <Text
                style={[
                  CategoryNavigationStyles.categoryButtonText,
                  subCategory === sub && CategoryNavigationStyles.categoryButtonTextActive,
                ]}
              >
                {sub}
              </Text>
            </Pressable>
          ))}
        </View>
      )}
    </View>
  );
};

export default CategoryNavigation;
