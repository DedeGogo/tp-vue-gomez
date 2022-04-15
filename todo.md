[ ] CI - lint https://www.aleksandrhovhannisyan.com/blog/format-code-on-save-vs-code-eslint/

[ ] Créer les definitions de base du CSS pour l'application

- Palette des couleurs
- ...
  - côté User
  - côté Admin

State:
[ ] On login : commit activeUser
[ ] On login : commit products
[ ] On login : commit recepies
[ ] On login : commit lists

Pages:
[ ] LogIn - preseque faite
[ ] SingnUP - presque faite
[ ] LoggedOut - à faire
[ ] UserApp - Nav Drawer et NavBar à finir

[ ] User/RecepiePage
[ ] User/ProductPage
[ ] User/ShoppingList
[ ] User/DashBoard
[ ] User/RecepiesPage
[ ] User/ProductsPage

[ ] Admin/DashBoard
[ ] Admin/NewProduct
[ ] Admin/EditProduct
[ ] Admin/DisplayProducts
[ ] Admin/ModerateComments
[ ] Admin/ModerateRecepies

components:
[ ] AppDrawer: This component : - the drawer value should be instatiated in state or passed down from UserApp in order to allow
communication with NavBar - in mobile it becomes a foot navigation bar - IN Style : it will have two styes depending on
weather it is called by UserApp or by AdminApp

CSS:
[ ] find our how to change css depending on view

- IN Style : it will have two styes depending on weather it is called by UserApp
  or by AdminApp

use <slot> in NavBar to include button to admin/user space
see how I can change style depending on which element calls it.

activate drawer button
