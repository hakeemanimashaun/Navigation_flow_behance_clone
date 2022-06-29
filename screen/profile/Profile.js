import {
  findNodeHandle,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Modal,
  TouchableHighlight,
  Dimensions,
  Animated,
  FlatList,
} from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import React, {
  useEffect,
  useRef,
  useState,
  createRef,
  forwardRef,
} from "react";
import Icon from "react-native-vector-icons/Fontisto";
import MoreIcon from "react-native-vector-icons/MaterialIcons";
import PlusIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Work from "./Work";
import MoodBoards from "./MoodBoards";
import Drafts from "./Drafts";
import About from "./About";
import Statistics from "./modals/Statistics";
import Followers from "./modals/Followers";
import Following from "./modals/Following";
import { Colors } from "../../utils/INDEX";
const { width, height } = Dimensions.get("screen");

const FirstRoute = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Work />
    </View>
  );
};
const SecondRoute = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <About />
    </View>
  );
};
const ThirdRoute = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <MoodBoards />
    </View>
  );
};
const FourthRoute = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Drafts />
    </View>
  );
};

const screens = {
  Work: FirstRoute(),
  About: SecondRoute(),
  MoodBoards: ThirdRoute(),
  Drafts: FourthRoute(),
};

const data = Object.keys(screens).map((i) => ({
  key: i,
  title: i,
  screen: screens[i],
}));

const title = {
  0: "Work",
  1: "About",
  2: "MoodBoards",
  3: "Drafts",
};

const headers = Object.keys(title).map((i) => ({
  headermap: i,
  header: title[i],
}));

const Profile = ({ navigation }) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(3);
  const ref = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [followerVisible, setFollowerVisible] = useState(false);
  const [followingVisible, setFollowingVisible] = useState(false);

  const details = {
    name: "Hakeem Animashaun",
  };

  useEffect(() => {
    console.log(index);
    ref.current.scrollToIndex({
      index,
      animated: true,
    });
  }, [index]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.toolbar}>
          <TouchableOpacity style={styles.toolsetting}>
            <Icon name="player-settings" size={25} color={"#fff"} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolMoreOptions}>
            <MoreIcon name="more-horiz" size={25} color={"#fff"} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.bannerButton}>
          <PlusIcon name="plus-circle" size={20} color={"#fff"} />
          <Text style={styles.bannerText}>Add a Banner Image</Text>
        </TouchableOpacity>
      </View>
      <TouchableHighlight style={styles.imageCircle}>
        <View style={styles.imageContainer}></View>
      </TouchableHighlight>
      <View style={styles.nameView}>
        <Text style={styles.nameText}>{details.name}</Text>
      </View>
      <View style={styles.profileButtonView}>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => setModalVisible(true)}
        >
          <Icon name="like" size={12} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => setFollowerVisible(true)}
        >
          <PlusIcon name="account-arrow-left" size={14} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => setFollowingVisible(true)}
        >
          <PlusIcon name="account-arrow-right" size={14} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 40,
          width: "100%",
          backgroundColor: Colors.primary_Color,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        {headers.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => {
                for (let i = 0; i < 4; i++) {
                  item.headermap == i ? setIndex(i) : null;
                }
              }}
              style={{
                borderRadius: 50,
                backgroundColor:
                  item.headermap == index ? Colors.black : Colors.primary_Color,
                height: 40,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color:
                    item.headermap == index
                      ? Colors.primary_Color
                      : Colors.black,
                  marginHorizontal: 8,
                }}
              >
                {item.header}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <FlatList
        ref={ref}
        data={data}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => {
          return (
            <View style={{ width: width }}>
              <View style={styles.flatlistView}></View>
              {item.screen}
            </View>
          );
        }}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        bounces={false}
        initialScrollIndex={index}
        getItemLayout={(data, index) => ({
          length: 214,
          offset: 390 * index,
          index,
        })}
        scrollEnabled={false}
      />

      <Modal visible={modalVisible}>
        <Statistics closeModal={() => setModalVisible(false)} />
      </Modal>
      <Modal visible={followerVisible}>
        <Followers closeModal={() => setFollowerVisible(false)} />
      </Modal>
      <Modal visible={followingVisible}>
        <Following closeModal={() => setFollowingVisible(false)} />
      </Modal>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 50,
    height: 150,
    backgroundColor: Colors.dark_grey,
  },
  toolbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  toolsetting: {
    padding: 2.5,
  },
  toolMoreOptions: {
    padding: 2.5,
  },
  bannerButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },
  bannerText: {
    color: Colors.primary_Color,
    marginLeft: 10,
    fontStyle: "italic",
  },
  imageCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: Colors.primary_Color,
    position: "absolute",
    alignSelf: "center",
    top: 130,
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 120,
    height: 120,
    backgroundColor: Colors.Secondary_Color,
    borderRadius: 70,
    position: "absolute",
    alignSelf: "center",
    zIndex: 1,
  },
  nameView: {
    paddingTop: 80,
    backgroundColor: Colors.primary_Color,
  },
  nameText: {
    alignSelf: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  profileButtonView: {
    flexDirection: "row",
    backgroundColor: Colors.primary_Color,
    justifyContent: "center",
  },
  profileButton: {
    margin: 2.5,
    padding: 10,
  },
  flatlistView: {
    position: "absolute",
    backgroundColor: "blue",
    zIndex: 1,
  },
});
