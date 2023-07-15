import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/utils/GlobalStyles";
import Icons from "@/utils/Icons";
import { AvailableServices } from "@/utils/AvalilableServices";
import PrimaryButton from "@/components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import { SignUpStackNavigation } from "./SignUpIndex";

const AvailableService = (props: {
  id: number;
  icon: any;
  title: string;
  onSelect?: (id: number) => void;
  onDeselect?: (id: number) => void;
  selected?: boolean;
}) => {
  return (
    <Pressable
      onPress={() =>
        props.selected
          ? props.onDeselect
            ? props.onDeselect(props.id)
            : null
          : props.onSelect
          ? props.onSelect(props.id)
          : null
      }
    >
      <View style={availableServiceStyles.container}>
        <Image source={props.icon} style={availableServiceStyles.image} />
        <Text
          style={[
            availableServiceStyles.title,
            props.selected ? { fontWeight: "bold" } : null,
          ]}
        >
          {props.title}
        </Text>
        {props.selected ? (
          <Image
            source={Icons.tickBox}
            style={availableServiceStyles.selectedBadge}
          />
        ) : null}
      </View>
    </Pressable>
  );
};

const ServicesProvided = () => {
  const navigation = useNavigation<SignUpStackNavigation>();

  const [selectedServices, setSelectedServices] = useState<number[]>([]);

  const onServiceSelect = (id: number) => {
    setSelectedServices([...selectedServices, id]);
  };

  const onServiceDeselect = (id: number) => {
    setSelectedServices(selectedServices.filter((v) => v != id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select the services provided by you</Text>
      <View style={styles.availableServices}>
        {AvailableServices.All.map((v, ind) => (
          <AvailableService
            key={ind}
            id={v.id}
            icon={v.icon_150}
            title={v.name}
            selected={selectedServices.includes(v.id)}
            onSelect={onServiceSelect}
            onDeselect={onServiceDeselect}
          />
        ))}
      </View>

      <PrimaryButton
        onPress={() => navigation.navigate("merchant_details")}
        label="Continue"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
  },

  availableServices: {
    marginVertical: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  heading: {
    fontSize: 27,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0.5,
  },
});

const availableServiceStyles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
    maxWidth: 132,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 4,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
  },
  selectedBadge: {
    position: "absolute",
    top: 0,
    right: -16,
    width: 36,
    height: 36,
  },
});

export default ServicesProvided;
