<<<<<<< HEAD
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
=======
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
>>>>>>> 1d34d04c73ffb1bbaf912a54944da08bebc444e1

const firebaseConfig = {
	apiKey: "AIzaSyDhh0IJ5oFYNonE2OG-QLZegp3IBPxYYcA",
	authDomain: "rotrixx-eu.firebaseapp.com",
	projectId: "rotrixx-eu",
	storageBucket: "rotrixx-eu.appspot.com",
	messagingSenderId: "764941317591",
	appId: "1:764941317591:web:9903afc44b589a9f864792",
	measurementId: "G-KGQTMFX98Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const handleHashChange = async () => {
	const { hash } = document.location;

	logEvent(analytics, "screen_view", { screen_name: hash.substring(1) });
};

export const logCurrentPage = () => {
	handleHashChange();
	window.addEventListener("hashchange", handleHashChange);
};
