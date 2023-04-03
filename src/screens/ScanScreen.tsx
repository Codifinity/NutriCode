import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//modules
import { Camera } from 'expo-camera';
import { useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Product from '../components/Product';

const ScanScreen = () => {
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

  React.useEffect(() => {
    if (!isFocused) {
      setScanned(false);
      setProductData(null);
    }
  }, [isFocused]);

  const handleBarCodeScanned = ({ data }: { type: string; data: string }) => {
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
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {isFocused && !scanned && productData === null ? (
        <Camera
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
            ...StyleSheet.absoluteFillObject
          }}
          ratio="16:9"
          // zoom={0.2}
        >
          <View
            style={{
              width: 200,
              height: 200,
              borderColor: '#ffffff',
              borderWidth: 5,
              borderRadius: 20,
              opacity: 1
            }}
          ></View>
        </Camera>
      ) : null}

      {scanned && productData !== null && <Product productData={productData} />}
    </SafeAreaView>
  );
};

export default ScanScreen;
