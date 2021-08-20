# Maryam Abdolbeigi

## Lilien Home Care Services 

This is the website for the Lilien Home Care Services in Hannover. 
The idea to create this website is to improve the existing website in wordpress, however, this version was not inspired by the old version in any way but in terms of content and site material.          
My goal to create this website is twofold, educational and commercial, and I tried to meet most expectations in both aspects.

## UX
---
This website gives an overview of the Lilien Home Care Services in Hannover. The main information is divided into 4 different pages, which are easily accessible and clearly arranged to make the information intuitive and simple.
The website is quite interactive meaning that it responds to the user's actions.

### The business objectives of this website are:

- Make the brand known and the company virtually accessible.
- Inform users about the company and the services it offers.
- Allow users to contact the company by filling out and submitting form, sending email or phone call.
- Allow users to conveniently find the location and directions.
- Receive emails and forms from potential employees interested in job offers from the company.
- Provide some particularly interesting news and updates related to Covid-19's situation and statics in the country.
- Provide information about the team.


###  The customer objectives of this website are:

- Find out more about this company.
- Learn more about the company's team and services.
- Contact the company to apply for a job.
- Contact the company to request a service.
- Review the terms of service to determine if the patient's needs match the company's services.


### The Ideal customer for this website:

Lives in Hanover and in needs of home care services.


### This project helps users achieve their goals when visiting the website by:


- Providing users with the intended type of information for which they visited the site.
- A good experience of UX.
- Easily navigating between pages and different parts of the site.
- Providing users with simple, understandable and, categorized data.   
- The website is quite intuitive and easy to work with.


### User Stories:

1. As a first time visitor, I want to know more in detail about this particular company.
2. As a first time visitor, I want to know what types of service this company has to offer.
3. As a first time visitor, I want to send them a query by sending an email.
4. As a potential employee, I want to apply for a job and send them my CV.
5. As a first time visitor, I want to know if my needs match the types of the services they offer.
6. As a returning visitor, I want to get directions to the location.



### Wireframe Mockups:
[Wireframes.pdf]

1. Desktop
![Desktop Mockups]
- [Home.pdf]
- [services.pdf]
- [job.pdf]
- [contact.pdf]

2. Ipad
![Ipad Mockups] 
- [Home.pdf]
- [services.pdf]
- [job.pdf]
- [contact.pdf]
 
3. Mobile 
![Mobile Mockups]
- [Home.pdf]
- [services.pdf]
- [job.pdf]
- [contact.pdf]


## Features-
### Existing Features


* #### Design in Depth
     * The color theme of the website has been inspired by the company name which means Liliy in German. The main and most used color theme is from the purple spectrum with a combination of other cold and relaxing colors.
     ![color theme](Readme-assets/img/color-theme.png)



     * The font families used in this project are:
          * 'Nunito Sans' for the body text and other elements.
          * 'Mukta' for the headlines and navigation links.
          * Sans-serif for the fallback font.


![navigation bar](README-assets/img/)
*   #### Navigation Bar     
    * Featured on all three pages, the full responsive navigation bar includes links to the Logo, Home page, Services, Job Offer and Contact page and is identical on each page to allow for easy navigation.
    * On the window load, the navigation links slide in to make a smooth animation on every landing view.
    * The animation will be disabled once the menu is collapsed to hamburger icon.
    * This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the back button.
    * The navigation bar collapses from medium screen sizes to a hamburger icon, which unfolds to a navigation drawer when clicked.
    * Clicking on the logo returns users to the home page as they would expect.



![landing page image and text ](README-assets/img)
*  #### The landing page area   
    * The landing area, grabs the user's attention by smooth scaling up from top of the window.



![Welcome Text](README-assets/img)
* #### The welcome Text
    * The welcome text is the second section on the home page and provides an overview of the company.




![About Our Team](README-assets/img)
* #### About Our Team
    * "About our team" section provides information about the company's team and management.


    ![contact information](README-assets/)
* #### The section "contact information"    
     * This section provides users with the contact information of the company.
     * The corresponding icons are added to each of the contact paths, not only for design reasons, but also for a better UX experience and quick access.
     * Each of the contact links opens in a new tab to allow easy navigation for the user.
     * The Google map in this section is embedded for users to quickly and easily get directions to the location.
     * To embed the map, the google map API is called.
     * The two columns will be displayed in block levels on Ipad and mobile devices for responsiveness reasons.


![Corona news](README-assets/img)
* #### Covid-19 News 
    * The section "covid-19 News" appears on the page once it enters to the viewport with an attractive animation.
    * This section uses data from the "coronavirus-smartable" API from RapidAPI and it renders its data on separate cards created with bootstrap.
    * Each card has a "read more button" that navigates the user to the corresponding news resource website in a new tab.
    * The text on the "Show More" button will change to "Show Less" once the column is expanded and vice versa.




![Corona stats](README-assets/img)
* #### Covid-19 Statistics
    * The section "covid-19 Statistics" appears on the page once it enters to the viewport with an attractive animation.
    * This section uses data from the "covid-19 data" API from RapidAPI and it renders its data on a list group created with bootstrap.
    * The text on the "Show More" button will change to "Show Less" once the column is expanded and vice versa.



    ![Services Page](README-assets/img)
