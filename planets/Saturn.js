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

export default function Saturn() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require('../assets/seturn.png')}
          style={styles.iconImage}></Image>
        <Text style={styles.paragraph}>
          Saturn is the sixth planet from the Sun and the second-largest in the
          Solar System, after Jupiter. It is a gas giant with an average radius
          of about nine and a half times that of Earth. It has only one-eighth
          the average density of Earth, but is over 95 times more massive.
        </Text>

        <Text style={styles.text2}>
          Saturn's interior is most likely composed of a rocky core, surrounded
          by a deep layer of metallic hydrogen, an intermediate layer of liquid
          hydrogen and liquid helium, and finally, a gaseous outer layer. Saturn
          has a pale yellow hue due to ammonia crystals in its upper atmosphere.
          An electrical current within the metallic hydrogen layer is thought to
          give rise to Saturn's planetary magnetic field, which is weaker than
          Earth's, but which has a magnetic moment 580 times that of Earth due
          to Saturn's larger size. Saturn's magnetic field strength is around
          one-twentieth of Jupiter's. The outer atmosphere is generally bland
          and lacking in contrast, although long-lived features can appear. Wind
          speeds on Saturn can reach 1,800 kilometres per hour (1,100 miles per
          hour).
        </Text>
        <Text style={styles.text2}>
          The planet's most notable feature is its prominent ring system, which
          is composed mainly of ice particles, with a smaller amount of rocky
          debris and dust. At least 83 moons[29] are known to orbit Saturn, of
          which 53 are officially named; this does not include the hundreds of
          moonlets in its rings. Titan, Saturn's largest moon and the second
          largest in the Solar System, is larger (while less massive) than the
          planet Mercury and is the only moon in the Solar System to have a
          substantial atmosphere.
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
