import {createStackNavigator} from 'react-navigation';
import HomeScreen from "./Component/HomeScreen/homescreen";
import BloodGroup from "./Component/Blood Group/bloodgroup";
import Request from "./Component/Request/request";

var Red;
export default Red = createStackNavigator({

    HomeScreen: {screen: HomeScreen},
    BloodGroup: {screen: BloodGroup},
    Request: {screen: Request},

},
{
    initialRouteName: 'HomeScreen',
});