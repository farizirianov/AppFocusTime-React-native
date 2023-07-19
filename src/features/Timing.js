import { View, Text, StyleSheet, Vibration } from 'react-native';
import { RoundedButton } from '../components/RoundedButton';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingBottom}>
        <RoundedButton size={75} title="10" onPress={() => onChangeTime(10)} />
      </View>
      <View style={styles.timingBottom}>
        <RoundedButton size={75} title="15" onPress={() => onChangeTime(15)} />
      </View>
      <View style={styles.timingBottom}>
        <RoundedButton size={75} title="20" onPress={() => onChangeTime(20)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingBottom: {
    flex: 1,
    alignItems: 'center',
  },
});
