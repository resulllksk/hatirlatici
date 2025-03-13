import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function ReminderScreen({ route, navigation }) {
  const { addReminder } = route.params;

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [category, setCategory] = useState('İş');

  const handleSave = () => {
    addReminder({ title, date, time, category });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text>Başlık:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={setTitle}
        placeholder="Hatırlatıcı başlığı"
      />
      <Text>Tarih:</Text>
      <TextInput
        style={styles.input}
        value={date}
        onChangeText={setDate}
        placeholder="GG/AA/YYYY"
      />
      <Text>Saat:</Text>
      <TextInput
        style={styles.input}
        value={time}
        onChangeText={setTime}
        placeholder="SS:DD"
      />
      <Text>Kategori:</Text>
      <TextInput
        style={styles.input}
        value={category}
        onChangeText={setCategory}
        placeholder="Kategori"
      />
      <Button title="Kaydet" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
});
