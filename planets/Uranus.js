import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import TabScreen from '../screens/Feed';

export default function Uranus() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require('../assets/uri.png')}
          style={styles.iconImage}></Image>
        <Text style={styles.paragraph}>
          Uranus is the seventh planet from the Sun. It is named after Greek sky
          deity Uranus (Caelus), who in Greek mythology is the father of Cronus
          (Saturn), a grandfather of Zeus (Jupiter) and great-grandfather of
          Ares (Mars). Uranus has the third-largest planetary radius and
          fourth-largest planetary mass in the Solar System. The planet is
          similar in composition to Neptune, and both have bulk chemical
          compositions which differ from those of the other two giant planets,
          Jupiter and Saturn (the gas giants). For this reason, scientists often
          distinguish Uranus and Neptune as "ice giants".
        </Text>

        <Text style={styles.text2}>
          As with gas giants, ice giants lack a well-defined solid surface.
          Uranus's atmosphere is similar to Jupiter's and Saturn's in its
          primary composition of hydrogen and helium, but it contains more
          "ices" such as water, ammonia, and methane, along with traces of other
          hydrocarbons. It has the coldest planetary atmosphere in the Solar
          System, with a minimum temperature of 49 kelvins (−224 °C; −371 °F).
          It has a complex, layered cloud structure; water is thought to make up
          the lowest clouds and methane the uppermost layer. The planet's
          interior is mainly composed of ices and rock.
        </Text>
        <Text style={styles.text2}>
          Like the other giant planets, Uranus has a ring system, a
          magnetosphere, and numerous moons. The Uranian system has a unique
          configuration because its axis of rotation is tilted sideways, nearly
          into the plane of its solar orbit. Therefore, its north and south
          poles lie where most other planets have their equators. In 1986,
          images from Voyager 2 showed Uranus as an almost featureless planet in
          visible light, without the cloud bands or storms associated with the
          other giant planets. No other spacecraft has yet visited the planet.
          Observations from Earth have shown seasonal change and increased
          weather activity as Uranus approached its equinox in 2007, and, based
          on images by the Hubble Space Telescope, other such changes as well in
          2023. Wind speeds can reach 250 metres per second (900 km/h; 560 mph).
        </Text>

        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate(TabScreen)}>
          <Text style={styles.routeText}>Go Back!</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2f345d',
    padding: 8,
  },
  text2: {
    marginTop: 5,
    margin: 20,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  paragraph: {
    marginTop: 150,
    margin: 20,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  iconImage: {
    position: 'absolute',
    height: 150,
    width: 150,
    resizeMode: 'contain',
    right: 80,
    top: 1,
  },
  routeCard: {
    flex: 1,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 30,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  routeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 1,
    paddingLeft: 45,
    fontFamily: 'Alkatra',
  },
});
