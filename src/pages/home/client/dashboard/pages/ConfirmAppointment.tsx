import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Colors } from "@utils/GlobalStyles";
import Icons from "@utils/Icons";
import PrimaryButton from "@components/PrimaryButton";

const ConfirmAppointment = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Appointment with <Text style={styles.keyWord}>Belle Curls</Text> for{" "}
        <Text style={styles.keyWord}>Fade Haircut</Text>
      </Text>

      <Text style={{ fontSize: 18, marginVertical: 8, color: "black" }}>
        <Image source={Icons.calender} style={{ width: 24, height: 24 }} /> Date{" "}
        <Text style={styles.keyWord}>21st July, 2023</Text>
      </Text>

      <Text style={{ fontSize: 18, marginVertical: 8, color: "black" }}>
        <Image source={Icons.history} style={{ width: 24, height: 24 }} /> Time
        Slot <Text style={styles.keyWord}>11 AM - 12 PM</Text>
      </Text>

      <Text style={{ fontSize: 18, marginVertical: 8, color: "black" }}>
        <Image source={Icons.map} style={{ width: 24, height: 24 }} />{" "}
        Appointment Mode <Text style={styles.keyWord}>Home</Text>
      </Text>

      <Text style={{ fontSize: 18, marginVertical: 8, color: "black" }}>
        <Image source={Icons.person} style={{ width: 24, height: 24 }} />{" "}
        Employee Selected <Text style={styles.keyWord}>Harsh Banjare</Text>
      </Text>

      <PrimaryButton label={`Book for $50`} margin_top={16} />

      <Text style={styles.subTitle}>
        These are only appointment charges rest amount will be paid to the
        provider itself upon completion of the appointment
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    padding: 16,
  },

  notFound: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },

  heading: {
    fontSize: 24,
    marginVertical: 8,
    color: "black",
  },

  keyWord: {
    fontWeight: "bold",
    color: "black",
  },
  subTitle: {
    fontWeight: "400",
    textAlign: "center",
    padding: 8,
    color: Colors.gray,
  },
});

export default ConfirmAppointment;
