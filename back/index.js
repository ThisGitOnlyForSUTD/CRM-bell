const express = require("express");
const fs = require("fs");
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express();
const jsonParser = express.json();
app.use(cors())
app.use(express.static(__dirname + "/public"));



app.post("/api/sendMail", jsonParser,  function (req, res) {
  console.log(req.body)
  // let testEmailAccount = await nodemailer.createTestAccount()

  let transporter = nodemailer.createTransport({
    host: 'smtp.mail.ru',
    port: 465,
    secure: true,
    auth: {
      user: '898182136211@mail.ru',
      pass: 'Q6zjEiewEETk0FEz0xNf',
    },
  })

  let result = transporter.sendMail({
    from: 'MAilere Test <898182136211@mail.ru>',
    to: '898182136211s@gmail.com',
    subject: 'Message from Node js',
    text: 'This message was sent from Node js server.',
    html:
        'This <i>message</i> was sent from <strong>Node js</strong> server.',
  })

  console.log(result)
  // if(!req.body) return res.sendStatus(400);
  //
  // const userName = req.body.name;
  // const userAge = req.body.age;
  // let user = {name: userName, age: userAge};
  //
  // let data = fs.readFileSync(filePath, "utf8");
  // let users = JSON.parse(data);
  //
  // // находим максимальный id
  // const id = Math.max.apply(Math,users.map(function(o){return o.id;}))
  // // увеличиваем его на единицу
  // user.id = id+1;
  // // добавляем пользователя в массив
  // users.push(user);
  // data = JSON.stringify(users);
  // // перезаписываем файл с новыми данными
  // fs.writeFileSync("users.json", data);
  // res.send(user);
});



app.listen(8000, function(){
  console.log("Сервер ожидает подключения...");
});
