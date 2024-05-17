from data_preprocessing import lemmatize_text
from evaluation_function import find_cosine_similairty, calculate_match_score,find_cosine_similarity2
import math
#use this function when a critical key is not given as a seprate file
def rating(jb_description,resume_dict):
    critical_keyword=lemmatize_text(jb_description)
    score_dict={}
    for key,resume in resume_dict.items():
        lemmatized_resume=lemmatize_text(resume)
        match_score=calculate_match_score(critical_list=critical_keyword,text_list=lemmatized_resume)
        similar_score=find_cosine_similarity2(jb_description,resume)
        score_dict[key]=math.ceil((similar_score+match_score*3)/4*10)
    return score_dict

#use this function when the user give a seprate file for critical keyword
def rating2(jb_description,resume_dict,critical_keywords):
    score_dict={}
    for key,resume in resume_dict.items():
        lemmatized_resume=lemmatize_text(resume)
        match_score=calculate_match_score(critical_list=critical_keywords,text_list=lemmatized_resume)
        similar_score=find_cosine_similarity2(jb_description,resume)
        score_dict[key]=math.ceil((similar_score+match_score*3)/4*10)
    return score_dict