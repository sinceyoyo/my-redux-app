/**
* React Native File
* created by wenqiang on 2018/3/28
*/
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'
import ContainerDecorators from '../../core/decorator/ContainerDecorator'
import BaseContainer from '../../core/container/BaseContainer'



const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        user: state.fetchReducers.user
    };
};

@ContainerDecorators(mapStateToProps)
export default class HomePage extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: '首页',
        }
    }

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        console.log(this.props)
        this.props.fetchData('https://randomuser.me/api/', (data) => {
            console.log('data', data)
        }, (data) => {

        })
    }

    render() {

        return (<View style={styles.container}>
            <Text>{this.props.user}</Text>
        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn: {
        margin: 10,
        paddingHorizontal: 30,
        paddingVertical: 10,
        backgroundColor: '#f00',
        borderRadius: 5
    },
    btnText: {
        color: 'white',
        fontSize: 16
    }
})


