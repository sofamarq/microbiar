import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { colors } from "../../../components/theme";

export default function LogoutModal() {
  const onConfirm = () => {
    // acá haces signOut(...) si corresponde
    router.replace("/login"); // o a donde quieras ir
  };

  return (
    // 👇 overlay semitransparente para que se vea la pantalla de atrás
    <View
      style={{
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.45)",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      {/* Tarjeta */}
      <View
        style={{
          width: "100%",
          maxWidth: 420,
          backgroundColor: "#fff",
          borderRadius: 18,
          padding: 20,
        }}
      >
        <Text style={{ color: colors.text, fontWeight: "900", fontSize: 22 }}>
          Cerrar sesión
        </Text>
        <Text style={{ color: colors.text, marginTop: 8 }}>
          ¿Estás seguro de que querés cerrar sesión?
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 12,
            marginTop: 18,
          }}
        >
          <Pressable
            onPress={() => router.back()}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 14,
              borderRadius: 10,
              backgroundColor: "#EAF7EF",
            }}
          >
            <Text style={{ color: colors.text }}>Cancelar</Text>
          </Pressable>

          <Pressable
            onPress={onConfirm}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 14,
              borderRadius: 10,
              backgroundColor: colors.primary,
            }}
          >
            <Text style={{ color: "white", fontWeight: "800" }}>
              Sí, cerrar sesión
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}