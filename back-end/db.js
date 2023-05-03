const mongoose=require('mongoose');

// const url=`mongodb+srv://new_32:teiLnqy8L0APmEPp@cluster0.zeyf7.mongodb.net/rohitDatabase?retryWrites=true&w=majority`;
/*const url=`mongodb+srv://Rohit333:LWhQHhzZ4NwZgw9l@cluster0.3hcbhff.mongodb.net/user?retryWrites=true&w=majority`;*/
const url=`mongodb+srv://rhitbhp15:Danger123@cluster0.fvjx2e8.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connect(url, {
  connectTimeoutMS: 1000
}).then(()=>{
  console.log(`Database Connected..`)
}).catch((e)=>{
    console.log(`Unsuccessful..`)
    handleError(e);
})
