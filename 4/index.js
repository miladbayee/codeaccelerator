const fs = require("fs");

fs.readFile("./file.txt", (err, data) => {
  if (err) console.log(err.message);
  const file = data.toString();

  const req = /(\r\n|\n|\r)/gm;
  const newText = file.replace(req, "");

  const  replaceText= newText.replace(/(\,|\;|\.\b)/gm, " ")

  const wordNumber=replaceText.split(' ').length

  const text = newText.split(".");

  let lineNubmer = 0;

  text.forEach((item) => {
    const list = item.split(" ");
    if (list.length > 4) lineNubmer++;
  });

  console.log({wordNumber},{lineNubmer});
});
