import { List } from "react-native-paper";
import { FlatList } from "react-native";

const GenericList = ({
    data,
    getTitle,
    getDescription,
    getIcon,
    onItemPress,
    evenItemColor,
    oddItemColor
}: any) => {
    if(onItemPress == null) {
        onItemPress = (item: any) => {};
    }
    let optionalEvenItemProp = {};
    let optionalOddItemProp = {};
    if(evenItemColor != null) {
        optionalEvenItemProp = {
            style: {
                backgroundColor: evenItemColor
            }
        };
    }
    if(oddItemColor != null) {
        optionalOddItemProp = {
            style: {
                backgroundColor: oddItemColor
            }
        };
    }
    const addBackgroundColor = (index: number) => {
        if(index%2 == 0 && evenItemColor != null) {
            return { style: { backgroundColor: evenItemColor } };
        }
        else if(index%2 != 0 && oddItemColor != null) {
            return { style: { backgroundColor: oddItemColor } };
        }
        else {
            return {};
        }
    };

    return (
        <FlatList
            data={data}
            renderItem={({item, index}) => {
                console.log("item: ", index);
                const backgroundColorProp = addBackgroundColor(index);

                return (
                    <List.Item
                        title={getTitle(item)}
                        description={getDescription == null? "": getDescription(item)}
                        left={props => getIcon == null? <></>: <List.Icon {...props} icon={getIcon(item)} />}
                        onPress={onItemPress == null? () => {}: () => onItemPress(item)}
                        {...backgroundColorProp}
                    />
                );
            }} 
        />
    );
};

export default GenericList;