

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  StatusBar,
  FlatList,
} from 'react-native';

import {
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import CP from './ColorPalette';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from './Header.js';
import Footer from './Footer';

const todos = [
  { id: 1, text: 'steak', completed: false, highlighted: false },
  { id: 2, text: 'beer', completed: false, highlighted: false },
  { id: 3, text: 'grapes', completed: false, highlighted: false },
  { id: 4, text: 'bread', completed: false, highlighted: false },
  { id: 5, text: 'milk', completed: false, highlighted: false },
  { id: 6, text: 'cheese', completed: false, highlighted: false },
  { id: 7, text: 'butter', completed: false, highlighted: false },
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      text: '',
    };
  }

  componentDidMount() {
    this.setState({
      data: todos
    });
  }

  handleChange(text) {
    this.setState({
      text: text,
    });
  }
  add_todo = text => {
    // adds a new todo to the items array.
    const newToDo = {
      id: (this.state.data.length + 1),
      text: this.state.text,
      completed: false,
      highlighted: false,
    }
    let dataCopy = this.state.data;
    if (!text) {
      return null;
    } else {
      dataCopy.push(newToDo);
      this.setState({
        data: dataCopy,
        text: '',
      });
    }
  }

  delete_todo = id => {
    // delete a todo
    const filtered_list = this.state.data.filter(item => {
      return (item.id !== id)
    });
    this.setState({
      data: filtered_list
    });
  }

  highlight_todo = (id, h) => {
    // Switches the star Icon to solid.
    let state = this.state.data;
    const toggle_icon = this.state.data.map( todo => {
      if(todo.id === id && h == false) { todo.highlighted = true }
      else if(todo.id === id && h == true) {todo.highlighted = false}
    });
    this.setState({
      [state]: toggle_icon
    });
  }

  render() {
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <Header />
        <View style={styles.body}>
          <View style={styles.form}>
            <View style={[styles.form_input, styles.align_from_content]}>
              <Icon
                color={CP.gray}
                style={{ flexDirection: 'column', alignSelf: 'center' }}
                name='ios-add'
                size={30}
              />
              <View style={styles.flex_col_ctr}>
                <TextInput
                  style={styles.text_input}
                  placeholder="Add your todo here!"
                  value={this.state.text}
                  onChangeText={text => this.handleChange(text)}
                />
              </View>
            </View>
            <View style={styles.button}>
              <Button
                color={CP.granny_apple}
                onPress={() => { this.add_todo(this.state.text); }}
                title="Add Todo"
              />
            </View>
          </View>
          <View>
            <SafeAreaView>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={this.state.data}
                renderItem={({ item, index }) => {
                  return (<View style={styles.card}>
                    <View style={styles.toDoGroup}>
                      <Icon style={styles.closeIcon} name="ios-close" size={30} onPress={() => { this.delete_todo(item.id); }} />
                      <View style={styles.flex_col_ctr}>
                        <Text>
                          {item.text}
                        </Text>
                      </View>
                    </View>
                    <Icon style={styles.flex_col_ctr}
                      name={item.highlighted ? "ios-star" : "ios-star-outline"}
                      size={20}
                      onPress={() => { this.highlight_todo(item.id, item.highlighted); }} />
                  </View>);
                }}
                extraData={this.state}
              />
            </SafeAreaView>
          </View>
        </View>
        <Footer />
      </>
    );
  }
}

const styles = StyleSheet.create({

  body: {
    flex: 1,
    backgroundColor: CP.moon_glow,
    // marginTop: 50,
    paddingTop: 6,
  },
  form: {
    padding: 10,
  },
  form_input: {
    height: 50,
    paddingLeft: 10,
    backgroundColor: CP.bermuda,
  },
  ios_add: {
    marginRight: 20,
  },
  text_input: {
    paddingLeft: 20,
  },
  align_from_content: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  button: {
    marginTop: 10,
    color: CP.granny_apple,
    backgroundColor: CP.juniper,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: CP.ocean_green,
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 10,
    padding: 10,
  },
  toDoGroup: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  closeIcon: {
    paddingRight: 20,
  },
  flex_col_ctr: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default App;