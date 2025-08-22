import { useState } from "react";
import { View, Text, Switch } from "react-native";
import BackHeader from "../../components/BackHeader";
import BottomNav from "../../components/BottomNav";
import { colors } from "../../components/theme";

const Row = ({ label, value, onChange }: any) => (
  <View style={{ backgroundColor: "#fff", borderRadius: 14, padding: 14, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
    <Text style={{ color: colors.text }}>{label}</Text>
    <Switch value={value} onValueChange={onChange} trackColor={{ false: "#d1d5db", true: "#86efac" }} thumbColor={value ? "#22c55e" : "#f9fafb"} />
  </View>
);

export default function Settings() {
  const [notif, setNotif] = useState(true);
  const [sound, setSound] = useState(false);

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <BackHeader title="Configuración" />
      <View style={{ padding: 18 }}>
        <Row label="Notificaciones generales" value={notif} onChange={setNotif} />
        <Row label="Sonido" value={sound} onChange={setSound} />
      </View>
      <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
            <BottomNav />
        </View>
    </View>
  );
}