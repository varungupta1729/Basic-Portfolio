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