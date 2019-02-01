const app = require ('express')(),
        bodyParser = require('body-parser'),
      multer  = require('multer'),
      arff = require('node-arff');
      
// parse application/x-www-form-urlencoded
// for easier testing with Postman or plain HTMLforms
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const storage = multer.diskStorage({
    destination: "./java/",
    filename: function(req, file, cb){
       cb(null,Date.now() + path.extname(file.originalname));
    }
 });
 const upload = multer({storage: storage});


//  app.post('/analyze', upload.single('selectedFile'), (req, res) => {
//     //console.log(req.file.path);
//     const filePath = req.file.path;
//     try{
//     arff.load(filePath, function(err, data) {
//       if (err) {
//         return console.error(err);
//       }
      
//       let algorithm = '';
//       switch(req.body.algorithm){
//         case 'KNN':
//           algorithm = 'weka.classifiers.lazy.IBk'
//           break;
//         case 'J48':
//           algorithm = 'weka.classifiers.trees.J48';
//           break;
//         default:
//           algorithm = 'weka.classifiers.bayes.NaiveBayes';
//       }
//       const child = exec(`java -classpath ./java/weka.jar ${algorithm} -t ${filePath}`,
//                   function(error, stdout, stderr){
//                     //console.log('Output-->' + stdout);
//                     res.status(200).json({data:''+stdout+''});
//                     if(error !== null){
//                       console.log('Error-->' + error);
//                     }
//                   });

//     });
//   }
//     catch(err){
//       console.log(err);
//       res.send(err);
//     }
//   });

  app.get('/', (req, res)=> {
      res.send('Api working fine!');
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT);