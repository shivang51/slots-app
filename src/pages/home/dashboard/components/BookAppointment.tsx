import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import { Calendar, DateData } from "react-native-calendars";
import { Theme } from "react-native-calendars/src/types";
import { Colors } from "@utils/GlobalStyles";
import TextButton from "@components/TextButton";
import { ScrollView } from "react-native-gesture-handler";
import { Image } from "expo-image";
import { IEmployee, TPackageLocation } from "@/types/common_types";
import Icon from "react-native-vector-icons/Ionicons";
import { DummyEmployees } from "@utils/Dummy";
import PrimaryButton from "@components/PrimaryButton";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { HomeDashboardStackScreenProps } from "@/types/route_types";
import { useHomeState } from "@pages/home/HomeState";
import { parseHour } from "@utils/Utils";

const TimeSlot = (props: {
  id: number;
  from: number;
  to: number;
  onPress: (id: number, label: string) => void;
  selected?: boolean;
}) => {
  const [label, setLabel] = useState("");

  useEffect(() => {
    setLabel(parseHour(props.from) + " - " + parseHour(props.to));
  }, [props]);

  return (
    <Pressable onPress={() => props.onPress(props.id, label)}>
      <View
        style={{
          padding: 8,
          margin: 8,
          backgroundColor: props.selected ? Colors.black : Colors.lightgray,
          alignSelf: "flex-start",
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            // fontSize: 16,
            color: props.selected ? Colors.white : Colors.black,
          }}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
};

const TimeSlots = (props: {
  slots: [number, number][];
  onSlotSelect: (slot: string) => void;
}) => {
  const [selectedSlot, setSelectedSlot] = useState(0);

  const [showAll, setShowAll] = useState(false);

  const onSlotPress = (id: number, label: string) => {
    props.onSlotSelect(label);
    setSelectedSlot(id);
  };

  return (
    <View
      style={{
        margin: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: 8,
        }}
      >
        <Text style={styles.heading}>Select time slot</Text>
        <TextButton
          style={{ textDecorationLine: "none", fontWeight: "normal" }}
          label={showAll ? "Show Less" : "Show All"}
          onPress={() => setShowAll(!showAll)}
        />
      </View>

      <ScrollView horizontal={!showAll} style={{ maxHeight: 200 }}>
        <View
          style={{
            flexDirection: "row",
            flexWrap: showAll ? "wrap" : "nowrap",
          }}
        >
          {props.slots.map((v, ind) => (
            <TimeSlot
              key={ind}
              id={ind}
              from={v[0]}
              to={v[1]}
              selected={selectedSlot === ind}
              onPress={onSlotPress}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const AppointmentMode = (props: {
  label: string;
  mode: TAppointmentMode;
  selected: boolean;
  onPress: (mode: TAppointmentMode) => void;
}) => {
  return (
    <Pressable onPress={() => props.onPress(props.mode)}>
      <View
        style={{
          padding: 8,
          margin: 8,
          backgroundColor: props.selected ? Colors.black : Colors.lightgray,
          alignSelf: "flex-start",
          borderRadius: 8,
        }}
      >
        <Text
          style={{
            color: props.selected ? Colors.white : Colors.black,
          }}
        >
          {props.label}
        </Text>
      </View>
    </Pressable>
  );
};

const AppointmentModes = (props: {
  onModeChange: (mode: TAppointmentMode) => void;
}) => {
  const [mode, setMode] = useState<TAppointmentMode>("on-site");

  const onAppointmentPress = (mode: TAppointmentMode) => {
    props.onModeChange(mode);
    setMode(mode);
  };

  return (
    <View style={{ padding: 8, paddingHorizontal: 16 }}>
      <Text style={styles.heading}>Select appointment mode</Text>
      <View style={{ flexDirection: "row" }}>
        <AppointmentMode
          mode={"on-site"}
          label={"On Site"}
          selected={mode === "on-site"}
          onPress={onAppointmentPress}
        />
        <AppointmentMode
          mode={"home"}
          label={"Home"}
          selected={mode === "home"}
          onPress={onAppointmentPress}
        />
      </View>
    </View>
  );
};

type TAppointmentMode = "home" | "on-site";

const Employee = (props: {
  data: IEmployee;
  onPress: (id: number) => void;
  selected: boolean;
}) => {
  return (
    <Pressable onPress={() => props.onPress(props.data.id)}>
      <View
        style={{
          maxWidth: 75,
          minWidth: 75,
          maxHeight: 100,
          minHeight: 110,
          alignItems: "center",
          borderRadius: 16,
          padding: 8,
          margin: 4,
          backgroundColor: props.selected ? "black" : "transparent",
        }}
      >
        <Image
          source={{
            uri: props.data.imageURL,
          }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: "white",
            marginBottom: 4,
          }}
        />
        <Text
          style={{
            flexWrap: "wrap",
            textAlign: "center",
            color: props.selected ? Colors.white : Colors.black,
          }}
        >
          {props.data.name}
        </Text>
      </View>
    </Pressable>
  );
};

const Employees = (props: {
  employees: IEmployee[];
  onSelect: (id: number) => void;
}) => {
  const [selectedId, setSelectedId] = useState(-1);

  const onEmployeePress = (id: number) => {
    setSelectedId(id);
    props.onSelect(id);
  };

  return (
    <View style={{ margin: 8, paddingHorizontal: 8 }}>
      <Text style={styles.heading}>Available Employees</Text>
      <View style={{ flexDirection: "row", padding: 8 }}>
        <Pressable onPress={() => onEmployeePress(-1)}>
          <View
            style={{
              maxWidth: 70,
              minWidth: 70,
              maxHeight: 100,
              minHeight: 100,
              alignItems: "center",
              marginRight: 8,
              borderRadius: 16,
              padding: 8,
              backgroundColor: selectedId === -1 ? "black" : "transparent",
            }}
          >
            <Icon
              name={"person-circle-sharp"}
              size={50}
              color={selectedId === -1 ? Colors.white : Colors.black}
            />
            <Text
              style={{
                textAlign: "center",
                color: selectedId === -1 ? Colors.white : Colors.black,
              }}
            >
              Anyone
            </Text>
          </View>
        </Pressable>

        <ScrollView horizontal={true}>
          {props.employees.map((v, ind) => (
            <Employee
              key={ind}
              data={v}
              selected={selectedId === v.id}
              onPress={onEmployeePress}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const BookAppointment = ({
  navigation,
}: HomeDashboardStackScreenProps<"BookAppointment">) => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [appointmentMode, setAppointmentMode] =
    useState<TAppointmentMode>("on-site");
  const [employeeId, setEmployeeId] = useState(-1);

  const [forFriend, setForFriend] = useState(false);

  const current = new Date();
  const buffer = new Date();
  buffer.setDate(current.getDate() + 31);

  const { setHomeState } = useHomeState();
  useFocusEffect(
    React.useCallback(() => {
      setHomeState((prevState) => ({ ...prevState, hideTabBar: true }));
    }, []),
  );
  return (
    <View style={styles.container}>
      <ScrollView>
        <Calendar
          onDayPress={(day) => setSelectedDate(day.dateString)}
          theme={calenderTheme}
          markedDates={{ [selectedDate]: { selected: true } }}
          minDate={current.toString()}
          maxDate={buffer.toString()}
          enableSwipeMonths={true}
        />

        <TimeSlots
          slots={[
            [9, 10],
            [10, 11],
            [10, 12],
            [13, 14],
            [15, 16],
          ]}
          onSlotSelect={(slot: string) => setSelectedSlot(slot)}
        />

        <AppointmentModes onModeChange={(mode) => setAppointmentMode(mode)} />

        <Employees
          onSelect={(id) => setEmployeeId(id)}
          employees={DummyEmployees}
        />

        <BouncyCheckbox
          style={{ padding: 16, justifyContent: "center", width: "100%" }}
          fillColor={"black"}
          textStyle={{ textDecorationLine: "none", color: "black" }}
          isChecked={forFriend}
          onPress={() => setForFriend(!forFriend)}
          text={"This appointment is for a friend"}
          // style={styles.checkbox}
        />

        <View style={{ padding: 16 }}>
          <PrimaryButton
            onPress={() =>
              navigation.navigate(
                forFriend ? "FriendsDetails" : "ConfirmAppointment",
              )
            }
            label={forFriend ? "Enter friends details" : "Confirm Appointment"}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default BookAppointment;

const calenderTheme: Theme = {
  selectedDayBackgroundColor: "black",
  selectedDayTextColor: "white",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
