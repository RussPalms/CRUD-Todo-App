-> pip install django djangorestframework

-> django-admin startproject todocrud .

-> python manage.py startapp todos

-> python manage.py startapp frontend

-> python manage.py migrate

-> python manage.py runserver

after creating the todos and frontend views/urls and adding them to the root urls, make migrations again to sync up the database
    -> python manage.py makemigrations
    -> python manage.py migrate

make the directories that we need
    -> mkdir -p ./frontend/src/{components,actions,reducers}
    -> mkdir -p ./frontend/{static,templates}/frontend

create a package.json
    -> npm init -y

install the necessary packages
    -> npm i -D webpack webpack-cli
    -> npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties
    <!-- 
        react@16.4.2 
        react-dom@16.5.0 
    -->
    -> npm i react react-dom react-router-dom 
    -> npm i redux react-redux redux-thunk redux-devtools-extension
    -> npm i redux-form
    -> npm i axios
    -> npm i lodash