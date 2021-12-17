import csv
from admin.common.models import ValueObject, Printer, Reader
from admin.user.models import User

class DbUploader:
    def __init__(self):
        vo = ValueObject()
        reader = Reader()
        self.printer = Printer()
        vo.context = 'user/data'
        vo.fname = 'user.csv'
        self.csvfile = reader.new_file(vo)

    def insert_data(self):
        self.insert_table_user()
        print('user insert complete')

    def insert_table_user(self):
        with open(self.csvfile, newline='', encoding='utf8') as f:
            data_reader = csv.DictReader(f)
            for row in data_reader:
                if not User.objects.filter(user_email=row['user_email']).exists():
                    user = User.objects.create(user_email=row['user_email'],
                                               password=row['password'],
                                               user_name=row['user_name'],
                                               phone=row['phone'],
                                               age=row['age'],
                                               address=row['address'],
                                               job=row['job'],
                                               user_interests=row['user_interests'],
                                               login_type=row['login_type'], )
                print('USER DATA UPLOADED SUCCESSFULY!')
