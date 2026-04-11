import { StyleSheet, Text, View } from "react-native";
import Signup from "./auth/signup";

export default function Page() {
  return (
    <View style={styles.container}>
      <Signup />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  
});
