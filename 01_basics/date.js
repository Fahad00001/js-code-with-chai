    let mydate=new Date()
    // console.log(mydate.toString());
    let newdate=new Date()
    console.log(newdate);
    console.log(newdate.getMonth()+1);
    console.log(newdate.getDay());
    
    newdate.toLocaleString('default',{
        weekday:'long',
        
    })