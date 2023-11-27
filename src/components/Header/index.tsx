import { Image, Text, View } from 'react-native'
import { styles } from './styles'

export function Header(){
    return(
        <View style={styles.header}>
            <Image source={require('../../../assets/logo.png')} style={styles.logo}/>
            <View style={styles.logoText} >
                <Text style={{color:"#4EA8DE", fontSize:50, fontWeight:"900"}}>to</Text>
                <Text style={{color:"#5E60CE", fontSize:50, fontWeight:"900"}}>do</Text>
            </View>
        </View>
    )
}