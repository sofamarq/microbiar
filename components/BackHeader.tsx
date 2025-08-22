import { View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { colors } from "./theme";

export default function BackHeader({ title }: { title: string }) {
  return (
    <View
      style={{
        backgroundColor: colors.primary,
        paddingTop: 60,
        paddingBottom: 20,
        alignItems: "center",
      }}
    >
      {/* Botón de volver */}
      <Pressable
        onPress={() => router.back()}
        style={{
          position: "absolute",
          left: 16,
          top: 56,
          width: 36,
          height: 36,
          borderRadius: 18,
          backgroundColor: "rgba(255,255,255,0.2)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Feather name="chevron-left" size={22} color="white" />
      </Pressable>

      {/* Título en el centro */}
      <Text style={{ color: "white", fontWeight: "800", fontSize: 22 }}>
        {title}
      </Text>
    </View>
  );
}