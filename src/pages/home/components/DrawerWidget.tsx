import Icons from "@utils/Icons";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import {
  DrawerActions,
  StackActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import Icon from "react-native-vector-icons/FontAwesome5";

import { Pressable, View, Text, Image, StyleSheet } from "react-native";
import {
  HomeDrawerScreenProps,
  HomeTabScreenProps,
  RootStackScreenProps,
} from "@/types/route_types";
import HomeTabNavigation from "@pages/home/client/HomeTabNavigation";
import { useHomeState } from "@pages/home/HomeState";
import home from "@pages/home/Home";

interface IDrawerProps {
  title: string;
  route: "Home" | "Maps" | "Appointments" | "Chats" | "Settings";
  subScreen?: "Upcoming" | "Pending" | "Previous" | "Dashboard";
  icon: any;
}

const MDrawerItem = (props: IDrawerProps) => {
  const navigation =
    useNavigation<HomeDrawerScreenProps<"DrawerRoot">["navigation"]>();
  const route = useRoute<HomeDrawerScreenProps<"DrawerRoot">["route"]>();

  const { homeState } = useHomeState();

  return (
    <Pressable
      onPress={() => {
        if (props.route === "Home") {
          navigation.navigate("DrawerRoot", {
            screen: "Home",
            params: {
              screen: "Dashboard",
              params: { userId: "guest" },
            },
          });
        } else if (props.route === "Appointments") {
          navigation.navigate("DrawerRoot", {
            screen: "Appointments",
            params: {
              screen: props.subScreen ?? "Upcoming",
            },
          });
        } else if (props.route === "Settings") {
          navigation.navigate(props.route, {
            userId: homeState.userRole ?? "guest",
          });
        } else {
          navigation.navigate("DrawerRoot", {
            screen: props.route,
            params: undefined,
          });
        }
      }}
    >
      <View style={styles.item}>
        <View style={styles.flex}>
          <Image style={{ width: 24, height: 24 }} source={props.icon} />
          <Text style={styles.itemTitle}>{props.title}</Text>
        </View>
        <Icon name="chevron-right" size={16} color={"black"} />
      </View>
    </Pressable>
  );
};

function DrawerWidget(props: any) {
  const navigation =
    useNavigation<HomeDrawerScreenProps<"DrawerRoot">["navigation"]>();
  const rootNavigation =
    useNavigation<RootStackScreenProps<"Home">["navigation"]>();

  const { homeState } = useHomeState();

  return (
    <DrawerContentScrollView {...props} style={{ padding: 16 }}>
      <View style={styles.header}>
        <View style={styles.flex}>
          <Icon
            style={{ marginRight: 16 }}
            color={"black"}
            name="user-circle"
            size={24}
          />
          <Text style={styles.heading}>{homeState.userName}</Text>
        </View>
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Image style={styles.icon} source={Icons.cross} />
        </Pressable>
      </View>

      <View style={styles.items}>
        <Text style={{ marginVertical: 8, fontWeight: "bold", color: "black" }}>
          MAIN MENU
        </Text>
        <MDrawerItem title="Dashboard" icon={Icons.home} route="Home" />
        {homeState.userRole !== "merchant" ? (
          <View>
            <MDrawerItem title="Search" icon={Icons.search} route="Home" />
            <MDrawerItem
              title="Show Nearby Services"
              icon={Icons.map}
              route="Maps"
            />
          </View>
        ) : null}
        <MDrawerItem
          title="Upcoming Appointments"
          icon={Icons.calender}
          route="Appointments"
          subScreen="Upcoming"
        />
        <MDrawerItem
          title="Previous Appointments"
          icon={Icons.history}
          route={"Appointments"}
          subScreen={"Previous"}
        />
        <MDrawerItem
          title="Notifications"
          icon={Icons.notifications}
          route="Home"
        />
        <MDrawerItem
          title="Settings"
          icon={Icons.settings}
          route={"Settings"}
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
    color: "black",
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
    color: "black",
  },
});

export default DrawerWidget;
