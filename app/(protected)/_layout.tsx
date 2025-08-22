import { Stack } from "expo-router";

export default function ProtectedLayout() {
  return (
    <Stack
      // 🔒 Oculta el header nativo en TODAS las pantallas de este grupo
      screenOptions={{ headerShown: false }}
    >
      {/* Pantallas “normales” */}
      <Stack.Screen name="home" />
      <Stack.Screen name="profile" />
      <Stack.Screen name="help" />
      <Stack.Screen name="terms" />
      <Stack.Screen name="settings" />
      <Stack.Screen name="edit-profile" />
      {/* Seguridad como carpeta (menú) + cambiar */}
      <Stack.Screen name="security/index" />
      <Stack.Screen name="security/change" />
      <Stack.Screen name="password-changed" />

      {/* Modales (logout) sobre la pantalla actual */}
      <Stack.Screen
        name="(modals)/logout"
        options={{
          presentation: "transparentModal",
          animation: "fade",
          contentStyle: { backgroundColor: "transparent" },
        }}
      />
    </Stack>
  );
}

