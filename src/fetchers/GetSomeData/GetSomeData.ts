import data from '../../SampleData/data.json';

export const getTestData = () => {
  // setInterval(() => {
  //   return data;
  // }, 2000);
};

export const getUsers = (numberOfUsers: number = 10, cb: Function) => {
  fetch(`https://randomuser.me/api/?results=${numberOfUsers}`)
    .then(response => response.json())
    .then(users => cb(users.results));
};
