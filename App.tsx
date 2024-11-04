import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {PostsList} from "./assets/web/postList";
import {AddPostForm} from "./assets/web/addPostForm";

export default function App() {
    return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text>Search</Text><br/>
        <TextInput placeholder="Search"></TextInput><br/>
      </View>
      <View>
        <Button title={"Add"} onPress={()=>{<AddPostForm />}></Button>
      </View>
      <View>
        <Routes>
          <Route
              path="/"
              element={
                  <PostsList />
              }
          ></Route>
        </Routes>
      </View>
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
