import { observable, action } from "mobx";
import axios from "axios";

export default class AppState {
  @observable currentSpeaker;
  @observable currentPlayerState;



  constructor() {
    this.currentSpeaker = 'living room';
    this.currentPlayerState = {};

  }



}
