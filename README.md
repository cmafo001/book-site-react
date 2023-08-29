# book-site-react

This is a React-based website for a book-related platform. The website utilizes React Router for navigation and lazy loading of components. It features several pages including Home, Library, Blog, and MyList. The UI layout includes a navigation bar and a footer displaying the current date. Site is live at https://cmafo001.github.io/book-site-react/

## Project Structure

The project directory is structured as follows:

- `public/`: Directory containing logo & background. 
- `src/`: Source code directory.
  - `App.css`: Stylesheet for the application.
  - `App.jsx`: Main application component.
  - `Navbar.jsx`: Component for the navigation bar.
  - `index.css`: Index stylesheet.
  - `index.html`: Index HTML file.
  - `main.jsx`: Main entry point for the application.
  - `Pages/`: Directory containing page components.
    - `Home.jsx`: Home page component.
    - `AddTodo.jsx`: Adds selected books to `MyList.jsx`, from `Library.jsx`.
    - `Library.jsx`: Library page component.
    - `Blog.jsx`: Blog page component.
    - `MyList.jsx`: MyList page component.
  - `blogs/`: Directory for blog-related content.
  - `books/`: Directory for book-related content.
  - `welcome/`: Directory for welcome-related content.


## Getting Started

1. Clone this repository to your local machine.
2. Navigate to the project directory: `cd react-book-site`.
3. Install the required dependencies: `npm install`.
4. Start the development server: `npm start`.
5. Open your web browser and navigate to `http://localhost:3000` to view the website.

## Features

- **Home Page**: Displays the main content of the website.
- **Library Page**: Provides access to a library of books.
- **Blog Page**: Showcases blog posts related to books.
- **MyList Page**: Allows users to manage their reading lists.

## Dependencies

- `@emotion/react`: ^11.11.1
- `@emotion/styled`: ^11.11.0
- `@mui/icons-material`: ^5.14.6
- `@mui/material`: ^5.14.6
- `ag-grid-community`: ^30.1.0
- `ag-grid-react`: ^30.1.0
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-router-dom`: ^6.15.0


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

