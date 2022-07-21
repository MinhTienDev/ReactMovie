import { message } from "antd";
import { localStorageService } from "../../services/localStorageService";
import { userService } from "../../services/userService";
import { ADD_TO_SEAT, SET_USER_INFOR } from "../constants/userConstants";

export const setUserInforAction = (user) => {
  return {
    type: SET_USER_INFOR,
    payload: user,
  };
};

export const handleSelectSeat = (maGhe) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_SEAT,
      payload: maGhe,
    });
  };
};

export const setUserInforActionService = (
  dataLogin,
  handleSuccess = () => {},
  handleFail = () => {}
) => {
  return (dispatch) => {
    userService
      .postDangNhap(dataLogin)
      .then((res) => {
        handleSuccess();
        localStorageService.setUserInfor(res.data.content);
        dispatch({
          type: SET_USER_INFOR,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        handleFail();
        console.log(err);
      });
  };
};

export const setUserRegisterActionService = (
  data,
  handleSuccess = () => {},
  handleFail = () => {}
) => {
  return (dispatch) => {
    userService
      .postDangKi(data)
      .then((res) => {
        handleSuccess();
        localStorageService.setUserInfor(res.data.content);
        dispatch({
          type: SET_USER_INFOR,
          payload: res.data.content,
        });
      })
      .catch((err) => {
        handleFail();
        message.error(err.response.data.content);
      });
  };
};
