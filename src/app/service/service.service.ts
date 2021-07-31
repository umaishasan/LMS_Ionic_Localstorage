import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public strg: Storage) {
    this.createStorage();
  }

  read(addItemKey) {
    return this.strg.get(addItemKey);
  }

  add(addItemKey, addItemVal) {
    this.strg.get(addItemKey).then((v: any[]) => {
      if (v) {
        v.push(addItemVal);
        this.strg.set(addItemKey, v);
      } else {
        this.strg.set(addItemKey, [addItemVal]);
      }
    });
  }

  update(itemKey, innj, id, nam) {
    this.strg.get(itemKey).then((k: any[]) => {
      for (let i = 0; i < k.length; i++) {
        if (k[i]) {
          if (k[i].id === innj) {
            k[i].id = id;
            k[i].name = nam;
          }
        }
      }
      this.strg.set(itemKey, k);
    });
  }

  delete(itemKey, index) {
    this.strg.get(itemKey).then((v: any[]) => {
      if (v) {
        v.splice(index, 1);
        this.strg.set(itemKey, v);
      }
    });
  }

  async createStorage() {
    await this.strg.create();
  }

}
