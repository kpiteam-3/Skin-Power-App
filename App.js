import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';


export default class ProfileDetail extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.card, styles.profileCard]}> 
            <Image style={styles.avatar} source={{uri: "https://image.flaticon.com/icons/png/128/3254/3254069.png"}} />
            <Text  style={styles.name}>1,2-Hexanediol</Text>
          </View> 

          <View style={styles.card}>
            <Text style={styles.cardTittle}>Загальна інформація</Text>   
            <Text>Рейтинг: Відмінний</Text>   
            <Text>Категорія: Консерванти</Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTittle}>Опис</Text>   
            <Text>Синтетичний консервант та вологозв’язуючий засіб, що належить до класу речовин, відомих як вищі молекулярні гліколі.</Text>    
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTittle}>Синоніми</Text>   
            <Text>1,2-DIHYDROXYHEXANE, DL-HEXANE-1,2-DIOL</Text>    
          </View>

          <View style={styles.card}>
            <Text style={styles.cardTittle}>Як використовувати</Text>   
            <Text> - Сумісний з усіма типами шкіри</Text>
            <Text> - Не вимагає подальшого нанесення SPF</Text>
            <Text> - Може використовуватися разом з вітаміном С</Text>        
          </View>

          <View style={styles.photosCard}>
            <Text style={styles.photoTittle}>Продукти, що містять 1,2-Hexanediol</Text>   
            <View style={styles.photosContainer}>
              <Image style={styles.photo} source={{uri: "https://www.brocard.ua/media/catalog/product/cache/18f267265017fbb2a7bb09cdec08aa8e/image/1764552ae8/dior-lip-maximizer.jpg"}} />
              <Image style={styles.photo} source={{uri: "https://www.brocard.ua/media/catalog/product/cache/18f267265017fbb2a7bb09cdec08aa8e/image/220141a921/payot-nutricia.jpg"}} />
              <Image style={styles.photo} source={{uri: "https://s3.images-iherb.com/pky/pky68035/v/8.jpg"}} />
              <Image style={styles.photo} source={{uri: "https://all-face.com.ua/wp-content/uploads/Sredstvo-dlya-pilinga-The-Ordinary-AHA-30-BHA-2-Peeling-Solution-1.jpg"}} />
              <Image style={styles.photo} source={{uri: "https://www.brocard.ua/media/catalog/product/cache/18f267265017fbb2a7bb09cdec08aa8e/image/21289952fc/guerlain-meteorites.jpg"}} />
              <Image style={styles.photo} source={{uri: "https://s3.images-iherb.com/kls/kls02501/v/3.jpg"}} />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:10,
    paddingTop: 30,
    backgroundColor : "white",
  },
  cardTittle:{
    color:"#2E86C1",
    fontSize:22,
    marginBottom:5,
    fontWeight: 'bold',
  },
  photoTittle: {
    color:"black",
    fontSize:22,
    marginBottom:5,
    fontWeight: 'bold',
    marginLeft: 6,
    color:"#5D6D7E",
  },
  avatar:{
    width:90,
    height:90,
    marginTop: 25,
  },
  card:{
    backgroundColor: "#F2F3F4",
    borderRadius:10,
    padding:10,
    paddingTop: 10,
    height:100,
    marginTop:10,
  },
  profileCard:{
    height:200,
    alignItems: 'center',
    marginTop:20,
    backgroundColor: '#F2F3F4',
  },
  name:{
    fontSize:25,
    marginTop: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#5D6D7E',
  },
  photosContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 'auto',
    marginBottom:25,
    marginTop: 15,
  },
  photosCard:{
    marginTop:10,
  },
  photo:{
    width:113,
    height:113,
    marginTop:5,
    marginRight:5,
  }
});

