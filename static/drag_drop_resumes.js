let container2=document.getElementById('resume-file-upload')
container2.addEventListener(
    "dragenter",
    (e)=>{
        e.preventDefault();
        e.stopPropagation();
        container2.style.borderColor="red"
        console.log("hi1")
    }
)

container2.addEventListener(
    "dragleave",
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      container2.style.borderColor="black"
      console.log("hi2")
    },
    false
  );

  container2.addEventListener(
    "dragover",
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      container2.style.borderBlockColor="red"
      console.log("hi3")
    },
    false
  );
  container2.addEventListener(
    "drop",
    (e)=>{
        e.preventDefault();
        e.stopPropagation();
        container2.style.borderColor='black';
        let dragged_data=e.dataTransfer
        let files=dragged_data.files
        jb_description_selected=true;
        console.log(files)
        
}
)
