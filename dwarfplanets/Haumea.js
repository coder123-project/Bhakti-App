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

export default function Haumea() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require('../assets/haumea.png')}
          style={styles.iconImage}></Image>
        <Text style={styles.paragraph}>
          Haumea (minor-planet designation 136108 Haumea) is a dwarf planet
          located beyond Neptune's orbit. It was discovered in 2004 by a team
          headed by Mike Brown of Caltech at the Palomar Observatory in the
          United States and disputably also in 2005 by a team headed by José
          Luis Ortiz Moreno at the Sierra Nevada Observatory in Spain, though
          the latter claim has been contested. On September 17, 2008, it was
          named after Haumea, the Hawaiian goddess of childbirth, under the
          expectation by the International Astronomical Union (IAU) that it
          would prove to be a dwarf planet. Nominal estimates make it the
          third-largest known trans-Neptunian object, after Eris and Pluto, and
          approximately the size of Uranus's moon Titania.
        </Text>

        <Text style={styles.text2}>
          Haumea's mass is about one-third that of Pluto, and 1/1400 that of
          Earth. Although its shape has not been directly observed, calculations
          from its light curve are consistent with it being a Jacobi ellipsoid
          (the shape it would be if it were a dwarf planet), with its major axis
          twice as long as its minor. In October 2017, astronomers announced the
          discovery of a ring system around Haumea, representing the first ring
          system discovered for a trans-Neptunian object. Haumea's gravity was
          until recently thought to be sufficient for it to have relaxed into
          hydrostatic equilibrium, though that is now unclear. Haumea's
          elongated shape together with its rapid rotation, rings, and high
          albedo (from a surface of crystalline water ice), are thought to be
          the consequences of a giant collision, which left Haumea the largest
          member of a collisional family that includes several large
          trans-Neptunian objects and Haumea's two known moons, Hiʻiaka and
          Namaka.
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
