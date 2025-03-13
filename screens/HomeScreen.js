import React, { useState } from 'react';
import { View, Text, FlatList, Button, TouchableOpacity, StyleSheet } from 'react-native';

const categories = ['İş', 'Sağlık', 'Alışveriş', 'Diğer'];

export default function HomeScreen({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState('Tümü');
  const [reminders, setReminders] = useState([]);

  const handleAddReminder = () => {
    navigation.navigate('Reminder', {
      addReminder: (reminder) => setReminders([...reminders, reminder]),
    });
  };

  const filteredReminders = selectedCategory === 'Tümü'
    ? reminders
    : reminders.filter((r) => r.category === selectedCategory);

  return (
    <View style={styles.container}>
      <View style={styles.categoryList}>
        <FlatList
          horizontal
          data={['Tümü', ...categories]}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.categoryButton,
                selectedCategory === item && styles.selectedCategory,
              ]}
              onPress={() => setSelectedCategory(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <FlatList
        data={filteredReminders}
        renderItem={({ item }) => (
          <View style={styles.reminderCard}>
            <Text style={styles.reminderTitle}>{item.title}</Text>
            <Text>{item.date} - {item.time}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Yeni Hatırlatıcı" onPress={handleAddReminder} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  categoryList: { marginBottom: 20 },
  categoryButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  selectedCategory: { backgroundColor: '#ddd' },
  reminderCard: {
    padding: 15,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  reminderTitle: { fontWeight: 'bold', fontSize: 16 },
});
