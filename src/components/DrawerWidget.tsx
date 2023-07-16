import Icons from "@/utils/Icons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import {
  DrawerActions,
  StackActions,
  useNavigation,
} from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome5";

import { Pressable, View, Text, Image, StyleSheet } from "react-native";
import {
  HomeDrawerScreenProps,
  RootStackScreenProps,
} from "@/types/route_types";

interface IDrawerProps {
  title: string;
  screenName: string;
  icon: any;
}

const MDrawerItem = (props: IDrawerProps) => {
  const navigation =
    useNavigation<HomeDrawerScreenProps<"DrawerRoot">["navigation"]>();
  return (
    <Pressable
      onPress={
        () => null
        // navigation.navigate("DrawerRoot", { screen: props.screenName })
      }
    >
      <View style={styles.item}>
        <View style={styles.flex}>
          <Image style={{ width: 24, height: 24 }} source={props.icon} />
          <Text style={styles.itemTitle}>{props.title}</Text>
        </View>
        <Icon name="chevron-right" size={16} />
      </View>
    </Pressable>
  );
};

function DrawerWidget(props: any) {
  const navigation =
    useNavigation<HomeDrawerScreenProps<"DrawerRoot">["navigation"]>();
  const rootNavigation =
    useNavigation<RootStackScreenProps<"Home">["navigation"]>();
  return (
    <DrawerContentScrollView {...props} style={{ padding: 16 }}>
      <View style={styles.header}>
        <View style={styles.flex}>
          <Icon style={{ marginRight: 16 }} name="user-circle" size={24} />
          <Text style={styles.heading}>Guest</Text>
        </View>
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Image style={styles.icon} source={Icons.cross} />
        </Pressable>
      </View>

      <View style={styles.items}>
        <Text style={{ marginVertical: 8, fontWeight: "bold" }}>MAIN MENU</Text>
        <MDrawerItem title="Dashboard" icon={Icons.home} screenName="Home" />
        <MDrawerItem title="Search" icon={Icons.search} screenName="Home" />
        <MDrawerItem
          title="Show Nearby Services"
          icon={Icons.map}
          screenName="Maps"
        />
        <MDrawerItem
          title="Upcoming Appointments"
          icon={Icons.calender}
          screenName="appointments"
        />
        <MDrawerItem
          title="Previous Appointments"
          icon={Icons.history}
          screenName="appointments"
        />
        <MDrawerItem
          title="Account Settings"
          icon={Icons.settings}
          screenName="appointments"
        />
        <MDrawerItem
          title="Notifications"
          icon={Icons.notifications}
          screenName="appointments"
        />
        <Pressable
          style={{ marginVertical: 8 }}
          onPress={() => rootNavigation.replace("Landing")}
        >
          <View style={styles.flex}>
            <Image style={styles.icon} source={Icons.logout} />
            <Text style={styles.itemTitle}>Logout</Text>
          </View>
        </Pressable>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  icon: {
    width: 24,
    height: 24,
  },

  heading: {
    fontSize: 16,
    fontWeight: "bold",
  },

  items: {
    marginTop: 16,
  },

  item: {
    flexDirection: "row",
    marginVertical: 8,
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 8,
  },
  itemTitle: {
    fontSize: 16,
    marginLeft: 8,
    fontWeight: "500",
  },
});

export default DrawerWidget;
