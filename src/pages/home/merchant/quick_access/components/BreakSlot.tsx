import { StyleSheet, Text, View } from "react-native";

interface IProps {
  startTime: Date;
  endTime: Date;
}

const parseTime = (time: Date) => {
  return (
    time.getHours().toString().padStart(2, "0") +
    " : " +
    time.getMinutes().toString().padStart(2, "0")
  );
};

const BreakSlot = (props: IProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {parseTime(props.startTime)}
        {"  "}to{"  "}
        {parseTime(props.endTime)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 16,
    backgroundColor: "white",
    marginHorizontal: 8,
    marginVertical: 4,
  },

  label: {
    color: "black",
  },
});

export default BreakSlot;
