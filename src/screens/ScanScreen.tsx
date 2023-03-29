import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

//modules
import { OFF } from 'openfoodfacts-nodejs';
import { Camera } from 'expo-camera';
import { useIsFocused } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const ScanScreen = () => {
  const navigation = useNavigation();
  const [hasPermission, setHasPermission] = React.useState<boolean | null>(
    null
  );
  const [scanned, setScanned] = React.useState(false);

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
    navigation.navigate('Product' as never, { type, data } as never);
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
      <Camera
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        // style={StyleSheet.absoluteFillObject}
        ratio="16:9"
        zoom={0.2}
        style={{
          backgroundColor: 'red',
          width: 200,
          height: 200,

          right: 0,
          bottom: 0
        }}
      />

      {scanned && (
        <Button title={'Tap to scan again'} onPress={() => setScanned(false)} />
      )}
    </SafeAreaView>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({});
