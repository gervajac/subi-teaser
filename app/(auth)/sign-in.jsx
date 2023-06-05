import { Text, View, Button } from "react-native";
import { useAuth } from "../../context/auth";

export default function SignIn() {
  const { singIn } = useAuth();

  return (
    <View>
      <Text>Sign In</Text>
      <Button onPress={singIn} title="Sign In" />
    </View>
  );
}
