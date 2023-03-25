import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import AddItem from './components/AddItem';
import ListItems from './components/ListItems';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default function App() {
    const [list, setList] = useState([]);
    const addItem = (text) => {
        const newItem = { 
            id: uuidv4(),
            task: text,
        };
    setList([newIterm, ...list]);
    };
    const DeleteItem = (id) => {
        const newList = list.filter ((item) => item.id !== id);
        setList(newList);
    };

return (
<View style={styles.container}>
    <Text>Todo List</Text>
    <AddItem addItem={addItem}></AddItem>
    <ListItems deleteItem={DeleteItem} listItems={list}></ListItems>
    <StatusBar style="auto" />
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
});