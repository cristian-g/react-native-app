// TableRow.js

import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

class TableRow extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                    <Text style={{marginBottom: 10}}>
                        {this.props.obj.description}
                    </Text>
                </View>
                <View style={{ flex: 1, alignSelf: 'stretch' }}>
                    <Text style={{marginBottom: 10}}>
                        {this.props.obj.quantity} €
                    </Text>
                </View>
            </View>
        );
    }
}

export default TableRow;