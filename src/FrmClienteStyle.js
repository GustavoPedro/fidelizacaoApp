
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        backgroundColor:'#f4f4f4',
    },
    containerData: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    input: {
        backgroundColor: '#ffffff',
        paddingLeft: 15,
        paddingRight: 15,
        marginBottom: 20,
    },
    data: {
        backgroundColor: '#ffffff',
        paddingLeft: 15,
        width: 250,
        marginRight: 15,
    },
    btnData: {
        marginTop: 10,
    },
    btnCadastrar: {
        marginTop:20,
        width:10,
    }
});

export default styles;