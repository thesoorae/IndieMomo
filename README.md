# Indiemomo

[Heroku Link](https://indiemomo.herokuapp.com)
[Trello Link](https://trello.com/b/RGytZ2SN/indiemomo)

## Minimum Viable Product
Indiemomo is a full-stack web application inspired by Indiegogo and built for users to sell and purchase batches of their food. It is built using Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.



## Features & Implementation






### Batches Rendering
Batch basic information, including columns ```id```, title, ```chef_id```, category, brief_description, long_description, goal, zip_code, and order_description is stored in one table on the database. The Batch model also accesses information through associations to the batch_images, and order_options tables.

Upon rendering the home page, an API call is made to the database which stores all of the batches on the state, further calling through associations to return the chef object that owns each batch, as well as arrays of order_options and batch_images. All of this information is then rendered on the page in different ways, depending on whether it is a home, Index or Show Page.

There is also a search method built into the controller that fetches Batches matching a search query (either in the title or description of that batch), and will render the relevant batches onto the page.

Each batch item component also provides instantaneous feedback on its progress bar for how close it is to achieving its order goal. Whenever a user places an order, the progress bar immediately increases, built into the internal component state.

### Batch Editing

Batch creation and editing are handled through the Start a Batch button. The user must first be logged in order to create or edit a batch, and of course, the user can only edit their own batches. To create a batch, the site first gives the user a very simple form to fill out, consisting of the title and goal of the batch. As the user progresses to the next step, this batch is created in the database, and the user is routed to the edit page.

They then fill out more details on the Batch Detail form, including uploading images via Cloudinary's upload image widget. Once the image or images are uploaded, thumbnails of the saved images are immediately displayed on the page, thanks to being stored on the internal component state. The user can choose to remove this image from the internal state, or continue adding more images. When the user saves or progresses to the next step, all the information stored on this form is sent back via API call to the database, hitting the Batches controller (which also handles the separate creation of associated images by iterating through the array of url's that is returned).

The next step is the Order Options form, where users can create options to attach to their batches, as well as remove options, and then save all of the results on their batch and see their batch rendered live in all its glory. Originally, the Order Options form was on the same page as the Batch Details form, and the controller handled the order option creation similar to how it handles batch images. However, this proved to be a messy and overly complicated form UI, so it was broken up into two separate forms that provide more information to the user. 

### User Customization
Users are stored on a separate table with their first_name, last_name, username, zip_code, and img_url for displaying profile images. Each user can create and own a batch, or can place an order on an order_option (also through a joins table). A demo login is provided, and when logged in, users can not only see their orders and batches through their own custom profile page, but they can also access links to edit and delete their batches.


**Objective:** Create doc with seed data for site.

### Phase 1: Backend setup and Front End User Authentication and Basic CSS (2 days)
**Objective:** Functioning rails project with front-end authentication. Basic CSS features (sticky nav bar).

### Phase 2: Batches Model, API, and Batch Creation Form (2 days)
**Objective:** Batch can be created, read, edited, and destroyed through the API and browser rendered form

### Phase 3: Batch Detail Page (Campaign) and Order Options (Rewards) (2 days)
**Objective:** Batch title, summary, user info, goal, progress tracker, images, and "options" (Rewards) are displayed on show page  

### Phase 5: Orders (Contributions), and Profile Page (2 days)
**Objective:** Enable orders to be taken on the Batch Detail Page, display complete user profile page with user information, image, orders, and sales.

### Phase 6: Home Page Styling, Production ReadME (1 day)
**Objective:** Style home page to display banner and batch summaries. Fix any other styling issues. Complete Production README.   


### Bonus Features (TBD)
- [ ] Categories
- [ ] Location-based search / Map
- [ ] Reviews on batch detail page
- [ ] Chef detail container on batch detail page
- [ ] Product detail container on batch detail page
- [ ] Product detail container on batch detail page
- [ ] Follows
- [ ] Videos
- [ ] User features (my batches, edit, delete)
