function get_job_description(){
    const job_desc_pdf=document.getElementById('job-description-file')
    const job_desc_text=document.getElementById('job-description-text')
    const job_description_files=job_desc_pdf.files
    if(jb_file_activate){
        if(job_description_files.length===0){
            jb_description_selected=false;
            alert_message("No file selected")
            return;
        }
        jb_description_selected=true;
        const reader = new FileReader()
        let file=job_description_files[0]
        reader.onload=(event)=>{
            if(file.name.endsWith('.pdf')){
                const typedArray = new Uint8Array(event.target.result);
                var pdfData=typedArray
                pdfjsLib.getDocument(pdfData).promise.then(function(pdf) {
                    let text = '';
                    const promises = [];
                    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
                        promises.push(pdf.getPage(pageNumber).then(function(page) {
                        return page.getTextContent();
                    }));
                    }
                    Promise.all(promises).then(function(textContents) {
                        textContents.forEach(function(content) {
                        content.items.forEach(function(item) {
                            text += item.str + ' ';
                            });
                        });
                        job_description_details={
                            'name':job_description_files[0].name,
                            'content':text};
                        
                    });
                });
            }
            else if(file.name.endsWith('.doc')||file.name.endsWith('.docx')){
                mammoth.extractRawText({arrayBuffer: event.target.result})
                .then((text)=>{
                    job_description_details={
                        'name':job_description_files[0].name,
                        'content':text.value};
                })
                .catch(function(err) {
                    alert_message('Error During Reading the File')
                  console.log(err);
                });
            };
        }
        reader.onerror=(event)=>{
            alert_message('Error During Reading the File')
            console.error(event.target.error)
        }
        reader.readAsArrayBuffer(job_description_files[0]);
    }
    else{
        if(job_desc_text.value.trim()===""){
            jb_description_selected=false;
            alert_message("Empty Textarea")
            return;
        }
        jb_description_selected=true;
        job_description_details={name:job_desc_text.value.slice(0,20),content:job_desc_text.value}
    }
}

function display_jb_description_file(display_folder){
    var div_=document.getElementById('instance-job-description');
    var label_=document.getElementById('job-description-label');
    var input_=document.getElementById('job-description-file');
    var button_=document.getElementById('jb-copy-paste-button');
    var file_upload=document.getElementById('job-file-upload')
    if(display_folder){
        div_.style.display='flex';
        label_.style.display='none';
        button_.style.display='none';
        inputFile=input_.files[0];
        div_.innerHTML="<div class='cross-buttons' id='instance-jb-cross-button' onclick='display_jb_description_file(false)'>x</div>"+inputFile.name;
        //file_upload.style.border='none';
        document.getElementById('job-file-upload').style.border='none'
        go_to_resume();
    }
    else{
        div_.style.display='none';
        label_.style.display='block';
        button_.style.display='block';
        const files=Array.from(input_.files)
        const namesToRemove=input_.files[0].name
        const filteredFiles=files.filter(file=>!namesToRemove.includes(file.name));
        const dataTransfer=new DataTransfer();
        filteredFiles.forEach(file=>dataTransfer.items.add(file))
        input_.files=dataTransfer.files;
        jb_description_selected=false;
        document.getElementById('job-file-upload').style.border='2px dashed #ccc'
        //file_upload.style.border='2px dashed #ccc';
    }
}