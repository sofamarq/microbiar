import { useState } from "react";
import { View, Text, TextInput, Alert } from "react-native";
import { colors } from "../../components/theme";
import BackHeader from "../../components/BackHeader";
import BottomNav from "../../components/BottomNav";
import { PrimaryButton } from "../../components/ui"; // si no lo tenés, reemplazá por tu botón

const mock = {
  nombre: "Juan",
  apellido: "Pérez",
  nacimiento: "1992-08-15",
  email: "juan@example.com",
  telefono: "+54 9 11 5555-5555",
};

const Field = ({ label, value, onChangeText, editable = true }: any) => (
  <View style={{ marginBottom: 12 }}>
    <Text style={{ fontWeight: "800", color: colors.text, marginBottom: 6 }}>{label}</Text>
    <TextInput
      value={value}
      editable={editable}
      onChangeText={onChangeText}
      style={{
        backgroundColor: editable ? "#fff" : "#F3F4F6",
        borderWidth: 1, borderColor: "#DAE9DF", borderRadius: 12,
        paddingHorizontal: 12, height: 44, color: colors.text,
      }}
    />
  </View>
);

export default function EditProfile() {
  const [email, setEmail] = useState(mock.email);
  const [phone, setPhone] = useState(mock.telefono);

  const onSave = () => {
    // acá harías el update real contra backend/Firebase
    Alert.alert("Listo", "Datos de cuenta actualizados (fake).");
  };

  return (
  <View style={{ flex: 1, backgroundColor: colors.bg }}>
    <BackHeader title="Editar Perfil" />

    {/* Contenido principal; sumo paddingBottom para no chocar con el menú */}
    <View style={{ flex: 1, padding: 18, paddingBottom: 96 }}>
      <Field label="Nombre" value={mock.nombre} editable={false} />
      <Field label="Apellido" value={mock.apellido} editable={false} />
      <Field label="Fecha de nacimiento" value={mock.nacimiento} editable={false} />
      <Field label="Teléfono" value={phone} onChangeText={setPhone} />
      <Field label="Mail" value={email} onChangeText={setEmail} />
      <PrimaryButton title="Actualizar Perfil" onPress={onSave} />
    </View>

    {/* Menú fijo al fondo */}
    <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
      <BottomNav />
    </View>
  </View>
);
}

