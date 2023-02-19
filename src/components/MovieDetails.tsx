import {FlatList, Text, View} from 'react-native';

import {Cast} from '../interfaces/creditsinterface';
import {CastItem} from './CastItem';
import Icon from 'react-native-vector-icons/Ionicons';
import {MovieFull} from '../interfaces/movieinterface';
import React from 'react';
import currencyFormatter from 'currency-formatter';

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
        <Text
          style={{
            color: 'black',
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Historia
        </Text>
        <Text style={{color: 'black', fontSize: 16}}>{movieFull.overview}</Text>
        <Text
          style={{
            color: 'black',
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Presupuesto
        </Text>
        <Text style={{color: 'black', fontSize: 16}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            color: 'black',
            fontSize: 23,
            marginTop: 10,
            fontWeight: 'bold',
            marginHorizontal: 20,
          }}>
          Actores
        </Text>
        <FlatList
          data={cast}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <CastItem actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10, height: 70}}
        />
        {/* <CastItem actor={cast[0]} /> */}
      </View>
    </>
  );
};
