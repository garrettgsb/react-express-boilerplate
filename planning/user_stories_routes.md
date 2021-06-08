As a user, I want to view all items available for purchase.
As a user, I want to add an item to my cart.
As a user, I can remove an item from my cart.
As a user, I can view the quantity of an item.
As a user, I can view item details (name and optional description).
As a user, I can enter a promo code to reduce the total.
As a user, I can add a note to my order (Instructions, special requests, etc)
As a user, I can see which items are sold.
As a user, I can sort items by price, highest to lowest and lowest to highest.
As a user, I can search for items by name.
As a user, I can differentiate items on sale by a sale banner.
As a user, I can view all sale items on the sale page.
As a user, I can see the OG price and the sale price.
As a user, I can view the about page to read about Rosie’s Finds.
As a user, I can message Rosie with any questions using the “contact me” form
As a user, I can select which type of shipping I want (Flat fee anywhere in Canada $22, Local Edmonton delivery $10, Pick up FREE)

As a user, I can create a profile.
As a user, I can save my profile.
As a user, I can edit my profile.
As a user, I can login into my account.
As a user, I can view my order history.

As an admin, I can add items to the household décor page
As an admin, I can add items to the sale page
As an admin, I can edit and remove items from the pages.


Routes

## ITEMS

GET /items (view items)
GET /items/new (Admin – add item form)
POST /items (Admin – create item)
GET /items/:id (show specific item)
GET /items/:id/edit (Admin – edit item form)
POST /items/:id (show updated item)
DELETE /items/id: (Admin – remove item)

## SALE

GET /sale (view sale items)  ** create from items routes **

## USERS

GET /users/new (registration form)
POST /users (create user/login)
GET /users/:id (show specific profile)
GET /items/:id/edit (edit profile form)
POST /items/:id (show updated profile)
DELETE /items/id: (delete profile)

## ABOUT

GET /about (view about page)  ** no route needed **

## CONTACT

GET /contact (view contact page with form) ** no route needed **
POST /contact (display msg confirmation) ** no route needed **

## CART
no routes. use frontend localStorage

## ORDERS

GET /orders (view order)
GET /orders/:userID
GET /orders/:id



## PAYMENT
???

