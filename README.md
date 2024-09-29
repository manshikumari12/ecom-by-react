
ecom-by-react
E-Commerce Website<br> This is a full-stack e-commerce website built using React.js for the frontend and a Node.js/Express backend. The website allows users to sign up, log in, view products, and add them to a shopping cart.<br>

Features<br>

User Authentication: Sign up, log in, and log out functionalities.<br>
Product Display: Users can browse through various products.<br>
Single Product View: View detailed information about a selected product.<br>
Shopping Cart: Add products to the cart.<br>
Responsive Design: The application is optimized for mobile and desktop view.<br>
Technologies Used<br>

Frontend:<br>

React.js: Main library for building the user interface.<br>
React Router: For handling routing in the app.<br>
Slick Carousel: For creating product sliders.<br>
CSS: Custom styling for different components.<br>



**Usage**<br>
![landing](https://github.com/user-attachments/assets/4ffaeb1c-908a-4bf9-b1e8-1833855fb939)
![Screenshot 2024-09-29 074732](https://github.com/user-attachments/assets/a8e9b6a2-5b38-4b80-a82c-07df24c396e5)
![Screenshot 2024-09-29 074755](https://github.com/user-attachments/assets/84936213-9824-486a-958c-e800a52ea68a)

- **Signup**: Users can sign up by entering a name, email, and password on the signup page.<br>

![signup](https://github.com/user-attachments/assets/0b3c17b2-6d7b-4120-b502-ada1ab1acf03)

- **Login**: After signing up, users can log in using their credentials.<br>
![Screenshot 2024-09-29 074900](https://github.com/user-attachments/assets/4325d530-29f7-48c0-bd97-0b1370d5ac99)

- **View Products**: Products are displayed on the homepage. You can also see detailed information for each product by clicking "View".<br>
![Screenshot 2024-09-29 074922](https://github.com/user-attachments/assets/81beb9bb-6cc9-4b06-8e1b-473429d010c3)
![Screenshot 2024-09-29 074949](https://github.com/user-attachments/assets/718619bb-363c-4226-b44c-6a059d389dab)

- **Add to Cart**: Users can add products to the cart after logging in.<br>

![Screenshot 2024-09-29 075010](https://github.com/user-attachments/assets/2c6fb14b-a4c0-40d4-888c-d132f4d84a82)
Backend:<br>

Node.js: Server-side JavaScript environment.<br>
Express.js: Web framework for building the API.<br>
MongoDB: NoSQL database to store user and product data.<br>
JWT Authentication: For secure user authentication.<br>
Project Structure<br>

graphql
Copy code
├── public/
├── src/
│   ├── App.js                 # Main application file
│   ├── Components/
│   │   ├── Home.js            # Home page with image and product cards
│   │   ├── Nav.js             # Navigation bar component
│   │   ├── Login.js           # Login form component
│   │   ├── Signup.js          # Signup form component
│   │   ├── Product.js         # Displays list of products
│   │   ├── SingleProduct.js   # Single product detailed view
│   │   ├── Cart.js            # Shopping cart page
│   └── styles/
│       ├── Home.css           # CSS for Home page
│       ├── Nav.css            # CSS for Navigation bar
│       └── ...                # Other component styles
└── README.md                  # Project documentation
<br>
Installation<br> Clone the repository:<br>

bash
Copy code
git clone https://github.com/your-username/e-commerce-app.git
```<br>

Install the dependencies for the frontend:<br>

```bash
cd e-commerce-app
npm install
```<br>

Setup and install the backend dependencies:<br>

```bash
cd backend
npm install
```<br>

Start the backend server:<br>

```bash
npm start
```<br>

Start the React app:<br>

```bash
cd ..
npm start
```<br>

Navigate to [http://localhost:3000](http://localhost:3000) in your browser.<br>

**Environment Variables**<br>
For the backend, you will need to configure the following environment variables:<br>
- `MONGO_URI`: MongoDB connection string.<br>
- `JWT_SECRET`: A secret key for JWT authentication.<br>

Create a `.env` file in the backend folder and add these variables.<br>

**API Endpoints**<br>
- `POST /users/signup`: Sign up a new user.<br>
- `POST /users/login`: Log in an existing user.<br>
- `GET /product`: Fetch all available products.<br>
- `GET /product/:productId`: Fetch details of a single product.<br>
- `POST /cart/add`: Add a product to the user's cart.<br>



**Future Enhancements**<br>
- **Order History**: Display users' past orders.<br>
- **Product Search**: Implement a search bar to filter products.<br>
- **Payment Integration**: Integrate a payment gateway for checking out products.<br>
