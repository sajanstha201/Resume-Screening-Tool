import nltk
nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')
nltk.download('wordnet')
from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
def lemmatize_text(text):
  lemmatizer=WordNetLemmatizer()
  tokenized_text=word_tokenize(text)
  pos_text=nltk.pos_tag(tokenized_text)
  lemma_list=[]
  for word,pos in pos_text:
    pos_tag=pos[0].lower()
    if pos_tag not in ['v','p','c','i','d','t','w']:
      if pos_tag in ['a','n','r']:
        lemma=lemmatizer.lemmatize(word)
      else:
        print(lemma,pos_tag,'\n')
        lemma=word
      lemma_list.append(lemma)
  lemma_list=[lemma for lemma in lemma_list if lemma not in ['.',',',')','(','!','-']]
  lemma_list_lower=[]
  for lemma in lemma_list:
    lemma_list_lower.append(lemma.lower())
  lemma_list_no_duplicate=[]
  for i in range(0,len(lemma_list_lower)):
    if(lemma_list_lower[i] not in lemma_list_no_duplicate[0:len(lemma_list_no_duplicate)+1]):
      lemma_list_no_duplicate.append(lemma_list_lower[i])
  return list(set(lemma_list_no_duplicate))