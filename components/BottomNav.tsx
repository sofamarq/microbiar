import { View, Pressable } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { router, usePathname } from "expo-router";

const TAB_BG = "#DFF5E7";
const PRIMARY = "#23C363";
const DARK = "#0E2A3B";

type Lib = "Feather" | "Material";
type Tab = { href: string; lib: Lib; icon: string };

const TABS: Tab[] = [
  { href: "/(protected)/home",       lib: "Feather",   icon: "home" },
  { href: "/(protected)/analytics",  lib: "Feather",   icon: "bar-chart-2" },

  // Microbiota (opciones sugeridas abajo)
  { href: "/(protected)/microbiota", lib: "Material",  icon: "virus-outline" },

  // Seguimiento emocional / reseñas (opciones sugeridas abajo)
  { href: "/(protected)/emotions",    lib: "Material",  icon: "clipboard-account-outline" },

  // Comida / Recetas
  { href: "/(protected)/recipes",    lib: "Material",  icon: "silverware-fork-knife" },
];

export default function BottomNav() {
  const path = usePathname();

  const renderIcon = (lib: Lib, name: string, color: string, size = 28) =>
    lib === "Feather" ? <Feather name={name as any} size={size} color={color} /> :
    <MaterialCommunityIcons name={name as any} size={size} color={color} />;

  return (
    <View style={{ paddingHorizontal: 18, paddingBottom: 18 }}>
      <View style={{ backgroundColor: TAB_BG, borderRadius: 28, padding: 14, flexDirection: "row", justifyContent: "space-between" }}>
        {TABS.map((t) => {
          const active = path === t.href;
          return (
            <Pressable
              key={t.href}
              onPress={() => router.push(t.href)}
              style={{
                width: 56, height: 56, borderRadius: 28,
                alignItems: "center", justifyContent: "center",
                backgroundColor: active ? "#BFEED1" : "transparent",
                borderWidth: active ? 2 : 0, borderColor: PRIMARY
              }}
            >
              {renderIcon(t.lib, t.icon, active ? PRIMARY : DARK)}
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}