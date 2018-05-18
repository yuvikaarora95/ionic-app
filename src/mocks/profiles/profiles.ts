import { Profile } from '../../models/profile/profile.interface';

//list of users

const userList: Profile[] = [

    { firstName: 'Nitesh', lastName:'Kumar', email:'nitesh@nitesh.com', avatar:'assets/imgs/avatar.png'
       , dateOfBirth: new Date() },
    { firstName: 'Deepika', lastName:'Verma', email:'deepika@deepika.com', avatar:'assets/imgs/avatar.png' 
    , dateOfBirth: new Date()},
    { firstName: 'Sunil', lastName:'Arora', email:'sunil@sunil.com', avatar:'assets/imgs/avatar.png' 
    , dateOfBirth: new Date()},
    { firstName: 'Samita', lastName:'Arora', email:'samita@samita.com', avatar:'assets/imgs/avatar.png' 
    , dateOfBirth: new Date()},
    { firstName: 'Gurdeep', lastName:'Singh', email:'gurdeep@gurdeep.com', avatar:'assets/imgs/avatar.png' 
    , dateOfBirth: new Date()},

];
export const USER_LIST = userList;