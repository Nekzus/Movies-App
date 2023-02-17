import {Text, View} from 'react-native';

import {Cast} from '../interfaces/creditsinterface';
import Icon from 'react-native-vector-icons/Ionicons';
import {MovieFull} from '../interfaces/movieinterface';
import React from 'react';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}
export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text style={{color: 'black'}}> {movieFull.vote_average}</Text>
          <Text style={{color: 'black', marginLeft: 5}}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
      </View>
    </>
  );
};
