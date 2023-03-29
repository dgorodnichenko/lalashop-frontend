# Lalashop

This example of the internet shop was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.  
The web is deployed to [Vercel](https://vercel.com). To see the full web go to https://lalalshop-front-on-vercel.vercel.app/products.

## How it works
The web is using REST API that is written on Java using Spring Framework. For more details click [here](https://github.com/dgorodnichenko/lalashop).
The angular app reaches API endpoints and provides data based on HTTP response.
>**Note**  
>Data can be displayed on the web with some delay due to a free tarriff plan of DB hosting

On the web you can do next things:
- see a list of all products
- filter products by categories
- search products by a keyword
- read product details
- add products to the cart
- checkout orders
- sign up
- sign in
- see profile and history of orders


## Technologies:
Frontend:
- Angular 14.2.4. (Routing, RxJS/Observables, Angular Forms, HttpClient, Interceptor etc.)
- HTML
- CSS
- Hosting: Vercel

Backend:
- JDK 19
- Spring Boot
- Spring Data
- Spring Security

Database:
- MySQL

## How to run locally
- Clone the repository
- Type `npm install` in the terminal. `ng build` command will be started automatically after `npm install`.
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Short walkthrough
You can see a list of all products on the main page and search it by categories also.
<img src="https://user-images.githubusercontent.com/37632916/228612416-18e76ebf-09fe-47f4-babc-9f0193226e2f.JPG" width="700" height="500">

If you want you are able to read a product details (its desctiption, price etc.)
<img src="https://user-images.githubusercontent.com/37632916/228612758-950b709b-ade3-4fcc-8d94-33d640e89273.JPG" width="700" height="350">

Also you can order the products you are liked.
<img src="https://user-images.githubusercontent.com/37632916/228613261-95bf69ef-e1c3-4ef4-941f-17ec30b9bd1f.JPG" width="700" height="500">

Make checkouts easily.  
<img src="https://user-images.githubusercontent.com/37632916/228614350-1524635d-90c3-4ca7-9e6a-69b3e6df31c3.JPG" width="700" height="400">

If you want to track your order you can register on the web.  
<img src="https://user-images.githubusercontent.com/37632916/228614915-b79df9db-3118-4fcd-886c-2d4e3b88dd2e.JPG" width="700" height="400">

And then login to your profile  
<img src="https://user-images.githubusercontent.com/37632916/228615112-957c2108-5b98-4921-a7e3-91f2093a4b50.JPG" width="700" height="500">

In the profile you will get all the info about your order.
<img src="https://user-images.githubusercontent.com/37632916/228616271-8126ab88-682d-478b-b8e3-845a32be3bfe.JPG" width="700" height="350">
