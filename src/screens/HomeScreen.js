import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  Image, 
  StyleSheet, 
  ActivityIndicator, 
  TouchableOpacity, 
  ScrollView 
} from 'react-native';
import { getAllProducts, getProductsByCategory } from '../services/productsService';

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const categories = ["electronics", "jewelery", "men's clothing", "women's clothing"];

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async (category = null) => {
    setLoading(true);
    try {
      // O site não pede token para acessar os produtos, então não precisa ser feita a autenticação para acessar os produtos
      const data = category 
        ? await getProductsByCategory(category) 
        : await getAllProducts();
        // Se tiver categoria, busca por categoria, senão, busca todos os produtos
      setProducts(data);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate('Details', { id: item.id })}
      // Criando um card por item, e ao clicar, é redirecionado para a tela de detalhes do produto
    > 
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.productTitle} numberOfLines={2}>{item.title}</Text>
      <Text style={styles.price}>R$ {item.price.toFixed(2).replace('.', ',')}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.filterWrapper}>
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          contentContainerStyle={styles.filterScroll}
        >
          <TouchableOpacity 
            style={[styles.categoryBtn, styles.clearBtn]} 
            onPress={() => loadProducts()}
          >
            <Text style={styles.categoryText}>Todos</Text>
          </TouchableOpacity>

          {categories.map((cat) => (
            <TouchableOpacity 
              key={cat} 
              style={styles.categoryBtn} 
              onPress={() => loadProducts(cat)}
            >
              <Text style={styles.categoryText}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007bff" />
          <Text>Buscando produtos...</Text>
        </View>
      ) : (
        <FlatList
          data={products}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.listPadding}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  filterWrapper: { backgroundColor: '#fff', paddingVertical: 12, elevation: 2 },
  filterScroll: { paddingHorizontal: 10 },
  categoryBtn: { 
    backgroundColor: '#007bff', 
    paddingHorizontal: 16, 
    paddingVertical: 8, 
    borderRadius: 20, 
    marginRight: 10,
    justifyContent: 'center'
  },
  clearBtn: { backgroundColor: '#6c757d' },
  categoryText: { color: '#fff', fontWeight: 'bold', textTransform: 'capitalize' },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  listPadding: { padding: 8 },
  card: { 
    flex: 0.5, 
    backgroundColor: '#fff', 
    margin: 6, 
    padding: 12, 
    borderRadius: 12, 
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: { width: 110, height: 110, resizeMode: 'contain', marginBottom: 8 },
  productTitle: { fontSize: 13, fontWeight: '600', textAlign: 'center', height: 38 },
  price: { fontSize: 15, color: '#2ecc71', fontWeight: 'bold', marginTop: 6 }
});