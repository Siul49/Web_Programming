var userName = '김경수';
var userPW = '1111';

function account(userId,userpw){
    console.log(userId);
    console.log(userpw);

    var savedName = '김경수';
    var savedPW = '1111';

    userpw = userpw || '1111';

    if(userId == savedName){
        if(userpw == savedPW){
            console.log('hi ' + userId);
        }
    }
}

account(userName);
