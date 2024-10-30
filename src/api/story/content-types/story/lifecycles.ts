export default {
  beforeCreate(event) {
    // This runs before the entry is created
    // const { data } = event.params;

    // data.featured = true;
    console.log('beforeCreate:::::::::::1111111');
    // if (data.title) {
    // data.title = `Hello ${data.title}`;
    // }
  },

  // If you also want to handle updates
  beforeUpdate(event) {
    console.log('beforeUpdate:::::::::::');

    // const { data } = event.params;
    // if (data.title && !data.title.startsWith('Hello ')) {
    //   data.title = `Hello ${data.title}`;
    // }
  },

  beforeDelete(event) {
    console.log('beforeDelete:::::::::::');
  },
  beforeCount(event) {
    console.log('beforeCount:::::::::::');
  },
  beforeFindOne(event) {
    console.log('beforeFindOne:::::::::::');
  },
};
