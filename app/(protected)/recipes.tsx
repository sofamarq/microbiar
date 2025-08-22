import { View, Text, ScrollView, Pressable } from "react-native";
import { router } from "expo-router";
import BackHeader from "../../components/BackHeader";
import BottomNav from "../../components/BottomNav";
import { colors } from "../../components/theme";
import { Feather } from "@expo/vector-icons";

type Recipe = { id: string; title: string; note?: string; time?: string };

const mockRecipes: Recipe[] = [
  { id: "1", title: "Pastel de papa", note: "Para 4 porciones", time: "45 min" },
  { id: "2", title: "Ensalada de quinoa", note: "Alta en proteína vegetal", time: "20 min" },
  { id: "3", title: "Sopa de calabaza", note: "Ideal para invierno", time: "35 min" },
];

function Item({ r }: { r: Recipe }) {
  return (
    <Pressable
      onPress={() => router.push(`/(protected)/recipe-detail?id=${r.id}`)}
      style={{
        backgroundColor: "#fff",
        borderRadius: 16,
        padding: 14,
        marginBottom: 10,
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
      }}
    >
      {/* Icono: usar uno válido de Feather */}
      <View
        style={{
          width: 44, height: 44, borderRadius: 22,
          backgroundColor: "#EAF7EF", alignItems: "center", justifyContent: "center",
        }}
      >
        <Feather name="book-open" size={20} color={colors.primary} />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{ color: colors.text, fontWeight: "800", fontSize: 16 }}>{r.title}</Text>
        {(r.note || r.time) && (
          <Text style={{ color: "#6B7280", marginTop: 2 }} numberOfLines={1}>
            {r.note ?? ""}{r.note && r.time ? " · " : ""}{r.time ?? ""}
          </Text>
        )}
      </View>

      <Feather name="chevron-right" size={20} color="#9CA3AF" />
    </Pressable>
  );
}

export default function Recipes() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <BackHeader title="Recetario" back />
      <ScrollView contentContainerStyle={{ padding: 18, paddingBottom: 110 }} showsVerticalScrollIndicator={false}>
        {mockRecipes.map((r) => <Item key={r.id} r={r} />)}
      </ScrollView>
      <BottomNav />
    </View>
  );
}