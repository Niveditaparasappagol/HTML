import { configureStore } from "@reduxjs/toolkit";
import counterRedux from "./counter";

export default configureStore({
  reducer: {    //here reducer is prdefined keyword
    counter: counterRedux
  }
});



