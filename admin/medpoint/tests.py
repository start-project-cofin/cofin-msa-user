# import csv

# with open('./data/선별진료소_20211220223113.xls','r') as f:
#     reader = csv.reader(f)
#     print(reader)
#     print(type(reader))


import pandas as pd
# test_file = pd.read_excel('./data/선별진료소_20211220223113.xls')
# print(test_file)
# print(test_file.shape)
# test_file.to_csv("./data/선별진료소_20211220223113-original.csv")

change_headers = pd.read_csv('./data/선별진료소_20211220223113.csv')
change_headers.to_csv('./data/medpt20211220.csv')