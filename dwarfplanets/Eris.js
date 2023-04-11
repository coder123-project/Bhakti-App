import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Dp from '../screens/Home';

export default function Eris() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require('../assets/eris.png')}
          style={styles.iconImage}></Image>
        <Text style={styles.paragraph}>
          Eris (minor-planet designation 136199 Eris) is the most massive and
          second-largest known dwarf planet in the Solar System. It is a
          trans-Neptunian object (TNO) in the scattered disk and has a
          high-eccentricity orbit. Eris was discovered in January 2005 by a
          Palomar Observatory–based team led by Mike Brown and verified later
          that year. In September 2006, it was named after the Greco–Roman
          goddess of strife and discord. Eris is the ninth-most massive known
          object orbiting the Sun and the sixteenth-most massive overall in the
          Solar System (counting moons). It is also the largest object that has
          not been visited by a spacecraft. Eris has been measured at 2,326 ± 12
          kilometers (1,445 ± 7 mi) in diameter; its mass is 0.28% that of the
          Earth and 27% greater than that of Pluto, although Pluto is slightly
          larger by volume, both having a surface area that is comparable to the
          area of Russia or Antarctica.
        </Text>

        <Text style={styles.text2}>
          Eris has one large known moon, Dysnomia. In February 2016, Eris's
          distance from the Sun was 96.3 AU (14.41 billion km; 8.95 billion mi),
          more than three times that of Neptune or Pluto. With the exception of
          long-period comets, Eris and Dysnomia were the most distant known
          natural objects in the Solar System until the discovery of 2018 VG18
          in 2018.
        </Text>
        <Text style={styles.text2}>
          Because Eris appeared to be larger than Pluto, NASA initially
          described it as the Solar System's tenth planet. This, along with the
          prospect of other objects of similar size being discovered in the
          future, motivated the International Astronomical Union (IAU) to define
          the term planet for the first time. Under the IAU definition approved
          on August 24, 2006, Eris, Pluto and Ceres are "dwarf planets",
          reducing the number of known planets in the Solar System to eight, the
          same as before Pluto's discovery in 1930. Observations of a stellar
          occultation by Eris in 2010 showed that it was slightly smaller than
          Pluto, which was measured by New Horizons as having a mean diameter of
          2,377 ± 4 kilometers (1,477 ± 2 mi) in July 2015.
        </Text>

        <TouchableOpacity
          style={styles.routeCard}
          onPress={() => this.props.navigation.navigate(Dp)}>
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
