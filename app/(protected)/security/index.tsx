import { View, Text, Pressable } from "react-native";
import BackHeader from "../../../components/BackHeader";
import BottomNav from "../../../components/BottomNav";
import { colors } from "../../../components/theme";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";

const Row = ({
  label,
  icon,
  onPress,
}: {
  label: string;
  icon: any;
  onPress: () => void;
}) => (
  <Pressable
    onPress={onPress}
    style={{
      backgroundColor: "#fff",
      borderRadius: 14,
      paddingVertical: 14,
      paddingHorizontal: 16,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 10,
      gap: 12,
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center", gap: 12, flex: 1 }}>
      <Feather name={icon} size={18} color={colors.text} />
      <Text style={{ color: colors.text }}>{label}</Text>
    </View>
    <Feather name="chevron-right" size={18} color="#9CA3AF" />
  </Pressable>
);

export default function SecurityMenu() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg, paddingBottom: 96 }}>
      {/* Header verde, igual al resto */}
      <BackHeader title="Seguridad" />

      {/* Contenido */}
      <View style={{ paddingHorizontal: 18, paddingTop: 14 }}>
        <Row
          label="Cambiar contraseña"
          icon="lock"
          onPress={() => router.push("/(protected)/security/change")}
        />
        <Row
          label="Términos y condiciones"
          icon="file-text"
          onPress={() => router.push("/terms")}
        />
      </View>

    <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
          <BottomNav />
        </View>
    </View>
  );
}