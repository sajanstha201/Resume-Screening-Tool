let container2=document.getElementById('resume-file-upload')
container2.addEventListener(
    "dragenter",
    (e)=>{
        e.preventDefault();
        e.stopPropagation();
        container.classList.add('active')
    }
)

container2.addEventListener(
    "dragleave",
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      container2.classList.remove('active')
    },
    false
  );

  container2.addEventListener(
    "dragover",
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      container2.classList.add('active')
    },
    false
  );
