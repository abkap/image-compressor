const sharp = require("sharp");
const fs = require("fs");
const reqDir = "./result";
if (!fs.existsSync(reqDir)) {
  fs.mkdirSync(reqDir);
  console.log("result folder created");
}

fs.file;
function resizeImage({ inputFile, width, height, quality, namePrefix }) {
  var filetypeList = inputFile.split(".");
  var filetype = filetypeList[filetypeList.length - 1];
  var outputName = "./result/" + namePrefix + "." + filetype;
  console.log(filetypeList);
  sharp(inputFile)
    .resize({ width: width, height: height, fit: "fill" })
    .png({ quality: quality, force: false })
    .jpeg({ quality: quality, force: false })
    .toFile(outputName)
    .then((data) => {
      console.log(data);
    });
}
// user input
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

var getName = async () => {
  return new Promise((resolve, reject) => {
    readline.question("file name (including filetype) : ", (ans) => {
      if (ans) resolve(ans);
      else reject(false);
    });
  });
};

var getWidth = async () => {
  return new Promise((resolve, reject) => {
    readline.question("Enter width (pixels) : ", (ans) => {
      if (ans) resolve(ans);
      else reject(false);
    });
  });
};

var getHeight = async () => {
  return new Promise((resolve, reject) => {
    readline.question("Enter height (pixels) : ", (ans) => {
      if (ans) resolve(ans);
      else reject(false);
    });
  });
};

async function run() {
  try {
    var inputFile = await getName();
    var width = await getWidth();
    var height = await getHeight();
    readline.close();
  } catch (e) {
    console.log("plese provide information  ! ");
    run();
  }

  for (var i = 10; i < 100; i += 10)
    resizeImage({
      inputFile: inputFile.toString(),
      width: Number(width),
      height: Number(height),
      quality: i,
      namePrefix: i.toString(),
    });
}

run();

//   end
