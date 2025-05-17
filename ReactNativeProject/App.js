import React from 'react';
import { SafeAreaView, Text, StyleSheet, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>🐶 Dog&Cat 🐱</Text>
        <Text style={styles.paragraph}>
          Bem-vindo ao Dog&Cat, onde o amor por cães e gatos se encontra!
        </Text>
        <Text style={styles.paragraph}>
          Cães são companheiros fiéis, protetores e sempre dispostos a brincar. Já os gatos são elegantes, independentes e cheios de personalidade.
        </Text>
        <Text style={styles.paragraph}>
          Aqui você encontra curiosidades, cuidados e dicas para deixar seu melhor amigo ainda mais feliz.
        </Text>

<Image
  source={{ uri: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=800&q=60' }}
  style={styles.image}
/>
<Text style={styles.caption}>Um cãozinho feliz explorando o mundo!</Text>

<Image
  source={{ uri: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=800&q=60' }}
  style={styles.image}
/>
<Text style={styles.caption}>Um gatinho curioso e observador.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6EC',
  },
  content: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4B3F72',
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 26,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 12,
    marginVertical: 16,
  },
  caption: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
    fontStyle: 'italic',
    textAlign: 'center',
  },
});