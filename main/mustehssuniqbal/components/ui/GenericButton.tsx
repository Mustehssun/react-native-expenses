import { color } from '@rneui/themed/dist/config';
import { Button } from 'react-native-paper';

const GenericButton = ({
    title, 
    onPress,
    icon,
    color,
    textColor
}: any) => {
    return (
        <Button 
            onPress={onPress}
            icon={icon}
            mode="contained-tonal"
            buttonColor={color}
            dark={true}
            style={{borderRadius: 0}}
        >{title}</Button>
    );
};

export default GenericButton;