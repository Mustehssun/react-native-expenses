import { List } from "react-native-paper";
import { FlatList } from "react-native";

const GenericList = ({
    data,
    getTitle,
    getDescription,
    getIcon,
    onItemPress
}: any) => {
    if(onItemPress == null) {
        onItemPress = (item: any) => {};
    }

    return (
        <FlatList
            data={data}
            renderItem={({item}) => (
                <List.Item
                    title={getTitle(item)}
                    description={getDescription(item)}
                    left={props => <List.Icon {...props} icon={getIcon(item)} />}
                    onPress={() => onItemPress(item)}
                />
            )} 
        />
    );
};

export default GenericList;