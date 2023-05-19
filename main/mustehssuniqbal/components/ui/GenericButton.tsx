import { color } from '@rneui/themed/dist/config';
import { Button } from 'react-native-paper';

const GenericButton = ({
    title, 
    onPress,
    icon,
    color
}: any) => {
    return (
        <Button 
            onPress={onPress}
            icon={icon}
            mode="contained-tonal"
            buttonColor={color}
            dark={true}
        >{title}</Button>
    );
};

export default GenericButton;