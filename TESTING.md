# Buno Coffee Website - Testing in detils

[Lilien Home Care Services In Action](https://yasi92.github.io/Home-Care-Services-Lilien/)          
[Main README.md file](/README.md)

## Validation

- ![HTML Validation](Readme-assets/img/html.validation.png)    was used to validate the code in the three HTML files. I tested each page separately, debugged the errors and, in the end, they have all passed with no errors.

- ![W3C CSS Validation](Readme-assets/img/css.validation.png) was used to validate the code in my style.css file.
- The website has been tested with the Lighthouse for each page separately and on both desktop and mobile devices and, required actions have been taken to improve the functionality of the website as much as possible and as far as related to HTML and CSS.
![Lighthouse result]()  Was used to check the overall performance of the website and as a way to improve the website performance.
                                  


| Bugs | Solutions |            
| ----------- | ----------- |
| When testing the published website, noticed that the "scroll-back-to-top" button does not appear after scrolling down the page and its position behaves as if it had an absolute position. The button was not showing on the viewport but it was placed at the bottom of the page instead. | I have fixed this by removing the perspective property from the body element.|
| When testing the HTML files in the w3 validator, I received errors saying that buttons must not appear as a descendant of 'a' elements or vice versa.| I have fixed this by removing the nested structure and instead of giving a button class from bootstrap to an 'a' element.|
| When Viewing the job.html on iPhone devices, noticed that the cards would not flip on click but this was not an issue on other devices. | I have fixed this by adding -webkit-... -o-... and -moz-... to the relevant properties for more compatibility.|



## Unfixed Bugs

|When testing the HTML files in the w3 validator, I received warnings regarding empty headings. | I have left this unfixed since the data filling out these empty headings comes from an API using Javascript.|

## Known issues
- In the job offer page "job.html", there was an issue with flipping cards on mobile view. to fix this issue, I would have to add perspective to the body element and that would have caused another issue with the back-to-top button as it would disable the fixed position of the button and instead of the viewport, it would place the button all the way down the page.
To fix this, I gave a class to the body element of that page and set the perspective property using a media query, but this left the back-to-top (sometimes) disabled on the job offer page on a mobile view which does not cause a serious issue as the page content is not long.




## Client stories testing:

The potential common paths through the website:

- Home > Services > Contact
- Home > Contact
- Home > Job Offer 
              

Each of these possible paths is achievable by simply navigating through the navigation bar and a menu link shortcut on the "Home" page.
### Testing client stories from UX section of [README.md](/README.md)

1. As a new visitor, I would like to get some general information and an introduction to the business.
   - The general information about the company is provided on the Home page.
2. As a first time visitor, I want to know what types of service this company has to offer.
   - The user can navigate to the Services page either throught the shortcut button on the home page or from the links on the navigation bar.
3. As a first time visitor, I want to send them a query by sending an email.
   - The user navigates to the "contact" page, and after having filled the form they submit it.
   - The user navigates to the contact page and choose their preffered contact method.
4. As a potential employee, I want to apply for a job and send them my CV.
   - The user navigates to the job offer page and after having read the job requirements and prerequisits they will fill out the application form.
5. As a returning visitor, I want to get directions to the location.
   - The visitor scrolls down the home page or nagigates to the contact page and, get directions from the embeded google map.
   







     



## Manual (logical) testing of all elements and functionality on every page.      

###  Navigation Bar

 - Go to the "Home" page from a desktop and ensure that the navigation links enter the page smoothly as having set the animation effect.
 - Change the screen size from desktop to tablet to verify that the navigation bar is responsive and switches from the inline menu to the burger icon dropdown menu at the appropriate place.
 - Change the screen size and ensure that the animation on the nav links are stopped when the navbar collapsed.
 - Open the page by Chrome developer tool and check the responsiveness of the navigation bar and make sure that the expanded navigation bar switches to a burger icon dropdown menu at the appropriate place.
 - Click on the burger icon and make sure the menu items dropdown.
 - Click on every link item to verify they function accordingly.
 - Click on the logo in the navigation bar and verify that it links to the "Home" page.


###  The landing page and headings 

 - Go to every single page one by one to ensure that the animation on the landing images runs as expected and from zero opacity after the page has been compeletly loaded.
 - Ensure that the headings appear on the page after the animation of the image has been compeleted.
 - Click the refresh button on the browser and confirm the animation effects on the image and the text run smoothly and as expected.

      


###  The section "About Our Team" 

- Click on the join our team button to ensure that it links to the job offer page.
- Resize the window to check that the columns appear on a block level on iPad and mobile view.


###  The section "Contact Information"

 - Reduce the width of the window to confirm that the map and the text lay on block levels.
 - Click on the map to confirm it navigates to the Google map and directs to the correct address.
 - Check the console log to ensure that there is no warning or error related to calling google map API.
 - Click on the telephone icon to confirm the link function accordingly.
 - Click on the Instagram link to verify that it opens the Instagram page in a new tab.
 - Click on the Mail icon to verify that it leads to the mailbox with the correct email address and, in a new tab.
 - The above steps are repeated on the contact information section on the contact page as well.


###  The section "Covid-19 News " 

- Click on the "show more" button to ensure that it slides the covid-19 news cards.
- Ensure that the text on the button changes once it is expanded and vice versa.
- click on the read more buttons to make sure that they links to the corresponding referense websites.
- Resize the window to check that the cards takes the whole column width on mobile devices.
- Click on the "show less button" to make sure that it collapses the section.


###  The section "Covid-19 Statistics"
- Click on the "show more" button to ensure that it slides the covid-19 statistic list.
- Ensure that the text on the button changes once it is expanded and vice versa.
- Reduce the window to ensure that the paddings of the table changes accordingly.

###  The Services Page

- Go to the services page and essure that each row smoothly enters the viewport with a slight delay one after another.
- Click on the "learn more" links and ensure that the layout of the information changes as expected.
- Click on all links and make sure that every links only toggle the relevant information of their own rows.
- On expanded view, click on the back button to make sure that the layout of the information changes to its initial state.
- click on the "get in touch" buttons to make sure that it links to the contact form section on the contact page.
- Reduce the window size to make sure that the columns appear on block level on iPad and mobile viewports.

     


###  Flipping Cards
 - Navigate to the "Job Offer" page from a desktop.
 - Click on the "click Me" buttons to ensure that each card flips on click and each button toggles the correct card.
 - Click on the back button on the back face of the cards to check that they flip back the cards.
 - Resize the window to make sure that the cards appear on block level and with less padding around.
 - Check the flipping action on actual mobile and iPad devices to make sure they function right.



###  Application form

- Resize the window and ensure that the form size is responsive and it modifies the layout of the first two columns on small views accordingly.
- Have filled the form and click on the submit button to make sure that the modal opens up in the center of the viewport after having the form submitted.
- Check the linked mail box to make sure that the form has been received in the assigned template.
- Repeat the above submitting process on mobile devices.



### Contact Form

- Resize the window and ensure that the form size is responsive and it modifies the layout of the first two rows on small views accordingly.
- Have filled the form and click on the submit button to make sure that the modal opens up in the center of the viewport with the relevant text after having the form submitted.
- Check the linked mail box to make sure that the form has been received in the assigned template.
- Repeat the above submitting process on mobile devices.







###  Sticky back-to-top button
 - Verify that the button shows up in the right position on every page.
 - Click on the button to confirm that the button works.
 - Open the page in the "Developer Tool", choose a mobile device and ensure that the size and spacing of the button change properly-

### Footer
 - Confirm that footer code is identical on all HTML pages.



 

## Further Testing
 - I have tested the website on the following internet browsers and no serious issue was found:

     - Google Chrome
     - Safari
     - Firefox

- I have tested the website on the following devices:

     - iPhone X/12/12 pro (On physical devices)
     - Galaxy S21 (On physical device)
     - iPad (On physical devices)
     - iPad Pro (Chrome Developer Tools)
     - iPad mini (Chrome Developer Tools)
     - Galaxy Note 3 (Chrome Developer Tools)
     - Galaxy S III (Chrome Developer Tools)
     - Laptops
 



- Links were tested repeatedly.
- Friends and family members were asked to review the website, its content and the user experience overall.
- Code Institute students were asked to review the website.