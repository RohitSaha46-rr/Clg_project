const mongoose=require('mongoose');

const url=`mongodb+srv://new_32:teiLnqy8L0APmEPp@cluster0.zeyf7.mongodb.net/rohitDatabase?retryWrites=true&w=majority`;

mongoose.connect(url, {
  connectTimeoutMS: 1000
}).then(()=>{
  console.log(`Database Connected..`)
}).catch((e)=>{
    console.log(`Unsuccessful..`)
    handleError(e);
})
