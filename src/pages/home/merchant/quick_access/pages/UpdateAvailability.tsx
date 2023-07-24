import { Pressable, StyleSheet, Text, View } from "react-native";
import { useHomeState } from "@pages/home/HomeState";
import { useFocusEffect } from "@react-navigation/native";
import React, { useState } from "react";
import { Switch } from "react-native";
import { ITime } from "@/types/common_types";
import RNDateTimePicker, {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { parseHour } from "@utils/Utils";
import BreakSlot from "@pages/home/merchant/quick_access/components/BreakSlot";

const UpdateAvailability = () => {
  const { setHomeState } = useHomeState();

  useFocusEffect(
    React.useCallback(() => {
      setHomeState((prevState) => ({ ...prevState, showTabBarHeader: false }));
    }, [])
  );

  const [isServiceOpen, setIsServiceOpen] = useState(true);

  const [onBreak, setOnBreak] = useState(true);

  const [openingTime, setOpeningTime] = useState<ITime>({
    hours: "09",
    minutes: "00",
    tod: "AM",
  });

  const [closingTime, setClosingTime] = useState<ITime>({
    hours: "05",
    minutes: "00",
    tod: "PM",
  });

  const onOpeningClosingTimePress = (type: "opening" | "closing") => {
    DateTimePickerAndroid.open({
      value: new Date(),
      onChange: (event: DateTimePickerEvent, date?: Date) =>
        onOpeningClosingTimeChange(type, event, date),
      mode: "time",
      is24Hour: true,
    });
  };

  const onOpeningClosingTimeChange = (
    type: "opening" | "closing",
    event: DateTimePickerEvent,
    date?: Date
  ) => {
    if (event.type !== "set") return;

    const hours = date!.getHours().toString();
    const min = date!.getMinutes().toString();

    if (type === "opening") setOpeningTime({ hours: hours, minutes: min });
    else setClosingTime({ hours: hours, minutes: min });
  };

  return (
    <View style={styles.container}>
      {/*Service open and working status switches*/}
      <View style={{ width: "100%" }}>
        <View style={[styles.singleLine, styles.openToggleContainer]}>
          <Text style={styles.bigLabel}>
            Service {isServiceOpen ? "Open" : "Closed"}{" "}
            <Text style={{ fontWeight: "normal" }}>
              ({openingTime.hours.padStart(2, "0")}:
              {openingTime.minutes.padStart(2, "0")} to{" "}
              {closingTime.hours.padStart(2, "0")}:
              {closingTime.minutes.padStart(2, "0")})
            </Text>
          </Text>
          <Switch
            style={{}}
            value={isServiceOpen}
            onValueChange={(v) => setIsServiceOpen(v)}
          />
        </View>

        <View style={[styles.singleLine, styles.openToggleContainer]}>
          <Text style={styles.bigLabel}>
            {!onBreak ? "On Break" : "Currently Working"}
          </Text>
          <Switch
            style={{}}
            value={onBreak}
            onValueChange={(v) => setOnBreak(v)}
          />
        </View>
      </View>

      {/*Full working hours and break slots*/}
      <View style={styles.availabilityContainer}>
        {/*Full working hours*/}
        <View style={styles.singleLine}>
          <Text style={styles.bigLabel}>Full Working Hours</Text>
          <Pressable onPress={() => onOpeningClosingTimePress("opening")}>
            <Text style={[styles.label, styles.timeLabel]}>
              {openingTime.hours.padStart(2, "0")} :{" "}
              {openingTime.minutes.padStart(2, "0")}
            </Text>
          </Pressable>
          <Text style={styles.label}>to</Text>
          <Pressable onPress={() => onOpeningClosingTimePress("closing")}>
            <Text style={[styles.label, styles.timeLabel]}>
              {closingTime.hours.padStart(2, "0")} :{" "}
              {closingTime.minutes.padStart(2, "0")}
            </Text>
          </Pressable>
        </View>
        {/*Break Slots*/}
        <View style={{}}>
          <Text style={styles.bigLabel}>Break Slots</Text>
          <View style={styles.breakSlotsContainer}>
            <BreakSlot startTime={new Date()} endTime={new Date()} />
            <BreakSlot startTime={new Date()} endTime={new Date()} />
            <BreakSlot startTime={new Date()} endTime={new Date()} />
            <View style={styles.addBreakSlotButton}>
              <Text
                style={[styles.label, { color: "white", fontWeight: "normal" }]}
              >
                Add
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/*Package Availability*/}
      <View style={styles.availabilityContainer}>
        <Text style={styles.bigLabel}>Change Availability Of Packages</Text>
        <Text style={styles.notFound}>No Packages Found.</Text>
      </View>

      {/*Workers availability*/}
      <View style={styles.availabilityContainer}>
        <Text style={styles.bigLabel}>Change Availability Of Workers</Text>
        <Text style={styles.notFound}>No Workers Found.</Text>
      </View>
    </View>
  );
};

export default UpdateAvailability;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 16,
  },

  singleLine: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },

  bigLabel: {
    fontWeight: "bold",
    color: "black",
    fontSize: 18,
    marginHorizontal: 8,
  },

  label: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
    marginHorizontal: 8,
  },

  openToggleContainer: {
    justifyContent: "space-between",
  },

  timeLabel: {
    backgroundColor: "white",
    fontWeight: "normal",
    padding: 2,
    borderRadius: 4,
  },

  notFound: {
    color: "grey",
    marginHorizontal: 16,
    marginVertical: 8,
  },

  availabilityContainer: {
    padding: 8,
    marginVertical: 16,
    borderRadius: 16,
    minHeight: 100,
    backgroundColor: "rgb(242,242,242)",
  },

  breakSlotsContainer: {
    flexWrap: "wrap",
    padding: 16,
    flexDirection: "row",
  },

  addBreakSlotButton: {
    padding: 4,
    borderRadius: 8,
    backgroundColor: "black",
    marginHorizontal: 8,
    marginVertical: 4,
    justifyContent: "center",
  },
});
