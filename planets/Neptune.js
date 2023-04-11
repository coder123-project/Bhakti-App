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

export default function Neptune() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require('../assets/naptune.png')}
          style={styles.iconImage}></Image>
        <Text style={styles.paragraph}>
          Neptune is the eighth planet from the Sun and the farthest known
          planet in the Solar System. It is the fourth-largest planet in the
          Solar System by diameter, the third-most-massive planet, and the
          densest giant planet. It is 17 times the mass of Earth, and slightly
          more massive than its near-twin Uranus. Neptune is denser and
          physically smaller than Uranus because its greater mass causes more
          gravitational compression of its atmosphere. Being composed primarily
          of gases and liquids, it has no well-defined solid surface. The planet
          orbits the Sun once every 164.8 years at an average distance of 30.1
          astronomical units (4.5 billion kilometres; 2.8 billion miles). It is
          named after the Roman god of the sea and has the astronomical symbol
          ♆, representing Neptune's trident.
        </Text>

        <Text style={styles.text2}>
          Neptune is not visible to the unaided eye and is the only planet in
          the Solar System found by mathematical prediction rather than by
          empirical observation. Unexpected changes in the orbit of Uranus led
          Alexis Bouvard to hypothesise that its orbit was subject to
          gravitational perturbation by an unknown planet. After Bouvard's
          death, the position of Neptune was predicted from his observations,
          independently, by John Couch Adams and Urbain Le Verrier. Neptune was
          subsequently observed with a telescope on 23 September 1846 by Johann
          Galle within a degree of the position predicted by Le Verrier. Its
          largest moon, Triton, was discovered shortly thereafter, though none
          of the planet's remaining 14 known moons were located telescopically
          until the 20th century. The planet's distance from Earth gives it a
          very small apparent size, making it challenging to study with
          Earth-based telescopes. Neptune was visited by Voyager 2, when it flew
          by the planet on 25 August 1989; Voyager 2 remains the only spacecraft
          to have visited Neptune. The advent of the Hubble Space Telescope and
          large ground-based telescopes with adaptive optics has recently
          allowed for additional detailed observations from afar.
        </Text>
        <Text style={styles.text2}>
          Like the gas giants (Jupiter and Saturn), Neptune's atmosphere is
          composed primarily of hydrogen and helium, along with traces of
          hydrocarbons and possibly nitrogen, but contains a higher proportion
          of ices such as water, ammonia and methane. Similar to Uranus, its
          interior is primarily composed of ices and rock; both planets are
          normally considered "ice giants" to distinguish them. Along with
          Rayleigh scattering, traces of methane in the outermost regions in
          part account for the planet's blue appearance. Newest data from the
          Gemini observatory shows the blue colour is more saturated than the
          one present on Uranus due to thinner haze of Neptune's more active
          atmosphere.
        </Text>

        <Text style={styles.text2}>
          In contrast to the hazy, relatively featureless atmosphere of Uranus,
          Neptune's atmosphere has active and visible weather patterns. For
          example, at the time of the Voyager 2 flyby in 1989, the planet's
          southern hemisphere had a Great Dark Spot comparable to the Great Red
          Spot on Jupiter. More recently, in 2018, a newer main dark spot and
          smaller dark spot were identified and studied. In addition, these
          weather patterns are driven by the strongest sustained winds of any
          planet in the Solar System, with recorded wind speeds as high as 2,100
          km/h (580 m/s; 1,300 mph). Because of its great distance from the Sun,
          Neptune's outer atmosphere is one of the coldest places in the Solar
          System, with temperatures at its cloud tops approaching 55 K (−218 °C;
          −361 °F). Temperatures at the planet's centre are approximately 5,400
          K (5,100 °C; 9,300 °F). Neptune has a faint and fragmented ring system
          (labelled "arcs"), which was discovered in 1984, then later confirmed
          by Voyager 2.
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
