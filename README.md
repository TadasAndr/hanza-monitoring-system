<div class='documentName'>Red team's documentation</div>

<p class='paragraphName'>Purpose of the project:</p>
<p class='standartParagraph'>Main task of the project was to ​​​​​create data visualization reports for HANZA Mechanics Narva using Power BI. To complete the task we needed to create a web application which​​​​​​ would display the data collected from Power BI</p>


<p class='paragraphName'>Used technologies:</p>
<li>Vue.js</li>
<li>Power BI</li>

<p class='paragraphName'>Project implementation:</p>

<p class='standartParagraph'>At the start of the project we recieved an Excel file with data provided from HANZA. All the data was put into a program called Power BI. It consisted of 10 different types of dapartament, which had 6 different types of graphs. Power BI offers data visualization feature, which we used to display it in our web application using "iframe" tag.</p>

<!-- <img src="@/assets/Documentaton/1.png"> -->
![img](/src/assets/Documentaton/1.png)

<p class='standartParagraph'>Web application was made to select the 10 different dapartament and display the appropriate data for the selected dapartament. </p>

![img](/src/assets/Documentaton/2.png)

<p class='standartParagraph'>The web application has the abbility to select different dapartament and display their data as a slideshow. The user can select how frequently the slides should change using miliseconds.</p>

![img](/src/assets/Documentaton/3.png)



<p class='paragraphName'>How to implement this program for a normal user:</p>
<p class='standartParagraph'>If you want to add or edit data that's shown on a screen, you need to edit "reports-config.json" file. The file consists of id, name, report link (which is explained later) and image source. </p>

![img](/src/assets/Documentaton/4.png)

<p class='standartParagraph'>Id is the row number, "name" is the name of the departament that you select in the sidebar, "report link" is a link gathered from Power BI to connect your database table with our website, img source is an icon which is displayed next to the sidebar name.</p>

<p class='standartParagraph'>To get the report link, it is nessicery to go to Power BI website nad put your data into the website. Then you need to hover over the "file" section on the top of the screen and go to the "Website or portal" section</p>

![img](/src/assets/Documentaton/5.png)

<p class='standartParagraph'>When clicked on "Website or portal" section, user will have a choice to copy the top link from their data and putting it in our website.</p>

![img](/src/assets/Documentaton/6.png)