* #### Menu page 
 * The Services page categories different types of services in 4 separate sections.
   * Each row appears to the window with a stagger and smooth animation.
   * Once clicked on the "learn more" link, the layout of the section changes into the long description of each service in a smooth way.
   * From the expanded description, the user can either navigate to the contact page by clicking on the "get in touch" button or go back to the initial layout by clicking on the back button.
   * Each column will be displayed on a block-level on Ipad and mobile devices for responsiveness reasons.



     ![Job Offer Page](README-assets/img)
* #### Job Offer Page 
 * On the job offer page, the user can find information about applying for a job.
 * The information regarding requirements and prerequisites are divided into 2 cards.
 * The user can see the text by clicking on the button on each card to flip the cards.
 * The back button, will flip the cards into their front side.
 * Each card appears on a block-level on iPad and mobile view for responsiveness reasons.




* #### Application form 
 * The application form allows users to fill out the form and send their message via email.
 * Once the submit button is clicked, a modal opens into the viewport saying that the company will respond to their message in 4 working days, and this is to prevent the user from confusion with hesitating whether the form has been sent.

## Technologies Used

### Languages
- HTML5
- SCSS
- JavaScript

### IDE
- VScode

### Frameworks, Libraries, CDN's, resources:


1. [Bootstrapv4.5.3](https://getbootstrap.com/) 
2. [Balsamiq](https://balsamiq.com/wireframes/)
3. [GitHub](https://github.com/)
4. [Git](https://git-scm.com/)
5. [FontAwesome](https://fontawesome.com/start)
6. [Google Fonts](https://fonts.google.com/)
7. [Chrome Developer Tools:](https://developer.chrome.com/docs/devtools/)
8. [Ami Responsive](http://ami.responsivedesign.is/)
9. [HTMLValidationService](https://validator.w3.org/)
10. [CSSValidationService](https://validator.w3.org/)
11. [Coolors.co](https://coolors.co/eae8ed-bcdadd-b3d1bb-62a9af-af70c2-500966)
12. [Unicorn Revealer Extention](https://chrome.google.com/webstore/detail/unicorn-revealer/lmlkphhdlngaicolpmaakfmhplagoaln?hl=en-GB)
13. [GreenSock](https://greensock.com/gsap/)
14. [Java Tutor](http://pythontutor.com/java.html#mode=edit)
15. [w3schools](https://www.w3schools/)
16. [jQuery](https://jquery.com/)
17. [RapidAPI](https://rapidapi.com/collection/list-of-free-apis)
18. [EmailJS](https://www.emailjs.com/)
19. [Google maps API](https://console.cloud.google.com/google/maps-apis/)
20. [Pexels](https://www.pexels.com/nl-nl/)
21. [Pinterest](https://nl.pinterest.com/)
22. [favicon.io](https://favicon.io/)
23. []()


## Testing
Testing information can be found in a separate [TESTING.md file](TESTING.md)
## Deployment

### Github
1. Log into Github and locate the relevant repository.
2. Click on the settings buttons on the menu.
3. Scroll down to the "Github pages".
4. Click on the link "Check it out here".
5. Change the branch from "none" to "main/master".
6. Click on the "save" button.
7. It might take a couple of minutes to retrieve the link to the published website in a green box.
8. Add the link of the website to the "About" section of the repository and include a short description of the project.
9. Click "Save Changes" and the link will be available in the About section of the repository.



### Forking the GitHub Repository
1. Sign in to GitHub and locate the GitHub Repository.
2. Go to the top right side of the screen and below the navigation bar is the "Fork" button.
3. After clicking this, you will now have a copy of the original Repository in your GitHub account.


### Local Clone
This is used to make changes to the project code.

1. log in to Github and locate the intended repository.
2. Above the Repository files, click on the "Code" button.
3. You then see three options, HTTPS, SSH and GitHub CLI. Select one and copy the URL.
4. Open a new terminal on Git Bash.
5. Now change the current working directory to the location you'd like the cloned directory to be made.
6. Type git clone, and then paste the URL you copied from the remote repository.

`$ git clone https://github.com/Yasi92/Home-Care-Services-Lilien.git`

### Author 



## Credits


- [Stackoverflow](https://stackoverflow.com/)
- [w3schools](https://www.w3schools/howto/tryit.asp?filename=tryhow_js_scroll_to_top)
- [GreenSock](https://greensock.com/gsap/)


## Content

- [Visiting Angels](https://www.visitingangels.com/) -    
The content of services description has been taken from this link, only for educational purposes.
- [pflegedienst-lilien](https://pflegedienst-lilien.de/)  -    
The content of welcome text, team information, job description and contact info has been taken from the current website of Lilien Home Care Website.
- [Coronavirus Smartable](https://rapidapi.com/SmartableAI/api/coronavirus-smartable/)    -
The content of corona news has been taken from this API
- [COVID-19 data](https://rapidapi.com/Gramzivi/api/covid-19-data/)    - 
 The covid-19 statistics' data In Germany has been taken from this API
 - [Google Map API](https://console.cloud.google.com/google/maps-apis/)   - 
 The embeded map on the website is created by Google Map APIs

## Media
- [The photots throughout the website were taken from](https://www.pexels.com/)
- [Pinterest](https://nl.pinterest.com/)
- [pflegedienst-lilien](https://pflegedienst-lilien.de/)



## Acknowledgements

- Tutors at Code Institute for their continued support.
- Code Institute's Slack community was a great help every step of the way during the project.
- Stack Overflow.
- My mentor Gurjot Singh.
- Code Institute's Slack community was a great help every step of the way during the project.



