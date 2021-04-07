installation :
laravel : 
composer install ,
composer create-project laravel/laravel app-name
or 
composer require laravel/installer 
laravel new app-name
laradock :
git clone https://github.com/Laradock/laradock.git

arrange laravel .env file for mysql and 
other things 
DB_HOST=mysql
REDIS_HOST=redis
QUEUE_HOST=beanstalkd

cp env-example .env
arrange this .env file too 

point data folder outside of project for db and redis .
APP_CODE_PATH_HOST=../data

Go to your web server and create config files to point to different project directory when visiting different domains:

For Nginx go to nginx/sites, for Apache2 apache2/sites.

Laradock by default includes some sample files for you to copy app.conf.example, laravel.conf.example and symfony.conf.example.

give alias for containers : 
COMPOSE_PROJECT_NAME

to run : 
docker-compose up -d nginx mysql phpmyadmin redis workspace 

nwidart module system:
composer require nwidart/laravel-modules
php artisan vendor:publish --provider="Nwidart\Modules\LaravelModulesServiceProvider"
add 
{
  "autoload": {
    "psr-4": {
      "App\\": "app/",
      "Modules\\": "Modules/" // add this
    }
  }
}

install nwidart and make module 
php artisan module:make <module-name>

vue installation: 
