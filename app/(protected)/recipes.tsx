import { View, Text } from "react-native";
import { colors } from "../../components/theme";
import BottomNav from "../../components/BottomNav";
import BackHeader from "../../components/BackHeader";

export default function Recipes() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <BackHeader title="Recetario" />

      <View style={{ flex: 1, padding: 18 }}>
        <Text>Pronto: recetas saludables preparadas por nutricionistas.</Text>
      </View>

      <BottomNav />
    </View>
  );
}