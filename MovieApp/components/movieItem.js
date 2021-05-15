import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { IMG_URL } from '@env';

const MovieItem = ({ movieInfo, navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.contentContainer}
        onPress={() => navigation.navigate('Info', { movieInfo: movieInfo })}
        testID="movieItem">
        <Image
          style={styles.image}
          source={{ uri: `${IMG_URL}${movieInfo.poster_path}` }}
          testID="poster"
        />
        <View style={styles.content}>
          <Text style={styles.title}>{movieInfo.title}</Text>
          <View style={styles.rating}>
            <AirbnbRating
              defaultRating={movieInfo.vote_average / 2}
              size={20}
              isDisabled
              showRating={false}
            />
          </View>
          <Text style={styles.text}>
            {movieInfo.overview.slice(0, 100) + '...'}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: 125,
    backgroundColor: '#222222',
    borderRadius: 5,
    width: '95%',
    margin: 8,
  },
  image: {
    width: '25%',
    borderRadius: 5,
  },
  content: {
    justifyContent: 'space-around',
    paddingLeft: 8,
    padding: 5,
    width: '75%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    maxWidth: '97%',
    maxHeight: 24,
    color: 'white',
  },
  text: {
    color: 'white',
    maxHeight: '50%',
    maxWidth: '95%',
    overflow: 'hidden',
  },
  rating: {
    width: '48%',
  },
});

export default MovieItem;
