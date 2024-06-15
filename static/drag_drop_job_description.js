let container=document.getElementById('job-file-upload')
container.addEventListener(
    "dragenter",
    (e)=>{
        e.preventDefault();
        e.stopPropagation();
        container.classList.add('active')
    }
)

container.addEventListener(
    "dragleave",
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      container.classList.remove("active")
    },
    false
  );

  container.addEventListener(
    "dragover",
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      container.classList.add("active")
    },
    false
  );

container.addEventListener(
    "drop",
    (e)=>{
        e.preventDefault();
        e.stopPropagation();
        container.classList.remove("active")
        let dragged_data=e.dataTransfer
        let files=dragged_data.files
        if (files.length!=1){
                let message="multiple files uploaded"
                showAlert(message,'red')
            }
        else{
        jb_description_selected=true;
        console.log(files[0].name)
        if(files[0].name.endsWith('.pdf')|| files[0].name.endsWith('.docx')){
          const dataTransfer =new DataTransfer();
          dataTransfer.items.add(files[0]);
          document.getElementById('job-description-file').files=dataTransfer.files;
          display_jb_description_file(true)
        }
        else{
          showAlert('Invalid File','red')
        }

        }
}
)
