import * as React from 'react';
import { Button, StyleSheet, Text, View, BackHandler } from 'react-native';

//modules

import { Camera } from 'expo-camera';
import { useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '..';
import Product from '../components/Product';

type ScanScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Scan'
>;

const ScanScreen = ({
  navigation
}: {
  navigation: ScanScreenNavigationProp;
}) => {
  const isFocused = useIsFocused();
  const [hasPermission, setHasPermission] = React.useState<boolean | null>(
    null
  );
  const [scanned, setScanned] = React.useState(false);
  const [productData, setProductData] = React.useState<string | null>(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({
    type,
    data
  }: {
    type: string;
    data: string;
  }) => {
    setScanned(true);
    setProductData(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {isFocused && !scanned && productData === null ? (
        <Camera
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
          ratio="16:9"
          // zoom={0.2}
        />
      ) : null}

      {scanned && productData !== null && <Product productData={productData} />}
    </View>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({});
