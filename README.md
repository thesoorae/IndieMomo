# Indiemomo

[Live Link](https://indiemomo.herokuapp.com)

Indiemomo is a full-stack web application inspired by Indiegogo and built for users to sell and purchase batches of their food. It is built using Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.



## Features & Implementation

### Batches Rendering
Batch basic information, including columns ```id```, title, ```chef_id```, ```category```, ```brief_description```, ```long_description```, ```goal```, ```zip_code```, and ```order_description``` is stored in one table on the database. The Batch model also accesses information through associations to the ```batch_images```, and ```order_options``` tables.

Upon rendering the home page, an API call is made to the database which stores all of the batches on the state, further calling through associations to return the chef object that owns each batch, as well as arrays of ```order_options``` and ```batch_images```. All of this information is then rendered on the page in different ways, depending on whether it is a home, Index or Show Page.

There is also a search method built into the controller that fetches Batches matching a search query (either in the title or description of that batch), and will render the relevant batches onto the page.

Each batch item component also provides instantaneous feedback on its progress bar for how close it is to achieving its order goal. Whenever a user places an order, the progress bar immediately increases, built into the internal component state.

### Batch Editing

Batch creation and editing are handled through the Start a Batch button. The user must first be logged in order to create or edit a batch, and of course, the user can only edit their own batches. To create a batch, the site first gives the user a very simple form to fill out, consisting of the title and goal of the batch. As the user progresses to the next step, this batch is created in the database, and the user is routed to the edit page.

They then fill out more details on the Batch Detail form, including uploading images via Cloudinary's upload image widget. Once the image or images are uploaded, thumbnails of the saved images are immediately displayed on the page, thanks to being stored on the internal component state. The user can choose to remove this image from the internal state, or continue adding more images. When the user saves or progresses to the next step, all the information stored on this form is sent back via API call to the database, hitting the Batches controller (which also handles the separate creation of associated images by iterating through the array of url's that is returned).

If no image is uploaded, a default placeholder image is generated on the front end, rather than being stored in the database.

The next step is the Order Options form, where users can create options to attach to their batches. Originally, the Order Options form was on the same page as the Batch Details form, and the controller handled the order option creation similar to how it handles batch images. However, this proved to be a messy and overly complicated form UI, so it was broken up into two separate forms that provide a cleaner UI and better functionality for the user.

The order option form consists of two components, a separate order form as well as a page that displays current order options and the ability to remove these options.

Once the Order Options are created, users click the "Start Selling" button which makes the page "live" and they can see their batch information rendered in all its glory. Users can now begin purchasing food from them and they can start taking orders.  

### Batch Show Page and Ordering
The Batch Show page uses the ```:batch_id``` in the path to render the components for one particular batch, including all images, any longer description information, chef information, and order options. Users can click on buttons to place orders, and these orders will be added to their list of orders (visible through their order profile page). They can also click on the chef's information to find out what other batches each chef has created, as well as what orders they have placed.  

### User Customization
Users are stored on a separate table with their ```first_name```, ```last_name```, ```username```, ```zip_code```, and ```img_url``` for displaying profile images (as well as a default placeholder). Each user can create and own a batch, or can place an order on an ```order_option``` (also through a joins table). A demo login is provided, and when logged in, users can not only see their orders and batches through their own custom profile page, but they can also access links to edit and delete their batches.

## Future Directions for the Project
In addition to the features already implemented, I plan to continue building in features to make this site a truly robust, attractive, and functional tool for the community.

###Categories
An easy addition will be to create category thumbnails on the home page so users can see all the products that are available within a certain category.

###Location search
Zip codes are built into the tables for each user and batch to enable location searching, since ordering something from people from very far away would not be particularly practical. I'm also planning to build in a map to see what sellers are available in your area.

### Explanation Pages
Need more information on the "How it Works" page.
