

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
     
      // console.log(reader.result);
      var lines = reader.result.split('\n');

      var outputContainer = document.getElementById("file-output");
      var outputContainernonClickable = document.getElementById("file-output-nonclickable");
      lines.forEach(function(element, index){
       
        var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

        if(element.includes('http') && !(element.includes('meet'))){
          // console.log((element.indexOf(" ",[, (element.indexOf("http"))])))
          console.log(element.match(urlRegex))
          // console.log(element.substring(element.indexOf("http")))
          var regText=element.match(urlRegex)[0];
         
          var paraForOutput=document.createElement('p')
            var elementForOutput = document.createElement('a');
            elementForOutput.href=regText;
            elementForOutput.innerHTML = regText;
            paraForOutput.appendChild(elementForOutput)
            outputContainer.appendChild(paraForOutput);

            // var elementfornonclickable=document.createElement('a')
            // elementfornonclickable.innerHTML=regText;
            // var parafornonclickable=document.createElement('p')
            // parafornonclickable.appendChild(elementfornonclickable)
            
            // outputContainernonClickable.appendChild(parafornonclickable)

        }
        else{
            // console.log("ee")
        }
        
     });
     
    
    };
    reader.readAsText(this.files[0]);
   
   
  }