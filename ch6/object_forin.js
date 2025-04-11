let user = {
    id :"siul",
    pw : "12345678",
    name : "siulKim",
    mobile :"010-4016-3936",
    country : "대한민국"
}

for (let info in user){
    console.log(`${info} : ${user[info]}`);
}