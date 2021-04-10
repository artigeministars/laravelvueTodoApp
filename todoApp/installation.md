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

composer dump-autoload


install nwidart and make module 
php artisan module:make <module-name>

vue installation: 
1- approach 1 
npm i -D laravel-mix@next vue@next @vue/compiler-sfc vue-loader@next
npm i

before doing that try to remove the following dependencies from package.json which some of them are added by php artisan ui vue :

    vue
    vue-template-compiler
    laravel-mix

Config:

in the package.json change the scripts to the following ones:

"scripts": {
    "development": "mix",
    "watch": "mix watch",
    "watch-poll": "mix watch -- --watch-options-poll=1000",
    "hot": "mix watch --hot",
    "production": "mix --production"
}

webpack.mix.js should contain :

    const mix = require('laravel-mix');

    mix.js('resources/js/app.js', 'public/js').vue();

The minimum content of resources/js/app.js

import { createApp } from 'vue';
import App from './components/App.vue'
createApp(App).mount("#app")

----------
2- approach 2 
npm install laravel-mix-vue3 --save-dev
npm install @types/webpack-env @vue/compiler-sfc vue-loader@next laravel-mix-vue3  --save-dev
npm install --save vuex-class
npm install vuex-module-decorators --save
npm install vue-property-decorator --save
npm install  vuex-class-modules --save
npm install --save-dev @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties

const mix = require("laravel-mix");

require("laravel-mix-vue3");

mix.vue3("resources/js/app.tsx", "public/js", {
  typescript: true,
  jsx: true,
});

npm install --save vue vue-class-component
npm install --save-dev @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties

Then configure .babelrc:

{
  "plugins": [
    ["@babel/proposal-decorators", { "legacy": true }],
    ["@babel/proposal-class-properties", { "loose": true }]
  ]
}

add tsconfig :     "experimentalDecorators": true,

---------------------
for mysql dbhost you must enter docker container gateway ip address
or ip address like 172.22.0.1 

