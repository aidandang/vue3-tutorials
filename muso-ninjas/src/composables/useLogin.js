import { ref } from 'vue';
import { projectAuth } from '../firebase/config';

const error = ref(null);
const isPending = ref(false);

const login = async (email, password) => {
	error.value = null;
	isPending.value = true;

	try {
		const res = await projectAuth.signInWithEmailAndPassword(email, password);
		error.value = null;

		isPending.value = false;
		console.log(res);
		return res;
	} catch (err) {
		isPending.value = false;
		console.log(err.message);
		error.value = 'Incorrect login credentials';
	}
};

const useLogin = () => {
	return { login, error, isPending };
};

export default useLogin;
