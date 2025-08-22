import { View, Text, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import BackHeader from "../../components/BackHeader";
import BottomNav from "../../components/BottomNav";
import { colors } from "../../components/theme";

const RECIPE_DB: Record<string, { title: string; subtitle?: string; ingredients: string[]; steps: string[] }> = {
  "1": {
    title: "Pastel de papa",
    subtitle: "Para 4 porciones · 45 min",
    ingredients: ["1 kg de papa", "500 g carne picada (o lentejas)", "1 cebolla", "Aceite, sal, pimienta"],
    steps: [
      "Hervir las papas y hacer puré.",
      "Saltear cebolla y carne/lentejas, condimentar.",
      "Armar capas de puré y relleno; hornear 20–25 min.",
    ],
  },
  "2": {
    title: "Ensalada de quinoa",
    subtitle: "Alta en proteína vegetal · 20 min",
    ingredients: ["1 taza de quinoa", "Tomate, pepino, palta", "Hojas verdes", "Limón, aceite, sal"],
    steps: ["Cocinar la quinoa y enfriar.", "Cortar vegetales.", "Mezclar y aliñar."],
  },
};

export default function RecipeDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const data = (id && RECIPE_DB[id]) || { title: "Receta", ingredients: [], steps: [] };

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <BackHeader title={data.title} back />

      <ScrollView contentContainerStyle={{ padding: 18, paddingBottom: 110 }}>
        {data.subtitle && (
          <View style={{ backgroundColor: "#EAF7EF", borderRadius: 18, padding: 14, marginBottom: 14 }}>
            <Text style={{ color: colors.text }}>{data.subtitle}</Text>
          </View>
        )}

        <View style={{ backgroundColor: "#fff", borderRadius: 18, padding: 16, marginBottom: 14 }}>
          <Text style={{ color: colors.text, fontWeight: "800", fontSize: 18, marginBottom: 8 }}>Ingredientes</Text>
          {data.ingredients.length ? (
            data.ingredients.map((ing, i) => (
              <Text key={i} style={{ color: "#4B5563", marginBottom: 6 }}>
                • {ing}
              </Text>
            ))
          ) : (
            <Text style={{ color: "#6B7280" }}>Sin ingredientes cargados.</Text>
          )}
        </View>

        <View style={{ backgroundColor: "#fff", borderRadius: 18, padding: 16 }}>
          <Text style={{ color: colors.text, fontWeight: "800", fontSize: 18, marginBottom: 8 }}>Indicaciones</Text>
          {data.steps.length ? (
            data.steps.map((st, i) => (
              <Text key={i} style={{ color: "#4B5563", marginBottom: 8 }}>
                {i + 1}. {st}
              </Text>
            ))
          ) : (
            <Text style={{ color: "#6B7280" }}>Sin pasos cargados.</Text>
          )}
        </View>
      </ScrollView>

      <BottomNav />
    </View>
  );
}