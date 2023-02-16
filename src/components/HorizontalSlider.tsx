import {FlatList, Text, View} from 'react-native';

import {Movie} from '../interfaces/movieinterface';
import {MoviePoster} from './MoviePoster';
import React from 'react';

interface Props {
  title?: string;
  movies: Movie[];
}
export const HorizontalSlider = ({movies, title}: Props) => {
  return (
    <View style={{height: title ? 260 : 220}}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginLeft: 10,
            color: 'black',
          }}>
          {title}
        </Text>
      )}
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <MoviePoster movie={item} width={140} height={200} />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
