import { View, Text, StyleSheet } from "react-native";
import { useRouter, useSearchParams } from "expo-router";

export default function Details() {
  const router = useRouter();
  const { email, password } = useSearchParams();
  return (
    <View style={styles.container}>
      <Text onPress={() => router.back()}>Details screen</Text>
      <Text>Email: {email}</Text>
      <Text>Password: {password}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "gray"
  },
});
