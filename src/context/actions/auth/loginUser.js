import axiosInstance from './../../../helpers/axiosIntercepter';
import {AsyncStorage} from '@react-native-async-storage/async-storage';
import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_AUTH_STATE,
} from './../../../constants/actionTypes/index';

// export const clearAuthState = () => dispatch => {
//   dispatch({
//     type: LOGIN_LOADING,
//   });
// };

export default ({username, password}) =>
  dispatch => {
    dispatch({
      type: LOGIN_LOADING,
    });
    axiosInstance
      .post('/auth/login', {
        username,
        password,
      })
      .then(res => {
        console.log('resData: ', res.data);
        AsyncStorage.setItem('token', res.data.token);
        AsyncStorage.setItem('user', JSON.stringify(res.data.user));
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'Something went wrong! Try again'},
        });
      });
  };
