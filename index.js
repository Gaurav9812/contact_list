const express=require('express');
const path=require('path');
const port=8000;
const app=express();

const db=require('./config/mongoose.js');
app.set('view engine','ejs');
app.use(express.static('assets'));

const Contact=require('./model/contact')

//MIDDLE WARE
            app.use(express.urlencoded());
            // app.use(function(req,res,next)
            // {
            //     req.MyNAME="Gaurav";//adding property to request

            //     console.log("IN MIDDLE WARE 1");
            //     next();
            // });
            // app.use(function(req,res,next)
            // {
            //     console.log(req.MyNAME);//accessing property CREATED
            //     console.log("IN MIDDLE WARE 2");
            //     next();
            // });
var contactList=[
    {
        name:"Gaurav",
        phone:"79825555"
    },
    {
        name:"MOnty",
        phone:"798225555"
    },
    {
        name:"Jonty",
        phone:"798125555"
    }
];

app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res)
{
   
//    return res.render('Index.ejs',{
//     contact_list:contactList
// });

    //Fetcing from Db
        Contact.find({},function(err,contact){
            if(err)
            {
                console.log('error fetching contact');
                return ;

            }
            return res.render('Index.ejs',{
                contact_list:contact
            });
        });
        // To find cBy Query
        //Contact.find({"name:'new'"},function(err,contact){
        
});
app.get('/practice',function(req,res)
{
    return res.render('practice',{
        title:"hello There",
        contact_list:contactList
    });
})
app.post('/create_contact',function(req,res)
{
    
    // contactList.push(req.body);
    
    // return res.redirect('back');

    //Using MOngo DB
    Contact.create({
        name:req.body.name,
        phone:req.body.phone
    },function(err,newContact)
    {
        if(err)
        {
            console.log('error Creating Contact');
            return;
        }
        console.log('*******',newContact);
        return res.redirect('back');
    });    
});
app.get('/delete-contact',function(req,res)
{
//     console.log(req.query);
//     var phone=req.query.phone;
//     var contactIndex=contactList.findIndex(contact => contact.phone==phone);
//     if(contactIndex!=-1)
//     {
//         contactList.splice(contactIndex,1);
//     }
//    return res.redirect('back');

        //deleting document from db
        var id=req.query.id;
        Contact.findByIdAndDelete(id,function(err)
        {
            if(err)
            {
                console.log('error deleting document');
                return ;
            }
            return res.redirect('back');
        });
});
// app.get('/',function(req,res)
// {
//     res.send('<h1>This is Home page</h1>')
// });
// app.get('/profile',function(req,res)
// {
//     res.send('<h1>This is Profile page</h1>')
// });
// app.get('/friends',function(req,res)
// {
//     res.send('<h1>This is friends page</h1>')
// });
app.listen(port,function(err)
{
    if(err)
    {
        console.log("there is an error");
        return ;
    }
    console.log("express server is working");

});