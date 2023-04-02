import { ActivityIndicator, StyleSheet, Text, View, Image } from 'react-native';
import * as React from 'react';

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
  // languages: Array<string>;
}

const Product = ({ productData }: { productData: string }) => {
  const [product, setProduct] = React.useState<ProductModel | null>(null);
  const [isLoading, setisLoading] = React.useState(true);

  React.useEffect(() => {
    getProduct(productData);
  }, []);

  React.useEffect(() => {
    console.log(product);
  }, [product]);

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
            : 'Brak kategorii',
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
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          {product !== null ? (
            <View>
              <Text>{product.product_name}</Text>

              <Image
                source={{ uri: product.image_url }}
                style={{ width: 100, height: 100 }}
              />
              <Text>kategorie: {product.categories}</Text>
              <Text>Marka: {product.brands}</Text>
              <Text>Skladniki: {product.ingredients_text}</Text>
              <Text>NutriScore: {product.nutriscore_grade}</Text>
              <Image
                source={{
                  uri: `${nutriSCoreImage}${product.nutriscore_grade}.png`
                }}
                style={{ width: 354, height: 354 * (192 / 354) }}
              />
              <Text>Wartosci odzywcze (w 100g):</Text>
              <Text>Kalorie: {product.nutriments?.['energy-kcal_100g']}</Text>
              <Text>Tluszcz: {product.nutriments?.fat_100g}g</Text>
              <Text>
                Weglowodany: {product.nutriments?.carbohydrates_100g}g
              </Text>
              <Text>Cukier: {product.nutriments?.sugars_100g}g</Text>
              <Text>Bialko: {product.nutriments?.proteins_100g}g</Text>
              <Text>Sol: {product.nutriments?.salt_100g}g</Text>
            </View>
          ) : (
            <Text>null</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
