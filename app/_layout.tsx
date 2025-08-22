// app/_layout.tsx
import { Slot } from "expo-router";
import { View } from "react-native";
import { colors } from "../components/theme"; // ajustá la ruta si difiere

export default function RootLayout() {
  return (
    // Fondo global para TODA la app (incluyendo áreas seguras)
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <Slot />
    </View>
  );
}