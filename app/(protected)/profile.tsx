import { View, Text, Image, Pressable } from "react-native";
import { colors } from "../../components/theme";
import BackHeader from "../../components/BackHeader";
import BottomNav from "../../components/BottomNav";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";

const user = {
  nombre: "Juan",
  apellido: "Pérez",
  email: "juan@example.com",
  telefono: "+54 9 11 5555-5555",
  nacimiento: "1992-08-15",
};

const Item = ({ title, icon, onPress }: { title: string; icon: any; onPress: () => void }) => (
  <Pressable
    onPress={onPress}
    style={{
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: 14,
      borderRadius: 14,
      marginBottom: 10,
      gap: 12,
    }}
  >
    <Feather name={icon} size={18} color={colors.text} />
    <Text style={{ flex: 1, color: colors.text }}>{title}</Text>
    <Feather name="chevron-right" size={18} color="#9CA3AF" />
  </Pressable>
);

export default function Profile() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <BackHeader title="Perfil" />

      <View style={{ flex: 1, padding: 18, gap: 14 }}>
        {/* avatar = logo circular */}
        <View style={{ alignItems: "center", gap: 8, marginBottom: 20 }}>
          <Image
            source={require("../../assets/logo-mark.png")}
            style={{ width: 80, height: 80 }}
          />
          <Text style={{ fontWeight: "800", fontSize: 18, color: colors.text }}>
            {user.nombre} {user.apellido}
          </Text>
          <Text style={{ color: "#6B7280" }}>{user.email}</Text>
        </View>

        <View style={{ gap: 12 }}>
          <Item
            title="Editar perfil"
            icon="edit"
            onPress={() => router.push("/(protected)/edit-profile")}
          />
          <Item
            title="Seguridad"
            icon="lock"
            onPress={() => router.push("/(protected)/security")}
          />
          <Item
            title="Configuración"
            icon="settings"
            onPress={() => router.push("/(protected)/settings")}
          />
          <Item
            title="Ayuda"
            icon="help-circle"
            onPress={() => router.push("/(protected)/help")}
          />
          <Item
            title="Cerrar sesión"
            icon="log-out"
            onPress={() => router.push("/(protected)/(modals)/logout")}
          />
        </View>
      </View>

      {/* Fijo abajo */}
      <View style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
        <BottomNav />
      </View>
    </View>
  );
}