# book-site-react

This is a React-based website for a book-related platform. The website utilizes React Router for navigation and lazy loading of components. It features several pages including Home, Library, Blog, and MyList. The UI layout includes a navigation bar and a footer displaying the current date. 

Site is live at https://cmafo001.github.io/book-site-react/

## Pages

- **Home Page**: Displays the main content of the website.
- **Library Page**: Provides access to a library of books.
- **Blog Page**: Showcases blog posts related to books.
- **MyList Page**: Allows users to manage their reading lists.

## Project Structure

The project directory is structured as follows:

# Folder Structure

| Directory                  | Description                                      |
| -------------------------- | ------------------------------------------------ |
| `public/`                  | Directory containing logo & background.         |
| `src/`                     | Source code directory.                           |
|   ├── `App.css`            | Stylesheet for the application.                  |
|   ├── `App.jsx`            | Main application component.                      |
|   ├── `Navbar.jsx`         | Component for the navigation bar.               |
|   ├── `index.css`          | Index stylesheet.                                |
|   ├── `index.html`         | Index HTML file.                                 |
|   ├── `main.jsx`           | Main entry point for the application.           |
|   ├── `Pages/`             | Directory containing page components.            |
|   │   ├── `Home.jsx`       | Home page component.                            |
|   │   ├── `AddTodo.jsx`    | Adds selected books to `MyList.jsx`, from `Library.jsx`. |
|   │   ├── `Library.jsx`    | Library page component.                         |
|   │   ├── `Blog.jsx`       | Blog page component.                            |
|   │   ├── `MyList.jsx`     | MyList page component.                          |
|   ├── `blogs/`             | Directory for blog-related content.              |
|   ├── `books/`             | Directory for book-related content.              |
|   ├── `welcome/`           | Directory for welcome-related content.           |




### Firebase Integration

The application integrates with Firebase for storing and managing data related to books. Firebase Realtime Database is utilized for this purpose. The following components interact with Firebase:

Library.jsx: This page lists available books and allows users to add them to their personal list. It interacts with the Firebase Realtime Database to add books to the user's collection.

MyList.jsx: This page displays the user's personal list of books and allows them to remove items. It interacts with the Firebase Realtime Database to retrieve and remove books from the user's collection.

## Dependencies

| Dependency            | Version    |
|-----------------------|------------|
| @emotion/react        | ^11.11.1   |
| @emotion/styled       | ^11.11.0   |
| @mui/icons-material  | ^5.14.6    |
| @mui/material         | ^5.14.6    |
| ag-grid-community     | ^30.1.0    |
| ag-grid-react         | ^30.1.0    |
| react                 | ^18.2.0    |
| react-dom             | ^18.2.0    |
| react-router-dom      | ^6.15.0    |



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

