import React from "react";
import {View,Text, StyleSheet, TextInput} from 'react-native';
import COLORS from "../colors";
const Input =({
    label,
    password,
    ...props
}) => {
    return <View style={{marginBottom: 20}}>
        <Text style={style.label} >{label}</Text>
        <View style={[style.inputContainer]}>
        <TextInput
          autoCorrect={false}
          style={{color: COLORS.darkBlue, flex: 1}}
          {...props}
        />
        </View>
    </View>
};
const style = StyleSheet.create({
    label: {
        marginVertical:5,
        fontSize: 14,
        color: COLORS.grey,
    },
    inputContainer: {
        height: 55,
        backgroundColor: COLORS.light,
        flexDirection: 'row',
        paddingHorizontal: 15,
        borderWidth: 0.5,
        alignItems: 'center',
        borderRadius: 5,
    },
})
export default Input;