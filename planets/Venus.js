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

export default function Venus() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require('../assets/venus.png')}
          style={styles.iconImage}></Image>
        <Text style={styles.paragraph}>
          Venus is the second planet from the Sun. It is sometimes called
          Earth's "sister" or "twin" planet as it is almost as large and has a
          similar composition. As an interior planet to Earth, Venus (like
          Mercury) appears in Earth's sky never far from the Sun, either as
          morning star or evening star. Aside from the Sun and Moon, Venus is
          the brightest natural object in Earth's sky, capable of casting
          visible shadows on Earth in dark conditions and being visible to the
          naked eye in broad daylight.
        </Text>

        <Text style={styles.text2}>
          Venus is the second largest terrestrial object of the Solar System. It
          has a surface gravity slightly lower than on Earth and has a weak
          induced magnetosphere. The atmosphere of Venus consists mainly of
          carbon dioxide, and, at the planet’s surface, is the densest and
          hottest of the atmospheres of the four terrestrial planets. With an
          atmospheric pressure at the planet's surface of about 92 times the sea
          level pressure of Earth and a mean temperature of 737 K (464 °C; 867
          °F), the carbon dioxide gas at Venus's surface is a supercritical
          fluid. Venus is shrouded by an opaque layer of highly reflective
          clouds of sulfuric acid, making it the planet with the highest albedo
          in the Solar System. It may have had water oceans in the past, but
          after these evaporated the temperature rose under a runaway greenhouse
          effect. The possibility of life on Venus has long been a topic of
          speculation but research has not produced convincing evidence thus
          far.
        </Text>
        <Text style={styles.text2}>
          Like Mercury, Venus does not have any moons. Solar days on Venus, with
          a length of 117 Earth days, are just about half as long as its solar
          year, orbiting the Sun every 224.7 Earth days. This Venusian daylength
          is a product of it rotating against its orbital motion, halving its
          full sidereal rotation period of 243 Earth days, the longest of all
          the Solar System planets. Venus and Uranus are the only planets with
          such a retrograde rotation, making the Sun move in their skies from
          their western horizon to their eastern. The orbit of Venus around the
          Sun is the closest to Earth's orbit, bringing them closer than any
          other pair of planets. This occurs during inferior conjunction with a
          synodic period of 1.6 years. However, Mercury is more frequently the
          closest to each.
        </Text>
        <Text style={styles.text2}>
          The orbits of Venus and Earth result in the lowest gravitational
          potential difference and lowest delta-v needed to transfer between
          them than to any other planet. This has made Venus a prime target for
          early interplanetary exploration. It was the first planet beyond Earth
          that spacecraft were sent to, starting with Venera 1 in 1961, and the
          first planet to be reached, impacted and in 1970 successfully landed
          on by Venera 7. As one of the brightest objects in the sky, Venus has
          been a major fixture in human culture for as long as records have
          existed. It has been made sacred to gods of many cultures, gaining its
          mainly used name from the Roman goddess of love and beauty which it is
          associated with. Furthermore, Venus has been a prime inspiration for
          writers, poets and scholars. Venus was the first planet to have its
          motions plotted across the sky, as early as the second millennium BCE.
          Plans for better exploration with rovers or atmospheric missions,
          potentially crewed, at levels with almost Earth-like conditions have
          been proposed.
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
