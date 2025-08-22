// app/index.tsx
import { View, Text, Image, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { router } from "expo-router";

const colors = {
  bg: "#EFFAF1",
  primary: "#23C363",
  primaryDark: "#1BA553",
  text: "#0E2A3B",
  pill: "#DFF5E7"
};

export default function Launch() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.bg,
        paddingHorizontal: 24,
        justifyContent: "center",  // 👈 centra vertical
        alignItems: "center"       // 👈 centra horizontal
      }}
    >
      <StatusBar style="dark" />
      <Image
        source={require("../assets/logo-mark.png")}
        style={{ width: 128, height: 128, marginBottom: 16 }}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: 40,
          fontWeight: "800",
          color: colors.text,
          marginBottom: 8
        }}
      >
        MicrobiAr
      </Text>
      <Text
        style={{
          fontSize: 14,
          color: "#3b5563",
          textAlign: "center",
          lineHeight: 20,
          marginBottom: 28
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
      </Text>

      {/* Botón principal */}
      <Pressable
        onPress={() => router.push("/login")}
        style={({ pressed }) => ({
          width: "100%",
          paddingVertical: 14,
          borderRadius: 999,
          backgroundColor: pressed ? colors.primaryDark : colors.primary,
          alignItems: "center",
          marginBottom: 12
        })}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>
          Ingresa
        </Text>
      </Pressable>

      {/* Botón secundario */}
      <Pressable
        onPress={() => router.push("/register")}
        style={{
          width: "100%",
          paddingVertical: 14,
          borderRadius: 999,
          backgroundColor: colors.pill,
          alignItems: "center",
          marginBottom: 16
        }}
      >
        <Text style={{ color: colors.text, fontSize: 16, fontWeight: "700" }}>
          Registrate
        </Text>
      </Pressable>

      <Pressable onPress={() => router.push("/forgot")}>
        <Text style={{ color: colors.text, fontSize: 13, fontWeight: "600" }}>
          ¿Olvidaste tu contraseña?
        </Text>
      </Pressable>
    </View>
  );
}
