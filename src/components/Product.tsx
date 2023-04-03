import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const baseUrl = 'https://pl.openfoodfacts.org/api/v0/product/';
const nutriSCoreImage =
  'https://static.openfoodfacts.org/images/attributes/nutriscore-';

//Interface for app product state
interface ProductModel {
  product_name: string;
  product_name_pl?: string;
  ingredients_text: string;
  ingredients_text_pl?: string;
  categories: string;
  brands: string;
  image_url: string;
  nutriscore_grade: string;
  nutriments: {
    'energy-kcal_100g': number;
    fat_100g: number;
    carbohydrates_100g: number;
    sugars_100g: number;
    proteins_100g: number;
    salt_100g: number;
  } | null;
}

const Product = ({ productData }: { productData: string }) => {
  const [product, setProduct] = React.useState<ProductModel | null>(null);
  const [isLoading, setisLoading] = React.useState(true);

  React.useEffect(() => {
    getProduct(productData);
  }, []);

  const getProduct = async (productData: string) => {
    const url = `${baseUrl}${productData}.json`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      const { product }: { product: ProductModel } = data;
      if (data.status === 0) {
        setProduct(null);
      } else {
        setProduct({
          product_name: product.product_name_pl
            ? product.product_name_pl
            : product.product_name,
          ingredients_text: product.ingredients_text_pl
            ? product.ingredients_text_pl
            : product.ingredients_text,
          image_url: product.image_url,
          categories: product.categories
            ? product.categories
            : 'Brak informacji o kategorii',
          brands: product.brands ? product.brands : 'Brak informacji o marce',
          nutriscore_grade: product.nutriscore_grade
            ? product.nutriscore_grade
            : 'Brak',
          nutriments: product.nutriments ? product.nutriments : null
          // languages: product.languages
        });
      }

      setisLoading(false);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return (
    <ScrollView style={{ flex: 1, marginBottom: 115 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          {product !== null ? (
            <View>
              <View style={styles.titleBox}>
                <Text style={styles.title}>
                  {product.product_name
                    ? product.product_name
                    : 'Nie znaleziono'}
                </Text>
              </View>
              <View style={styles.secondBox}>
                {product.image_url ? (
                  <Image
                    source={{ uri: product.image_url }}
                    style={styles.productImage}
                  />
                ) : (
                  <Image
                    source={require('../../assets/noImage.jpg')}
                    style={styles.productImage}
                  />
                )}
                <Image
                  source={{
                    uri: `${nutriSCoreImage}${product.nutriscore_grade}.png`
                  }}
                  style={{ width: 154, height: 154 * (192 / 354) }}
                />
              </View>
              <View style={{ paddingHorizontal: 15 }}>
                <View style={styles.headingContainer}>
                  <Text style={styles.heading}>Kategorie</Text>
                </View>
                <View style={styles.headingContent}>
                  <Text style={styles.headingContentText}>
                    {product.categories}
                  </Text>
                </View>
                <View style={styles.headingContainer}>
                  <Text style={styles.heading}>Marka</Text>
                </View>
                <View style={styles.headingContent}>
                  <Text style={styles.headingContentText}>
                    {product.brands}
                  </Text>
                </View>
                <View style={styles.headingContainer}>
                  <Text style={styles.heading}>Składniki</Text>
                </View>
                <View style={styles.headingContent}>
                  <Text style={styles.headingContentText}>
                    {product.ingredients_text
                      ? product.ingredients_text
                      : 'Brak informacji o składnikach'}
                  </Text>
                </View>
                <View style={styles.productDesc}>
                  <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Wartości odżywcze</Text>
                    <Text>W 100g</Text>
                  </View>
                  <Text style={styles.productDescItem}>
                    Kalorie:{' '}
                    {product.nutriments?.['energy-kcal_100g']
                      ? product.nutriments?.['energy-kcal_100g']
                      : 'Brak danych'}
                  </Text>
                  <Text style={styles.productDescItem}>
                    Tłuszcz:{' '}
                    {product.nutriments?.fat_100g
                      ? `${product.nutriments?.fat_100g}g`
                      : 'Brak danych'}
                  </Text>
                  <Text style={styles.productDescItem}>
                    Węglowodany:{' '}
                    {product.nutriments?.carbohydrates_100g
                      ? `${product.nutriments?.carbohydrates_100g}g`
                      : 'Brak danych'}
                  </Text>
                  <Text style={styles.productDescItem}>
                    Cukier:{' '}
                    {product.nutriments?.sugars_100g
                      ? `${product.nutriments?.sugars_100g}g`
                      : 'Brak danych'}
                  </Text>
                  <Text style={styles.productDescItem}>
                    Białko:{' '}
                    {product.nutriments?.proteins_100g
                      ? `${product.nutriments?.proteins_100g}g`
                      : 'Brak danych'}
                  </Text>
                  <Text style={styles.productDescItem}>
                    Sól:{' '}
                    {product.nutriments?.salt_100g
                      ? `${product.nutriments?.salt_100g}g`
                      : 'Brak danych'}
                  </Text>
                </View>
              </View>
            </View>
          ) : (
            <SafeAreaView
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ fontWeight: '700', fontSize: 22 }}>
                Nie odnaleziono produktu!
              </Text>
            </SafeAreaView>
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default Product;

const styles = StyleSheet.create({
  headingContentText: {
    fontWeight: '500'
  },
  headingContent: {
    borderRadius: 5,
    backgroundColor: '#FFF',
    paddingVertical: 10,
    paddingHorizontal: 5
  },
  headingContainer: {
    marginVertical: 10
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#228572'
  },
  titleBox: {
    width: '100%',
    marginHorizontal: 'auto',
    backgroundColor: 'white',
    height: 80,
    borderRadius: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: '700'
  },
  productBox: {
    backgroundColor: 'white',
    width: '95%'
  },
  secondBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginHorizontal: 'auto',
    marginTop: 20
  },
  productImage: {
    width: 200,
    height: 200,
    borderRadius: 30
  },
  productDesc: {
    width: '100%',
    marginTop: 20
  },
  productItem: {
    fontSize: 15,
    fontWeight: '500',
    marginTop: 20
  },
  productDescItem: {
    fontSize: 15,
    fontWeight: '500',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    marginBottom: 5
  },
  closeButton: {
    width: 150,
    height: 50,
    backgroundColor: '#EE564C',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginHorizontal: 20,
    marginTop: 30
  },
  closeButtonText: {
    color: '#E2E2E2',
    fontSize: 18,
    fontWeight: '500'
  }
});
