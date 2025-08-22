import { View, Text } from "react-native";
import { colors } from "../../components/theme";
import BottomNav from "../../components/BottomNav";
import BackHeader from "../../components/BackHeader";

export default function Microbiota() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <BackHeader title="Microbiota" />

      <View style={{ flex: 1, padding: 18 }}>
        <Text>Pronto: evolución de la microbiota con gráficos.</Text>
      </View>

      <BottomNav />
    </View>
  );
}