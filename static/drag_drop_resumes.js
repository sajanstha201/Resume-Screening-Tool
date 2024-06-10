let container2=document.getElementById('resume-file-upload')
container2.addEventListener(

  "dragenter",
  (e)=>{
      e.preventDefault();
      e.stopPropagation();
      container2.classList.add('active')
  }
)

container2.addEventListener(
  "dragleave",
  (e) => {
    e.preventDefault();
    e.stopPropagation();
    container2.classList.remove("active")
  },
  false
);

container2.addEventListener(
  "dragover",
  (e) => {
    e.preventDefault();
    e.stopPropagation();
    container2.classList.add("active")
  },
  false
);

container2.addEventListener(
  "drop",
  (e)=>{
      e.preventDefault();
      e.stopPropagation();
      container2.classList.remove("active")
      let dragged_data=e.dataTransfer
      let files=dragged_data.files
      console.log(files)
      const dataTransfer=new DataTransfer();
      for(i=0;i<files.length;i++){
        dataTransfer.items.add(files[i])
      }
      document.getElementById('resume-content-file').files=dataTransfer.files;
      uploadResume();
}
)
