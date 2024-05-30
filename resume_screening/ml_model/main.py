from .data_preprocessing import lemmatize_text
from .evaluation_function import find_cosine_similairty, calculate_match_score,find_cosine_similarity2
import math
#use this function when a critical key is not given as a seprate file
def rating(jb_description,resume_dict):
    critical_keyword=lemmatize_text(jb_description)
    score_dict={}
    for key,resume in resume_dict.items():
        lemmatized_resume=lemmatize_text(resume)
        match_score=calculate_match_score(critical_list=critical_keyword,text_list=lemmatized_resume)
        similar_score=find_cosine_similarity2(jb_description,resume)
        score_dict[key]=math.ceil((similar_score*20+match_score*20)/2)
    return ordering_dict(score_dict)

#use this function when the user give a seprate file for critical keyword
def rating2(jb_description,resume_dict,critical_keywords):
    score_dict={}
    critical_keywords=lemmatize_text(critical_keywords)
    for key,resume in resume_dict.items():
        lemmatized_resume=lemmatize_text(resume)
        match_score=calculate_match_score(critical_list=critical_keywords,text_list=lemmatized_resume)
        similar_score=find_cosine_similarity2(jb_description,resume)
        score_dict[key]=math.ceil((similar_score+match_score*3)/4*10)
    return ordering_dict(score_dict)

def ordering_dict(score):
    new_dict={}
    for i in range(0,len(score)):
        max_key=next(iter(score))
        for key,value in score.items():
            if(score[max_key]<score[key]):
                max_key=key
        new_dict[max_key]=score[max_key]
        score.pop(max_key)
    for key,value in new_dict.items():
        if(value>10):
            new_dict[key]=10
    return new_dict



if __name__=='__main__':
    d={'sajan shrestha':20,
        'abhishek khadka':10,
        'devraj silwal':35}
    print(ordering_dict(d))
    