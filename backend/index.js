const app=require('./app')


const kafka= require('./kafka/client')


const customer=require('./routes/customer/customer')
const login=require('./routes/login/login')
const signup=require('./routes/signup/signup')

app.use('/login',login);
app.use('/customer',customer);
app.use('/signup',signup)


app.get('/',(req,res)=>{
    res.send("Amazon.com API is alive!");
})


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports=app;