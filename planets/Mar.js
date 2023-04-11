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

export default function Mars() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          source={require('../assets/mars.png')}
          style={styles.iconImage}></Image>
        <Text style={styles.paragraph}>
          Mars is the fourth planet from the Sun and the second-smallest planet
          in the Solar System, larger only than Mercury. In the English
          language, Mars is named for the Roman god of war. Mars is a
          terrestrial planet with a thin atmosphere and has a crust primarily
          composed of elements similar to Earth's crust, as well as a core made
          of iron and nickel. Mars has surface features such as impact craters,
          valleys, dunes, and polar ice caps. Mars has two small, irregularly
          shaped moons, Phobos and Deimos.
        </Text>

        <Text style={styles.text2}>
          Some of the most notable surface features on Mars include Olympus
          Mons, the largest volcano and highest-known mountain in the Solar
          System, and Valles Marineris, one of the largest canyons in the Solar
          System. The Borealis basin in the Northern Hemisphere covers
          approximately 40% of the planet and may be a large impact feature.
          Days and seasons on Mars are comparable to those of Earth, as the
          planets have a similar rotation period and tilt of the rotational axis
          relative to the ecliptic plane. Liquid water on the surface of Mars
          cannot exist due to low atmospheric pressure, which is less than 1% of
          the atmospheric pressure on Earth. Both of Mars's polar ice caps
          appear to be made largely of water. In the distant past, Mars was
          likely wetter, and thus possibly more suited for life. It is not known
          whether life has ever existed on Mars.
        </Text>
        <Text style={styles.text2}>
          Mars has been explored by several uncrewed spacecraft, beginning with
          Mariner 4 in 1965. NASA's Viking 1 lander transmitted the first images
          from the Martian surface in 1976. Two countries have successfully
          deployed rovers on Mars, the United States first doing so with
          Sojourner in 1997 and China with Zhurong in 2021. There are also
          planned future missions to Mars, such as a NASA-ESA Mars Sample Return
          set to happen in 2026, and the Rosalind Franklin rover mission, which
          was intended to launch in 2018 but was delayed to 2024 at the
          earliest, with a more likely launch date at 2028.
        </Text>
        <Text style={styles.text2}>
          Mars can be viewed from Earth with the naked eye, as can its reddish
          coloring. This appearance, due to the iron oxide prevalent on its
          surface, has led to Mars often being called the Red Planet. It is
          among the brightest objects in Earth's sky, with an apparent magnitude
          that reaches −2.94, comparable to that of Jupiter and surpassed only
          by Venus, the Moon and the Sun. Mars has been observed since ancient
          times. Over the millennia it has been featured in culture and the arts
          in ways that have reflected humanity's growing knowledge of it.
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
