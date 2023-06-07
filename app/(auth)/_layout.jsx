import { Slot, Stack, Tabs } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';



const AuthLayout = () =>  (
    <Tabs>
        <Tabs.Screen 
            name= "sign-in"
            options= {{ 
                tabBarLabel: "Login",
                headerTitle: "Login",
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="md-checkmark-circle" size={32} color="green" />
                ),
             }} />
    </Tabs>
)

export default AuthLayout;