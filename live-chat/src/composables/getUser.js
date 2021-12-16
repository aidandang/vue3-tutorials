import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

const user = ref();

var unsubscribe = projectAuth.onAuthStateChanged((_user) => {
	console.log('User stage change. Current user is: ', _user);
	user.value = _user;
});

const getUser = () => {
	return { user, unsubscribe };
};

export default getUser;
