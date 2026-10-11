import { Stack } from "expo-router";
import { AuthProvider, useAuth } from "../../hooks/AuthContext";

function RootNavigator() {
  const { user } = useAuth();

  return (
    <Stack>
      <Stack.Protected guard={!user}>
        <Stack.Screen
          name="login"
          options={{ title: "Login" }}
        />
      </Stack.Protected>

      <Stack.Protected guard={!!user}>
        <Stack.Screen
          name="home"
          options={{ title: "Home" }}
        />
      </Stack.Protected>

      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <AuthProvider>
      <RootNavigator />
    </AuthProvider>
  );
}