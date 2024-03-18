import { 
 Text,
 View, 
 SafeAreaView,
 TextInput, 
 StyleSheet,
 TouchableOpacity
 } from 'react-native';



export default function App() {
  return (
   <SafeAreaView style = {styles.container}>
   <View style = {{paddingHorizontal:25}}>
     <View style = {{alignItems: 'center'}}>
        <View style={styles.icon}>
       <View style = {styles.icon2}>
       </View>
      </View>
     </View>
      <Text style = {styles.loginText}> Login </Text>

      <View style={styles.design}>
        <TextInput 
          placeholder = "Email" 
          style = {styles.inputDesign}
          keyboardType = 'email-address'/>
      </View>
      <View style={styles.design}>
        <TextInput 
          placeholder = "Password "
          style = {styles.inputDesign}
          secureTextEntry = {true} /> 
      </View>

          <TouchableOpacity>
            <Text 
            style = {{
              color: "green", 
              fontWeight: '300', 
              textAlign: 'right',
              marginTop: 3
              }}> 
              Forgot Password?
             </Text>  
          </TouchableOpacity> 

              <TouchableOpacity 
              style = {{ 
                backgroundColor: 'green', 
                padding: 10,
                borderRadius: 5, 
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 15
                }}>
                <Text
                style = 
                {{
                  color: 'white',
                  fontWeight: 500
                }}
                > Login 
                </Text>
              </TouchableOpacity>

                  <Text style = {{marginTop: 50, textAlign: 'center'}}> Don't have an account? <Text style = {styles.textcolor}> Sign Up</Text></Text>
   </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  icon: {
    height: 150,
    width: 150,
    backgroundColor: 'green',
    borderRadius: 75,
    marginBottom: 30,
    marginTop: 40
  },
  icon2: {
    height: 75,
    width: 75,
    backgroundColor: 'white'
  },
  loginText: {
    fontSize: 28,
    fontFamily: 'Poppins',
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center'
  },
  design:{
    marginBottom: 15,
    padding: 5,
    borderBottomWidth: 1,
    color: 'gray'
    
  },
  inputDesign: {
    padding: 10
  },
  textcolor: {
    color: 'green'
  }
});
