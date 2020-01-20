import data from '../../SampleData/data.json';

export const getTestData = () => {
  // setInterval(() => {
  //   return data;
  // }, 2000);
};

export const getUsers = (cb: Function) => {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(users => cb(users));
};
