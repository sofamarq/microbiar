import { View, Text, Pressable } from "react-native";
import { colors } from "../../../components/theme";
import { router } from "expo-router";

export default function LogoutModal() {
  const onConfirm = () => {
    // limpiar sesión (fake)
    router.replace("/"); // o a tu login
  };

  return (
    <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.25)", justifyContent: "center", alignItems: "center", padding: 24 }}>
      <Pressable
        onPress={() => router.back()}
        style={{ position: "absolute", inset: 0 }}
      />
      <View style={{ backgroundColor: "#fff", borderRadius: 16, padding: 18, width: "88%" }}>
        <Text style={{ fontWeight: "900", fontSize: 18, color: colors.text, marginBottom: 6 }}>Cerrar sesión</Text>
        <Text style={{ color: colors.text, marginBottom: 14 }}>¿Estás seguro de que querés cerrar sesión?</Text>

        <View style={{ flexDirection: "row", justifyContent: "flex-end", gap: 12 }}>
          <Pressable onPress={() => router.back()} style={{ paddingVertical: 10, paddingHorizontal: 14 }}>
            <Text style={{ color: colors.text }}>Cancelar</Text>
          </Pressable>
          <Pressable
            onPress={onConfirm}
            style={{ backgroundColor: "#22C55E", paddingVertical: 10, paddingHorizontal: 14, borderRadius: 10 }}
          >
            <Text style={{ color: "white", fontWeight: "800" }}>Sí, cerrar sesión</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}