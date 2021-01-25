let {PythonShell} = require('python-shell')
var path = require("path")
var fs = require('fs')


function create_document() {

  var country = document.getElementById("country").value
  var model = document.getElementById("model").value

  if (country == '' || model == ''){
     swal("Country or model missing!")
  }else{
       if (fs.existsSync('C:\\Template\\template.docx')){
           var options = {
             scriptPath : path.join(__dirname, '/../engine/'),
             args : [country, model]
           }

           let pyshell = new PythonShell('doc_edit_master.py', options);


           pyshell.on('message', function(message) {
             swal(message);
           })
           document.getElementById("country").value = "";
           document.getElementById("model").value = "";
       }else{
           swal("Template not present in C:\\Template")
       }

  }
}


function create_directory(){
    console.log("In create directory")
    var dir = "C:\\Template"

    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir)
    }else{
        swal("Directory already exists!")
    }
}