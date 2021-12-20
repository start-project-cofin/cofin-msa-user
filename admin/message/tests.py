# import os
# import gensim
# from gensim import corpora
# from gensim.utils import simple_preprocess
# from smart_open import smart_open
# from pprint import pprint
#
# dict_STF = corpora.Dictionary(simple_preprocess(line, deacc=True) for line in open('data/SOSmsg.csv', encoding='utf-8'))
# # print(dict_STF)
# print(dict_STF.token2id)
# corpora.dictionary.save('dict_STF.txt', encoding='utf-8')
#
# doc_tokenized = [simple_preprocess(line, deacc=True) for line in open('data/SOSmsg.csv', encoding='utf-8')]
# dictionary = corpora.Dictionary()
# BoW_corpus = [dictionary.doc2bow(doc,allow_update=True) for doc in doc_tokenized]
# # print(BoW_corpus)
# # corpora.MmCorpus.serialize('BoW_corpus.mm', BoW_corpus)

import konlpy
from konlpy.tag import Kkma
# import jpype
# import tweepy

kkma = Kkma()
test = kkma.nouns('코앤엘파이 한국어 형태소 분석기 설치 테스트 하는중 입니다.]')
print(test)
# print(tweepy.__version__)
