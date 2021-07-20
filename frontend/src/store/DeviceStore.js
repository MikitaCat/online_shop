import { makeAutoObservable } from 'mobx';

export default class UserStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Friges' },
      { id: 2, name: 'Phones' },
    ];

    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
    ];

    this._devices = [
      {
        id: 1,
        name: 'Samsung Frige',
        price: 3000,
        img: 'https://image-us.samsung.com/SamsungUS/home/home-appliances/refrigerators/04242020/04242020/RS22T5561SR_001_Front1_SIlver.jpg?$product-details-jpg$',
      },
    ];
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
}
