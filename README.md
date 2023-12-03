# Project Exam 2 at Noroff - mariesaeter

An accommodation booking site called Holidaze (made with API distributed by Noroff)

> Live demo [_here_](https://holidazeadventures.netlify.app)

Image here

## Description
An accommodation booking site where you can view venues and register a user either as a customer or a manager. As a customer you can book a venue and see your upcoming stays, and as a venue manager you can create new venues, view bookings made to your venues, as well as update and delete your venue. Created with React and tailwind.

To be more on the creative side I've chosen to make the accomodation booking site into a booking site for venues inspired by books and movies.


## Assignment brief
A newly launched accommodation booking site called Holidaze has approached you to develop a brand new front end for their application. While they have a list of required features, the design and user experience has not been specified. Working with the official API documentation, plan, design and build a modern front end accommodation booking application.

There are two aspects to this brief: the customer-facing side of the website where users can book holidays at a venue, and an admin-facing side of the website where users can register and manage venues and bookings at those venues.

## Project's goal
To take the skills learned over the last two years and take on an extensive project where the finished product should reflect the candidate’s general development capabilities, in addition to visual and technical skills.
## API
> [_Noroff API_](https://api.noroff.dev/api/v1/holidaze)

## Features 
- Forms created with React-Hook-forms and yup-validation
- Lookahead searchbar on homepage
- Create and manage bookings

### User stories
1. A user may view a list of Venues
2. A user may search for a specific Venue
3. A user may view a specific Venue page by id
4. A user may view a calendar with available dates for a Venue
5. A user with a stud.noroff.no email may register as a customer
6. A registered customer may create a booking at a Venue
7. A registered customer may view their upcoming bookings
8. A user with a stud.noroff.no email may register as a Venue manager
9. A registered Venue manager may create a Venue
10. A registered Venue manager may update a Venue they manage
11. A registered Venue manager may delete a Venue they manage
12. A registered Venue manager may view bookings for a Venue they manage
13. A registered user may login
14. A registered user may update their avatar
15. A registered user may logout

## Built with
- HTML
- Tailwind CSS v. 3.3.5
- React v. 18.2.0 (set up with vite)
- JavaScript

 ## Contributing
 ### Issues
 Feel free to submit issues and requests for improvements.

 ### Pull requests

 1. Fork the repo on GitHub
 2. Install the repo on your own computer
 3. Commit changes to the new branch you created
 4. Push your work up to your fork
 5. Submit a Pull request so that your changes can be reviewed

 ## Contact

 [My LinkedIn Page](www.linkedin.com/in/marie-sæter-954821207)

 Feel free to contact me!
 
  ## Design process
 Prototype for mobile and styletile can be found below.
 
 > [_Style tile_](https://xd.adobe.com/view/03722514-459f-4d2f-8412-c36df139d3df-5621/)
 
 > [_Mobile design_](https://xd.adobe.com/view/7cded38b-3d52-4628-873a-46045114a949-298d/)

 > [_Web design_](https://xd.adobe.com/view/e460022c-a068-46a0-9118-bf04429d862e-b133/)

## Work process
> [_Github Project board Gantt_](https://github.com/users/mariesaeter/projects/5/views/1)
> [_Github Project board Trello_](https://github.com/users/mariesaeter/projects/5/views/2)

## To do
+ Add filter to browse page
+ Expand search to also cover date span and number of guests


## Issues
  + Ran into some difficulties with restricting available days for bookings when maximum numbers of guests are reached, see branch [_booking-calendar_](https://github.com/mariesaeter/Noroff-project-exam-2/blob/368468c6a70ecb368df7cc982280b5587de73b9e/src/components/venue/IndividualVenue.jsx) for my attempt

 ### Images and icons
 + Icons are gathered from fontawesome

 ### Inspiration
 #### Lookahead search
 Inspired by [Alfonsina Lizardo at dev.to](https://dev.to/alais29/building-a-real-time-search-filter-in-react-a-step-by-step-guide-3lmm) & [Mary Gathoni at makeuseof.com](https://www.makeuseof.com/react-search-bar-filters-data-create/)
 


