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

export default function Pluto() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require('../assets/pluto.png')}
          style={styles.iconImage}></Image>
        <Text style={styles.paragraph}>
          Pluto (minor-planet designation: 134340 Pluto) is a dwarf planet in
          the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It is
          the ninth-largest and tenth-most-massive known object to directly
          orbit the Sun. It is the largest known trans-Neptunian object by
          volume, by a small margin, but is slightly less massive than Eris.
          Like other Kuiper belt objects, Pluto is made primarily of ice and
          rock and is much smaller than the inner planets. Pluto has only one
          sixth the mass of Earth's moon, and one third its volume.
        </Text>

        <Text style={styles.text2}>
          Pluto has a moderately eccentric and inclined orbit, ranging from 30
          to 49 astronomical units (4.5 to 7.3 billion kilometers; 2.8 to 4.6
          billion miles) from the Sun. Light from the Sun takes 5.5 hours to
          reach Pluto at its orbital distance of 39.5 AU (5.91 billion km; 3.67
          billion mi). Pluto's eccentric orbit periodically brings it closer to
          the Sun than Neptune, but a stable orbital resonance prevents them
          from colliding.
        </Text>
        <Text style={styles.text2}>
          Pluto has five known moons: Charon, the largest, whose diameter is
          just over half that of Pluto; Styx; Nix; Kerberos; and Hydra. Pluto
          and Charon are sometimes considered a binary system because the
          barycenter of their orbits does not lie within either body, and they
          are tidally locked. The New Horizons mission was the first spacecraft
          to visit Pluto and its moons, making a flyby on July 14, 2015 and
          taking detailed measurements and observations.
        </Text>
        <Text style={styles.text2}>
          Pluto was discovered in 1930, the first object in the Kuiper belt. It
          was immediately hailed as the ninth planet, but it was always the odd
          object out,[14]: 27  and its planetary status was questioned when it
          was found to be much smaller than expected. These doubts increased
          following the discovery of additional objects in the Kuiper belt
          starting in the 1990s, and particularly the more massive scattered
          disk object Eris in 2005. In 2006, the International Astronomical
          Union (IAU) formally redefined the term planet to exclude dwarf
          planets such as Pluto. Many planetary astronomers, however, continue
          to consider Pluto and other dwarf planets to be planets.
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
