import { localStorageService } from "../../services/localStorageService";
import { ADD_TO_SEAT, SET_USER_INFOR } from "../constants/userConstants";

let initailState = {
  userInfor: localStorageService.getUserInfor(),
  selectSeat: [],
};

export const userReducer = (state = initailState, { type, payload }) => {
  switch (type) {
    case SET_USER_INFOR: {
      state.userInfor = payload;
      return { ...state };
    }
    case ADD_TO_SEAT: {
      let cloneSelectSeat = [...state.selectSeat];
      let index = cloneSelectSeat.findIndex((item) => {
        return item.maGhe == payload.maGhe;
      });

      let newGhe = { ...payload, reserved: false };
      if (index == -1) {
        cloneSelectSeat.push(newGhe);
      } else {
        cloneSelectSeat.splice(index, 1);
      }
      payload.reserved = !payload.reserved;
      state.selectSeat = cloneSelectSeat;

      let dataJson = JSON.stringify(state);
      state = JSON.parse(dataJson);
      return { ...state };
    }

    default:
      return state;
  }
};
