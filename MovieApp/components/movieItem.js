import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import { IMG_URL } from '@env';

const MovieItem = ({ movie, navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.contentContainer}
        onPress={() => navigation.navigate('Info')}>
        <Image
          style={styles.image}
          source={{ uri: `${IMG_URL}${movie.poster_path}` }}
        />
        <View style={styles.content}>
          <Text style={styles.title}>{movie.title}</Text>
          <View style={styles.rating}>
            <AirbnbRating
              defaultRating={movie.vote_average / 2}
              size={20}
              isDisabled
              showRating={false}
            />
          </View>
          <Text style={styles.text}>
            {movie.overview.slice(0, 100) + '...'}
          </Text>
        </View>
      </Pressable>
      {/* <View style={styles.divider} /> */}
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
  divider: {
    width: '80%',
    borderBottomWidth: 2,
    borderBottomColor: '#900',
  },
  rating: {
    width: '48%',
  },
});

export default MovieItem;
