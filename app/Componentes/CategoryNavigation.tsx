import React, { useState } from "react";
import { Modal, Pressable, Text, View, FlatList, TextInput } from "react-native";
import { MarcasStyles } from "../Styles/marcasStyle"; // Asegúrate de que la ruta sea correcta

// Datos de categorías sin las tiendas, ya que solo se mostrarán cuando se aplique el filtro
const categoriesData = {
  Marcas: [],
  Mujer: [],
  Hombre: [],
  Belleza: [],
  Calzado: []
};

const CategoryNavigation = () => {
  const [selectedCategory, setSelectedCategory] = useState("Marcas");
  const [products, setProducts] = useState(categoriesData["Marcas"]);
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterBy, setFilterBy] = useState("tiendas"); // 'productos' o 'tiendas'

  // Función para manejar la selección de una categoría
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setProducts(categoriesData[category]); // Actualiza los productos según la categoría seleccionada
  };

  // Función para abrir el modal de filtros
  const openFilterModal = () => {
    setShowModal(true);
  };

  // Función para cerrar el modal de filtros
  const closeFilterModal = () => {
    setShowModal(false);
  };

  // Filtrar productos por búsqueda
  const filteredProducts = products.filter((item) => 
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Filtrar productos por tipo (productos o tiendas)
  const finalProducts = filteredProducts.filter((item) => 
    (filterBy === "productos" && !item.startsWith("Tienda")) ||
    (filterBy === "tiendas" && item.startsWith("Tienda"))
  );

  return (
    <View style={MarcasStyles.container}>
      {/* Buscador */}
      <View style={MarcasStyles.searchContainer}>
        <TextInput
          style={MarcasStyles.searchInput}
          placeholder="Buscar "
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Pressable style={MarcasStyles.filterButton} onPress={openFilterModal}>
          <Text style={MarcasStyles.filterButtonText}>Filtros</Text>
        </Pressable>
      </View>

      {/* Modal de filtros */}
      <Modal
        visible={showModal}
        animationType="slide"
        onRequestClose={closeFilterModal}
      >
        <View style={MarcasStyles.modalContainer}>
          <Text style={MarcasStyles.modalTitle}>Filtrar por:</Text>

          {/* Filtro por categorías */}
          <View style={MarcasStyles.modalSection}>
            <Text style={MarcasStyles.modalSectionTitle}>Categoría</Text>
            {Object.keys(categoriesData).map((category) => (
              <Pressable
                key={category}
                style={MarcasStyles.modalOption}
                onPress={() => {
                  handleCategorySelect(category);
                  closeFilterModal();
                }}
              >
                <Text>{category}</Text>
              </Pressable>
            ))}
          </View>

          {/* Filtro por tipo (tiendas o productos) */}
          <View style={MarcasStyles.modalSection}>
            <Text style={MarcasStyles.modalSectionTitle}>Mostrar</Text>
            <Pressable
              style={MarcasStyles.modalOption}
              onPress={() => {
                setFilterBy("tiendas");
                closeFilterModal();
              }}
            >
              <Text>Tiendas</Text>
            </Pressable>
            <Pressable
              style={MarcasStyles.modalOption}
              onPress={() => {
                setFilterBy("productos");
                closeFilterModal();
              }}
            >
              <Text>Productos</Text>
            </Pressable>
          </View>

          {/* Botón para cerrar el modal */}
          <Pressable style={MarcasStyles.closeButton} onPress={closeFilterModal}>
            <Text style={MarcasStyles.closeButtonText}>Quitar</Text>
          </Pressable>
        </View>
      </Modal>

      {/* Sección para mostrar productos o tiendas */}
      <View style={MarcasStyles.sectionTitle}>
        <Text>Resultados en {selectedCategory}</Text>
      </View>

      <FlatList
        data={finalProducts}
        renderItem={({ item }) => (
          <View style={MarcasStyles.card}>
            <Text style={MarcasStyles.cardTitle}>{item}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default CategoryNavigation;
