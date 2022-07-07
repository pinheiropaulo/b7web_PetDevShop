import { data, PetType } from '../database/database';

export default {
  getAll() {
    return data;
  },

  getFromType(type: PetType) {
    return data.filter((item) => item.type === type);
  },

  getFromName(name: string) {
    return data.filter(
      (item) => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1,
    );
  },
};
