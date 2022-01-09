import { Tag } from "react-tag-input";

export default abstract class LocalData {
  getData(key: string): Tag[]{
    let localData = localStorage.getItem(key);
    let data = []
    if(data == null){

    }
  }
}