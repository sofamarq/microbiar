import { Text, TextInput, Pressable, View, Image, type TextInputProps } from "react-native";
import { router } from "expo-router";
import { colors } from "./theme";

export function Field(props: TextInputProps & { label?: string }) {
  return (
    <View style={{ marginBottom: 12 }}>
      {props.label ? (
        <Text style={{ color: colors.text, fontWeight: "700", marginBottom: 6 }}>{props.label}</Text>
      ) : null}
      <TextInput
        placeholderTextColor="#9CA3AF"
        {...props}
        style={[
          {
            backgroundColor: "#F2F7F3",
            borderRadius: 14,
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderWidth: 1,
            borderColor: "#E3EEE7",
            color: colors.text
          },
          props.style
        ]}
      />
    </View>
  );
}

export function PrimaryButton({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => ({
        backgroundColor: pressed ? colors.primaryDark : colors.primary,
        borderRadius: 999,
        paddingVertical: 14,
        alignItems: "center",
        marginBottom: 10
      })}
    >
      <Text style={{ color: "white", fontWeight: "800" }}>{title}</Text>
    </Pressable>
  );
}

export function SecondaryButton({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: colors.pill,
        borderRadius: 999,
        paddingVertical: 14,
        alignItems: "center",
        marginBottom: 8
      }}
    >
      <Text style={{ color: colors.text, fontWeight: "800" }}>{title}</Text>
    </Pressable>
  );
}

export function AuthScaffold({
  title,
  children,
  back = false
}: {
  title: string;
  children: React.ReactNode;
  back?: boolean;
}) {
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      {/* Header verde */}
      <View style={{ backgroundColor: colors.primary, paddingTop: 60, paddingBottom: 60, alignItems: "center" }}>
        {back && (
          <Pressable
            onPress={() => router.back()}
            style={{
              position: "absolute",
              left: 16,
              top: 56,
              width: 36,
              height: 36,
              borderRadius: 18,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255,255,255,0.2)"
            }}
          >
            <Text style={{ color: "white", fontSize: 22, fontWeight: "800" }}>‹</Text>
          </Pressable>
        )}

        {/* Logo superior más chico */}
        <Image
          source={require("../assets/splash-2.png")}
          style={{ width: 110, height: 32, resizeMode: "contain" }}
        />

        {/* Título centrado */}
        <Text style={{ color: "white", fontWeight: "800", fontSize: 26, marginTop: 8, textAlign: "center" }}>
          {title}
        </Text>
      </View>

      {/* Tarjeta blanca */}
      <View
        style={{
          flex: 1,
          marginTop: -32,
          marginHorizontal: 18,
          backgroundColor: "#FFFFFF",
          borderRadius: 28,
          padding: 18,
          shadowColor: "#000",
          shadowOpacity: 0.06,
          shadowRadius: 12,
          shadowOffset: { width: 0, height: 6 }
        }}
      >
        {children}
      </View>

      {/* Logo inferior */}
      <View style={{ alignItems: "center", paddingVertical: 20 }}>
        <Image
          source={require("../assets/splash.png")}
          style={{ width: 160, height: 46, resizeMode: "contain" }}
        />
      </View>
    </View>
  );
}


//<View style={{ alignItems: "center", paddingVertical: 20 }}>
      //  <Image source={require("../assets/splash.png")} style={{ width: 160, height: 46, resizeMode: "contain" }} />