function disable_job_file(){
    jb_file_activate=false;
    document.getElementById('job-description-file').value=''
    document.getElementById('job-file-upload').style.display='none';
    document.getElementById('job-file-upload-text').style.display='flex';
}
// this is for disabling the upload mode and enablign the textarea
function disable_resume_file(){
    resume_file_activate=false;
    document.getElementById('resume-content-file').value=''
    document.getElementById('resume-file-upload').style.display='none';
    document.getElementById('resume-file-upload-text').style.display='flex';
}
function disable_job_text(){
    jb_file_activate=true;
    document.getElementById('job-description-text').value='';
    document.getElementById('job-file-upload-text').style.display='none';
    document.getElementById('job-file-upload').style.display='flex'
}
// this is for disabling the textarea and enabling the upload mode
function disable_resume_text(){
    resume_file_activate=true;
    document.getElementById('resume-content-text').value='';
    document.getElementById('resume-file-upload-text').style.display='none';
    document.getElementById('resume-file-upload').style.display='flex'
}
//this is for going to the resume upload area
function go_to_resume(){
    if(section_selected===1){
        get_job_description();
        if(!jb_description_selected){
            return;
        }
        document.getElementById('jb').style.display='none';
        document.getElementById('continue-button').style.display='none'
        document.getElementById('job-button').style.border='2px solid black';
        document.getElementById('job-resume-line').style.borderTop='2px solid black';
        document.getElementById('job-button').style.background='#d4edda';

    }
    else if(section_selected==3){
        document.getElementById('rating').style.display='none';
        document.getElementById('rating-button').style.border='2px dashed black';
        document.getElementById('resume-rating-line').style.borderTop='2px dashed black';
        document.getElementById('rating-button').style.background='white';
    }
    section_selected=2;
    document.getElementById('resume').style.display='flex'
    //document.getElementById('previous-button').style.display='block'
    document.getElementById('result').style.display='flex';
    document.getElementById('resume-button').style.background='#d4edda';
    document.getElementById('uploading').style.display='flex';
    document.getElementById('resume-button').style.border='2px solid black';
    
}
//this is for going to job description area
function go_to_jb(){
    document.getElementById('resume-button').style.background='white';
    document.getElementById('resume-button').style.border='2px dashed black';
    document.getElementById('job-resume-line').style.borderTop='2px dashed black';
    document.getElementById('resume-rating-line').style.borderTop='2px dashed black';
    document.getElementById('rating-button').style.background='white';
    document.getElementById('rating-button').style.border='2px dashed black';
    section_selected=1;
    document.getElementById('jb').style.display='flex'
    document.getElementById('resume').style.display='none'
    document.getElementById('continue-button').style.display='block'
   // document.getElementById('previous-button').style.display='none';
    document.getElementById('result').style.display='none'
    document.getElementById('job-resume-line').style.borderTop='2px dashed black';
    document.getElementById('rating').style.display='none';
    document.getElementById('uploading').style.display='flex';
}
function go_to_rating(){
    if(section_selected===1){
        get_job_description();
        if(!jb_description_selected){
            return;
        }
        document.getElementById('jb').style.display='none';
        
    }
    else if(section_selected===2){
        document.getElementById('resume').style.display='none';
        document.getElementById('result').style.display='none';
    }
    document.getElementById('uploading').style.display='none';
    section_selected=3;
    document.getElementById('resume-button').style.border='2px solid black';
    document.getElementById('resume-rating-line').style.borderTop='2px solid black';
    document.getElementById('resume-button').style.background='#d4edda';
    document.getElementById('rating').style.display='flex';
    document.getElementById('rating-button').style.background='#d4edda';
    document.getElementById('rating-button').style.border='2px solid black';
    document.getElementById('job-button').style.background='#d4edda';
    document.getElementById('job-resume-line').style.borderTop='2px solid black';
    document.getElementById('job-button').style.border='2px solid black';
}