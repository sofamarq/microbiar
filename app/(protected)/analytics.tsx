// app/(protected)/analytics.tsx
import { View, Text } from "react-native";
import { colors } from "../../components/theme";
import BottomNav from "../../components/BottomNav";  
import BackHeader from "../../components/BackHeader";

export default function Analytics() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      {/* Header con botón atrás */}
      <BackHeader title="Indicadores" />

      {/* Contenido */}
      <View style={{ flex: 1, padding: 18 }}>
        <Text>Pronto: métricas clínicas y gráficos.</Text>
      </View>

      {/* Menú inferior */}
      <BottomNav />
    </View>
  );
}