import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import {
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';

const MainHomescreen = ({ navigation }) => {

  return (
    <View
      style={{
        backgroundColor: '#FFF',
        flex: 1,
      }}>
      <View
        style={{
          backgroundColor: '#4b5cb3',
          height: '28%',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          paddingHorizontal: 20,
        }}>
        <Image
          source={require('../assets/1.png')}
          style={{
            height: 10,
            width: 20,
            marginTop: 50,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 25,
            width: '100%',
          }}>
          <View style={{ width: '50%' }}>
            <Text
              style={{
                fontSize: 28,
                color: '#FFF',
                fontWeight: 'bold',
              }}>
              Welcome
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#FFF',
                fontWeight: 'bold',
              }}>
              To protect and to serve
            </Text>
          </View>
          <View style={{ width: '50%', alignItems: 'flex-end' }}>
            <Image
              source={require('../assets/logo-removebg.png')}
              style={{ height: 60, width: 60 }}
            />
          </View>
        </View>
      </View>
      <LinearGradient
        colors={['#4b5cb3', 'transparent']}
        style={{
          left: 0,
          right: 0,
          height: 90,
          marginTop: -45,
        }}>
        <View
          style={{
            backgroundColor: '#FFF',
            paddingVertical: 8,
            paddingHorizontal: 20,
            marginHorizontal: 20,
            borderRadius: 15,
            marginTop: 25,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <TextInput
            placeholder="Search"
            placeholderTextColor="#4b5cb3"
            style={{
              fontWeight: 'bold',
              fontSize: 18,
              width: 260,
            }}
          />
          <Image
            source={require('../assets/3.png')}
            style={{ height: 20, width: 20 }}
          />
        </View>
      </LinearGradient>

      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          width: '100%',
          alignItems: 'center',
        }}>
        <View style={{ width: '60%' }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: '#585a61',
            }}>
            Aims and Objectives
          </Text>
          <View
            style={{
              height: 4,
              backgroundColor: '#b1e5d3',
              width: 115,
              marginTop: 5,
            }}></View>
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ height: 400 }}>
        <LinearGradient
          colors={['rgba(0,164,109,0.09)', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            height: 100,
            marginTop: 220,
            top: 0,
          }}
        />
        <TouchableOpacity
          //onPress={()=>navigation.navigate("Detail")}
          style={{
            height: 250,
            elevation: 2,
            backgroundColor: '#FFF',
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,
            width: 160,
          }}>
          <Image source={require('../assets/toserve_190x160.jpg')} />
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 10,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Your Safety
            </Text>
          </View>
          <View style={{ width: '70%', alignItems: 'flex-end', marginTop: 20 }}>
            <View
              style={{
                backgroundColor: '#00a46c',
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 15,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: '#FFF',
                }}>
                Read More
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View
          // onPress={()=>navigation.navigate("Detail")}
          style={{
            height: 250,
            elevation: 2,
            backgroundColor: '#FFF',
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,
            width: 160,
          }}>
          <Image source={require('../assets/toprotect_160x160.jpg')} />
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 10,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              To protect
            </Text>
          </View>
          <View style={{ width: '70%', alignItems: 'flex-end', marginTop: 20 }}>
            <View
              style={{
                backgroundColor: '#00a46c',
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 15,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: '#FFF',
                }}>
                Read More
              </Text>
            </View>
          </View>
        </View>

        <View
          // onPress={()=>navigation.navigate("Detail")}
          style={{
            height: 250,
            elevation: 2,
            backgroundColor: '#FFF',
            marginLeft: 20,
            marginTop: 20,
            borderRadius: 15,
            marginBottom: 10,

            width: 160,
          }}>
          <Image source={require('../assets/toserve_190x160.jpg')} />
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 10,
              paddingHorizontal: 10,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
              }}>
              Law & Order
            </Text>
          </View>
          <View style={{ width: '70%', alignItems: 'flex-end', marginTop: 20 }}>
            <View
              style={{
                backgroundColor: '#00a46c',
                paddingHorizontal: 20,
                paddingVertical: 5,
                borderRadius: 15,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 13,
                  color: '#FFF',
                }}>
                Read More
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          width: '100%',
          alignItems: 'center',
          marginTop: -80,
        }}>
        <View style={{ width: '50%' }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 17,
              color: '#585a61',
            }}>
            Future Plans
          </Text>
          <View
            style={{
              height: 4,
              backgroundColor: '#b1e5d3',
              width: 115,
              marginTop: 5,
            }}></View>
        </View>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginBottom: -100 }}>
        <Image
          source={require('../assets/go-green-earth_190x185.jpg')}
          style={{ marginTop: 20, marginHorizontal: 20 }}
        />
        <Image
          source={require('../assets/save-the-citty_190x185.jpg')}
          style={{ marginTop: 20, borderRadius: 10 }}
        />
      </ScrollView>
    </View>
  
  );
};
export default MainHomescreen;
