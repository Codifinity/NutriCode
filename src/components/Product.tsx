import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import * as React from 'react';

const baseUrl = 'https://world.openfoodfacts.org/api/v0/product/';

type ProductData = {
  product_name_pl: string;
};

const Product = ({ productData }: { productData: string }) => {
  const [product, setProduct] = React.useState<ProductData | null>(null);
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
      const product = await response.json();
      if (product.status === 0) {
        setProduct(null);
      } else {
        setProduct(product.product);
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
            <Text>
              {product.product_name_pl} {product.energy - kcal_value}
            </Text>
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
