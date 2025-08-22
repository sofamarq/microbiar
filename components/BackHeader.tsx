// components/BackHeader.tsx
import { View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { colors } from "./theme";

export default function BackHeader({ title }: { title: string }) {
  return (
    <View style={{ backgroundColor: colors.primary, paddingTop: 60, paddingBottom: 16 }}>
      <View style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16 }}>
        {/* Flecha con círculo */}
        <Pressable
          onPress={() => router.back()}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "rgba(255,255,255,0.25)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather name="arrow-left" size={20} color="white" />
        </Pressable>

        {/* Título centrado */}
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
          <Text style={{ color: "white", fontWeight: "800", fontSize: 22 }} numberOfLines={1}>
            {title}
          </Text>
        </View>

        {/* Placeholder para que el título quede realmente centrado */}
        <View style={{ width: 40 }} />
      </View>
    </View>
  );
}
