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

export default function Makemake() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require('../assets/makemake.png')}
          style={styles.iconImage}></Image>
        <Text style={styles.paragraph}>
          Ceres (minor-planet designation: 1 Ceres) is a dwarf planet in the
          asteroid belt between the orbits of Mars and Jupiter. It was the first
          asteroid discovered, on 1 January 1801, by Giuseppe Piazzi at Palermo
          Astronomical Observatory in Sicily and announced as a new planet.
          Ceres was later classified as an asteroid and then a dwarf planet –
          the only one orbiting entirely within Neptune's orbit.
        </Text>

        <Text style={styles.text2}>
          Ceres's small size means that even at its brightest, it is too dim to
          be seen by the naked eye, except under extremely dark skies. Its
          apparent magnitude ranges from 6.7 to 9.3, peaking at opposition (when
          it is closest to Earth) once every 15- to 16-month synodic period. As
          a result, its surface features are barely visible even with the most
          powerful telescopes, and little was known about it until the robotic
          NASA spacecraft Dawn approached Ceres for its orbital mission in 2015.
        </Text>
        <Text style={styles.text2}>
          Dawn found Ceres's surface to be a mixture of water ice, and hydrated
          minerals such as carbonates and clay. Gravity data suggest Ceres to be
          partially differentiated into a muddy (ice-rock) mantle/core and a
          less dense but stronger crust that is at most 30% ice by volume.
          Although Ceres likely lacks an internal ocean of liquid water, brines
          still flow through the outer mantle and reach the surface, allowing
          cryovolcanoes such as Ahuna Mons to form roughly every fifty million
          years. This makes Ceres the closest known cryovolcanic body to the
          Sun, and the brines provide a potential habitat for microbial life.
        </Text>
        <Text style={styles.text2}>
          In January 2014, emissions of water vapour were detected around Ceres,
          creating a tenuous, transient atmosphere known as an exosphere. This
          was unexpected because vapour is usually a hallmark of comets, not
          asteroids.
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
