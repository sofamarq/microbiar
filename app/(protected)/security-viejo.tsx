import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import BackHeader from "../../components/BackHeader";
import BottomNav from "../../components/BottomNav";
import { colors } from "../../components/theme";
import { router } from "expo-router";
import { PrimaryButton } from "../../components/ui";

const Field = ({ label, value, onChangeText, secureTextEntry = false }: any) => (
  <View style={{ marginBottom: 12 }}>
    <Text style={{ fontWeight: "800", color: colors.text, marginBottom: 6 }}>{label}</Text>
    <TextInput
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={{ backgroundColor: "#fff", borderWidth: 1, borderColor: "#DAE9DF", borderRadius: 12, paddingHorizontal: 12, height: 44 }}
    />
  </View>
);

export default function Security() {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");

  const onChange = () => {
    if (!next || next !== confirm) return;
    // acá harías el update real
    router.push("/(protected)/password-changed");
  };

  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <BackHeader title="Seguridad" />
      <View style={{ padding: 18 }}>
        <Field label="Contraseña actual" value={current} onChangeText={setCurrent} secureTextEntry />
        <Field label="Nueva contraseña" value={next} onChangeText={setNext} secureTextEntry />
        <Field label="Confirmar nueva contraseña" value={confirm} onChangeText={setConfirm} secureTextEntry />
        <PrimaryButton title="Cambiar contraseña" onPress={onChange} />
      </View>
      <BottomNav />
    </View>
  );
}