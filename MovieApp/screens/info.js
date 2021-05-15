import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/Fontisto';
import { IMG_URL } from '@env';

const Info = ({ route }) => {
  const { movieInfo } = route.params;
  const posterUrl = `${IMG_URL}${movieInfo.poster_path}`;

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.image} source={{ uri: posterUrl }} />
        <View style={styles.topContent}>
          <Text style={styles.title}>{movieInfo.title}</Text>
          <Text style={styles.text}>Released: {movieInfo.release_date}</Text>
          <View style={styles.iconContainer}>
            <Icon name="imdb" size={30} style={styles.icon} />
            <Icon name="youtube-play" size={30} style={styles.icon} />
            <Icon name="netflix" size={30} style={styles.icon} />
          </View>
        </View>
      </View>
      <Text style={styles.text}>{movieInfo.overview}</Text>
      <AirbnbRating defaultRating={movieInfo.vote_average / 2} size={24} />
      <Text style={styles.rating}>
        Rating: {movieInfo.vote_average / 2} / 5
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#18191A',
    padding: 10,
  },
  top: {
    height: '40%',
    flexDirection: 'row',
  },
  topContent: {
    width: '50%',
    paddingLeft: 10,
  },
  text: {
    color: 'white',
    fontSize: 17,
    paddingTop: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'white',
  },
  image: {
    width: '50%',
    height: '100%',
    borderRadius: 5,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  icon: {
    color: '#900',
    paddingTop: 10,
    paddingRight: 10,
  },
  rating: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Info;
