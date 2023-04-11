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

export default function Jupiter() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require('../assets/jupi.png')}
          style={styles.iconImage}></Image>
        <Text style={styles.paragraph}>
          Jupiter is the fifth planet from the Sun and the largest in the Solar
          System. It is a gas giant with a mass more than two and a half times
          that of all the other planets in the Solar System combined, and
          slightly less than one one-thousandth the mass of the Sun. Jupiter is
          the third brightest natural object in the Earth's night sky after the
          Moon and Venus, and it has been observed since prehistoric times. It
          was named after Jupiter, the chief deity of ancient Roman religion.
        </Text>

        <Text style={styles.text2}>
          Jupiter is primarily composed of hydrogen, followed by helium, which
          constitutes a quarter of its mass and a tenth of its volume. The
          ongoing contraction of Jupiter's interior generates more heat than the
          planet receives from the Sun. Because of its rapid rotation rate of 1
          rotation per 10 hours, the planet's shape is an oblate spheroid: it
          has a slight but noticeable bulge around the equator. The outer
          atmosphere is divided into a series of latitudinal bands, with
          turbulence and storms along their interacting boundaries. A prominent
          result of this is the Great Red Spot, a giant storm which has been
          observed since at least 1831.
        </Text>
        <Text style={styles.text2}>
          Jupiter is surrounded by a faint planetary ring system and has a
          powerful magnetosphere. The planet's magnetic tail is nearly 800
          million kilometres (5.3 astronomical units; 500 million miles) long.
          Jupiter has 95 known moons and probably many more, including the four
          large moons discovered by Galileo Galilei in 1610: Io, Europa,
          Ganymede, and Callisto. Ganymede, the largest of the four, is larger
          than the planet Mercury. Callisto is the second largest; Io and Europa
          are approximately the size of Earth's moon.
        </Text>
        <Text style={styles.text2}>
          Pioneer 10 was the first spacecraft to visit Jupiter, making its
          closest approach to the planet in December 1973. Jupiter has since
          been explored by multiple robotic spacecraft, beginning with the
          Pioneer and Voyager flyby missions from 1973 to 1979. The Galileo
          orbiter arrived in orbit around Jupiter in 1995. In 2007, New Horizons
          visited Jupiter for a gravity assist to increase its speed and bend
          its trajectory on the way to Pluto. The latest probe to visit Jupiter,
          Juno, entered its orbit in July 2016. Future targets for exploration
          in the Jupiter system include its moon Europa, which probably has an
          ice-covered liquid ocean which scientists think could sustain life.
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
