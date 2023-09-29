<div class='documentName'>Red team's documentation</div>

<h1>Purpose of the project:</h1>
<p class='standartParagraph'>Main task of the project was to ​​​​​create data visualization reports for HANZA Mechanics Narva using Power BI. To complete the task we needed to create a web application which​​​​​​ would display the data collected from Power BI</p>


<h1>Used technologies:</h1>
<li>Vue.js</li>
<li>Power BI</li>

<h1>Project implementation:</h1>

<p class='standartParagraph'>At the start of the project, we recieved an Excel file with data provided from HANZA. All the data was put into a program called Power BI. It consisted of 10 different types of departments, which had 6 different types of graphs. Power BI offers data visualization feature, which we used to display it in our web application using "iframe" tag.</p>

![img](/src/assets/Documentation/1.png)

<p class='standartParagraph'>The web application was made to select the 10 different departments and display the appropriate data for the selected departments </p>

![img](/src/assets/Documentation/dashboardsection.png)

<p class='standartParagraph'>The web application has the ability to select different departments and display their data as a slideshow. The user can select how frequently the slides should change using seconds.</p>

![img](/src/assets/Documentation/slideshow.png)



<h1>How to implement this program for a normal user:</h1>
<p class='standartParagraph'>If you want to add or edit data that's shown on a screen, you need to edit "reports-config.json" file. The file consists of id, name, report link (which is explained later) and image source. </p>

![img](/src/assets/Documentation/4.png)

<p class='standartParagraph'>Id is the row number, "name" is the name of the department that you select in the sidebar, "report link" is a link gathered from Power BI to connect your database table with our website, image source is an icon which is displayed next to the sidebar name.</p>

<p class='standartParagraph'>To get the report link, it is necessary to go to Power BI website and put your data into the website. Then you need to hover over the "file" section on the top of the screen and go to the "Website or portal" section</p>

![img](/src/assets/Documentation/5.png)

<p class='standartParagraph'>When clicked on "Website or portal" section, users will have a choice to copy the top link from their data and putting it on our website.</p>

![img](/src/assets/Documentation/6.png)

<h1>How to use our website:</h1>

<p class='standartParagraph'>When the user opens the website, He's transferred to the first dashboard element. The user needs to log in to Power BI account and when the user has logged in, he'll start seeing that department's diagrams. In the left side of the screen the user sees a sidebar, which consists of "Dashboard" and "Slideshow" buttons and has a dropdown functionality. "Dashboard" has 10 different departments and different data, "Slideshow" has the functionality to start displaying data. To display data in slideshow format, the user can adjust the slideshow time in seconds, then the user needs to press the "Slide selection mode", which lets the user select the desired dashboards. When the dashboard is selected, it will display a number on the right of the dashboard name. </p>

![img](/src/assets/Documentation/slideshowDashboard.png)

<p class='standartParagraph'>After selecting all the data that needs to be displayed, the user needs to press "Start slideshow". The User can collapse the sidebar when  full screen mode is enabled and the sidebar will expand after exiting full screen mode.</p>


![img](/src/assets/Documentation/fullscreen.png)

<p class='standartParagraph'>To stop the slideshow, user needs to simply press on one of the dashboard departments.</p>
<p class='standartParagraph'>Full screen functionality</p>

![img](/src/assets/Documentation/fullscreendisplay.png)



