import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../screen/search/Search";
import Home from "../screen/home/Home";
import Notification from "../screen/notifications/Notification";
import Profile from "../screen/profile/Profile";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

const homeName = 'Home'
const searchName = 'Search'
const notificationName  = 'Notification'
const profileName = 'Profile'


export default function MyTabs() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: "#fff" }}
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        let rn = route.name;

        if(rn ===homeName){
          iconName = focused ? 'home-filled' : "home-filled"
        }
        else if(rn === searchName){
          iconName = focused ? 'search' : "search"
        }
        else if(rn === notificationName){
          iconName = focused ? 'notifications' : "notifications"
        }
        else if(rn === profileName){
          iconName = focused ? 'person' : "person"
        }

        return <Icon name={iconName}  size={30} color={color}  />
      } 
    })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarInactiveTintColor: 'black', tabBarShowLabel: false}}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{tabBarInactiveTintColor: 'black', tabBarShowLabel: false,}}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{tabBarInactiveTintColor: 'black', tabBarShowLabel: false, headerShown: false,}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{tabBarInactiveTintColor: 'black', tabBarShowLabel: false, headerShown: false}}   
      />
    </Tab.Navigator>
  );
}
