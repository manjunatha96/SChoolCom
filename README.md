# SChoolCom
Step1)Register User with follwing deatils.
Link:http://localhost:3000/register/post

Body:
{
		"username":"Amma",
        "dob":"2020-01-01",
        "email":"ma@gmail.com",
        "password":"123456",
        "is_admin":true
}

Step2)Login user with follwing deatils.
Link:http://localhost:3000/login/posting

Body:
{
		"username":"Amma",
    "password":"123456"
}

Step3) To get registered user data.
i)Mention Header Key as :X1-login
ii)Mention Header value as : Token ex:(eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTY1YmZmZmU0ODA3MjU2NmMwYmNhODkiLCJlbWFpbCI6Im1hQGdtYWlsLmNvbSIsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE1ODM3MjY1OTF9.GZvTLp9Fw5Iv68BeqVhkm92ZqVvtk1ndW6T07v95fC8) 

i and ii common for a,b and c.

a)Get Link:http://localhost:3000/login/logins

b)Update Link:http://localhost:3000/login/userUpadte/[user id need to pass]
Body:{
	"is_admin":true
}

c)Delete Link:http://localhost:3000/login/deleteUser/[user id need to pass]
Body:{
	"is_active":true
}


Note: Dear sir i did get balanced and unbalanced concept properly.
