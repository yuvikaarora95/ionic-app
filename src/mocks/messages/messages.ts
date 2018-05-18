import { Message } from '../../models/messages/message.interface';
//list of users
import { USER_LIST } from '../profiles/profiles';


const userList = USER_LIST;


const messageList: Message[] = [

    { user: userList[0], date: new Date(), lastMessage: "Hello" },
    { user: userList[1], date: new Date(), lastMessage: "Hi"  },
    { user: userList[2], date: new Date(), lastMessage: "Hey"  },
    { user: userList[3], date: new Date(), lastMessage: "Hello"  },
    { user: userList[4], date: new Date(), lastMessage: "Namaste"  },

]

//we can also use 
// const messageList: Message[] = [];
// userList.forEach((user) => {
//    messageList.push({user. user, date: new Date(), lastMessage: 'Hello' })
// });


export const MESSAGE_LIST = messageList;