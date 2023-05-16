const { Text, Button } = require("react-native");

const Card = ({title, onClick}: any) => {
    return (
        <>
            <Button onPress={onClick}
            title={title} />
        </>
    );
};

export default Card;