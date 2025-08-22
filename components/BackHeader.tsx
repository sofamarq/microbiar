// components/BackHeader.tsx
import React from "react";
import { View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { colors } from "./theme";

type BackHeaderProps = {
  title: string;
  /** muestra botón atrás (router.back) */
  back?: boolean;
};

const BackHeader: React.FC<BackHeaderProps> = ({ title, back = false }) => {
  const router = useRouter();

  return (
    <View
      style={{
        paddingTop: 60,
        paddingBottom: 16,
        backgroundColor: colors.primary,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {back && (
        <Pressable
          onPress={() => router.back()}
          style={{
            position: "absolute",
            left: 16,
            top: 60,
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: "rgba(255,255,255,0.2)",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather name="chevron-left" size={22} color="#fff" />
        </Pressable>
      )}

      <Text style={{ color: "white", fontWeight: "800", fontSize: 22 }}>
        {title}
      </Text>
    </View>
  );
};

export default BackHeader;