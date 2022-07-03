

  document.querySelector("#file-upload").onchange = function(){
    if (this.files.length === 0) {
        console.log('No file selected.');
        document.querySelector("#file-name").textContent = "No Files Chosen";
        return;
      }
      else{
        document.querySelector("#file-name").textContent = this.files[0].name;
      }

    const reader = new FileReader();
    reader.onload = function fileReadCompleted() {
     
      console.log(reader.result);
      var lines = reader.result.split('\n');

      var outputContainer = document.getElementById("file-output");
      lines.forEach(function(element, index){
       
        if(element.includes('http')){
            var elementForOutput = document.createElement('p');
            elementForOutput.innerText = element;
            outputContainer.appendChild(elementForOutput);

        }
        else{
            console.log("ee")
        }
        
     });
     
    
    };
    reader.readAsText(this.files[0]);
   
   
  }