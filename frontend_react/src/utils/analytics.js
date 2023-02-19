import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.GA_API_KEY,
  authDomain: 'rotrixx-eu.firebaseapp.com',
  projectId: 'rotrixx-eu',
  storageBucket: 'rotrixx-eu.appspot.com',
  messagingSenderId: import.meta.env.GA_MESSAGING_SENDER_ID,
  appId: import.meta.env.GA_APP_ID,
  measurementId: import.meta.env.GA_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const logCurrentPage = () => {
  analytics.setCurrentScreen(window.location.pathname);
  analytics.logEvent('screen_view');
};
