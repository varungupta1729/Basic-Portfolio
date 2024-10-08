# Portfolio Web Application

This is a portfolio web application built using **React.js** for the frontend assignment provided by **Josh Technology Group**. The project adheres to the design guidelines provided in the [Figma Mockup](https://www.figma.com/design/ajOkDLGKy8dTYitBkTTPsG/Page-1?node-id=0-1&t=tGFFz02zQuiuIjdh-1). The web app is designed to be compatible with Chrome, Firefox, and Safari, following best practices for responsive design and dynamic data fetching using **JSON-server**.

## Features Implemented

### 1. **Home Page**
- **Static Sections**: 
    - Navbar (Sticky), Hero Section, Footer, and Contact Information.
    - Pixel-perfect design compared to the Figma mockup.
- **Dynamic Sections**:
    - **Projects Section**: Data for project cards is fetched from the JSON-server API.
    - **Recommendations Section**: A carousel is implemented, and the recommendation data is fetched from the API.
    - **Leave Me Your Info Section**: The user can submit a form, which saves the information via a POST request to the JSON-server.

### 2. **Skills Page**
- **Static Sections**:
    - Navbar (Sticky) and Footer.
    - Skills Section title and subtitle are static.
- **Dynamic Sections**:
    - **Skills Section**: Skill cards are populated by fetching data from the JSON-server.
    - **Add Skill Feature**: A dialog with a form allows users to add a new skill. The data is validated and posted to the API.

### 3. **Form Validations**
- Domain field is required.
- At least one skill must be associated with the domain.
- Proficiency level must be specified for each skill.

### 4. **Responsive Design**
- The page layout adapts to different viewport sizes to ensure the design does not break.

### 5. **API Integration**
- Set up a local server using JSON-server to mock API data.
- APIs handle dynamic sections for fetching and saving data.

### 6. **Cross-Browser Compatibility**
- The application is tested to function correctly on Firefox, Chrome, and Safari browsers.

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio-app.git
   cd portfolio-app



# Carousel Implementation
The recommendation section uses the react-slick library to implement a carousel. The following features are available:

Navigation through the carousel using arrow keys to move to the next and previous cards.
Dots below the carousel can be used for navigating between cards.
Dragging functionality allows users to swipe through the cards.

# JSON Server API Schema 

Endpoints

Projects

Get All Projects
Endpoint: /projects
Method: GET
Schema :
[
  {
    "id": "1",
    "title": "How To Make Flyer Design",
    "description": "Lorem Ipsum Dolor Sit Amet, Consec Adipisicing Elit Awd Lorem Ipsum...",
    "tags": [
      "Typescript",
      "ReactJs",
      "NextJs",
      "CSS",
      "HTML",
      "MongoDB"
    ]
  },
  ...
]


Skills

Get All Skills
Endpoint: /skills
Method: GET
Schema:
[
  {
    "category": "Front End Development",
    "skills": [
      {
        "name": "Html",
        "percentage": "90"
      },
      ...
    ],
    "id": "18e4"
  },
  ...
]

Create a New Skill Category
Endpoint: /skills
Method: POST
Request Body:       
{
  "category": "New Category",
  "skills": [
    {
      "name": "Skill1",
      "percentage": "50"
    }
  ]
}


Recommendations
Get All Recommendations
Endpoint: /recommendations
Method: GET
Schema:
[
  {
    "name": "James Gouse",
    "profile": "Graphic Designer",
    "rating": 5,
    "comment": "Great Quality!",
    "description": "Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi. Morbi Donec Amet.",
    "id": "f1c9"
    "imageUrl": "path"
  },
  ...
]


Forms

Create a New Form
Endpoint: /forms
Method: POST
Request Body:

{
  "name": "New Name",
  "email": "newemail@example.com",
  "subject": "New Subject",
  "message": "New message"
}

# Testing
To conduct cross-browser testing, I use Playwright. To test on the browsers(Firefox , Chrome , Safari)  with a screen width of 1440 pixels and a height of 750 pixels, as specified in the assignment document, follow these steps:

Ensure that Node.js is installed on your system.
Run the command node crossBrowserTest.js to initiate the tests.