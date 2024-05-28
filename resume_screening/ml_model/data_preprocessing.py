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
        lemma=word
      lemma_list.append(lemma)
  lemma_list=[lemma for lemma in lemma_list if lemma not in ['.',',',')','(','!','-']]
  return list(set(lemma_list))

