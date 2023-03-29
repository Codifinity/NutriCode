import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { useRoute } from '@react-navigation/native';

const Product = () => {
  const route = useRoute();

  const { type, data } = route.params;
  React.useEffect(() => {
    alert(`BarCode with type ${type} and data ${data} has been scanned`);
  }, []);

  return (
    <View>
      <Text>Product</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
