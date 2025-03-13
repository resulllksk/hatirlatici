import * as Notifications from 'expo-notifications';

// Bildirimlere izin alma
export const registerForPushNotificationsAsync = async () => {
  const { status } = await Notifications.getPermissionsAsync();
  let finalStatus = status;

  if (status !== 'granted') {
    const { status: newStatus } = await Notifications.requestPermissionsAsync();
    finalStatus = newStatus;
  }

  if (finalStatus !== 'granted') {
    alert('Bildirim izni verilmedi!');
    return null;
  }

  const token = (await Notifications.getExpoPushTokenAsync()).data;
  console.log('Bildirim Tokeni:', token);

  return token;
};
