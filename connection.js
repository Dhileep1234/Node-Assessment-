const mysql=require('mysql')

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root123',
    database:'student'
});
con.query('select * from db', function (err, result) {
    if (err) throw err;
    console.log(result);
});

    

module.exports = con;