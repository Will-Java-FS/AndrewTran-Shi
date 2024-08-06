# Open terminal
``pqsl psql -U postgres -d projectDB``
# Enter password when prompted
# In the psql shell
TRUNCATE TABLE users CASCADE;
# Or to truncate multiple tables
``pqsl TRUNCATE TABLE users, items;``
# To exit psql
``pqsl \q``