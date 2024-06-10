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
        if (files.length!=1)
            {
                let message="multiple files uploaded"
                alert_message(message)
            }
        else{
        jb_description_selected=true;
        const reader = new FileReader()
        let file=files[0]
        }
}
)
