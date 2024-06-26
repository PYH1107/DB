# DB (112-1 Database)

- This is for the Database lecture in 2023 Fall from NTNU TAHRD.
- Noted by Yun-Huei Pan (May Pan).

### Key Takeawys
1. Differences between SQL and noSQL
<img width="422" alt="image" src="https://github.com/PYH1107/DB/assets/93831321/55940d5b-5a0f-4eda-b9fa-086379bf56d6">


### HW
- [HW1: Create your own database: ER Diagram](https://youtu.be/9TLJht8OsqI)
  ![image](https://github.com/PYH1107/DB/assets/93831321/2b4a959c-af73-47cb-9066-9813dbeee310)

- [HW2: Create your own database: frontend + backend](https://youtu.be/ULseoQCwAoQ)
- [HW3: MongoDB](https://youtu.be/xS1sqJnnocc) 
- [Final Project video](https://youtu.be/wpaiewFtmSM?si=cqDM4DM9qDo00VAf) & [Final Project in Retool](https://ntnutahrd.retool.com/apps/1a6c5660-9bdc-11ee-86da-8f8d4b37c232/IdeaShare%20Beta)
	- This is the final project of this lecture for the semester. Instead of using node.js and react, we figure out a great tool, which is [Retool](https://retool.com/?_keyword=&adgroupid=&utm_source=google&utm_medium=display&utm_campaign=20576962772&utm_term=&utm_content=&hsa_acc=7420316652&hsa_cam=20576962772&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=CjwKCAiAp5qsBhAPEiwAP0qeJtWepSaznhaMiCgreis-ecLOexnMpbDZdn5YX9hT6lJdhciv9hq4hxoC5gkQAvD_BwE). It helped us a lot for designin the user interface and the backend since we can build our own database in it, too. Feeling grateful for the help of modern technology xD and we'll go all out to make our project into reality. <3
 	 <img width="720" alt="image" src="https://github.com/PYH1107/DB/assets/93831321/bef07909-ca21-4f13-834b-7984c14ec1ab">![image](https://github.com/PYH1107/DB/assets/93831321/8dbc4bcd-a534-4449-9da0-bfb8631a614d)
  	- we can update / delete your demo & ideas by using the bar on the right side, which has already be connected to our query

### Notes to myself
#### 1. For HW1:
  - Just simply biuld tables that you need
  - DO NOT forget your root password
#### 2. For HW2:
  - Goal: This homework aims to connect the CRUD backend & frontend and also connect with mysql workbench
  - Step 1. source code download from [here](https://github.com/machadop1407/Simple-CRUD-React-Node-MySQL) and this is the [tutorial](https://www.youtube.com/watch?v=re3OIOr9dJI&t=0s). You can also learn CRUD in mandarin Chinese by watching [this video](https://www.youtube.com/watch?v=e98hQpi8Pac&t=186s), which is recorded by [Irene Chang](https://github.com/41071119H-Irene), one of my best classmate ever.
  - Step 2. instructions to remember
    (i) create new folders: client, server
    (ii) steps as followings:
    - client (react) :
    	- 2.1.1 `npm create react-app client`
     	- 2.1.2  change director to your client folder
      	- 2.1.3  `npm start`
      	- 2.1.4 from folders we just downloaded : `Simple-CRUD-React-Node-MySQL-main.zip\Simple-CRUD-React-Node-MySQL-main\client\src`
	- 2.1.5 copy three files: **App.css, App.js, and index.js**. Then Replace these files into your client>src we've just added by "npm" (If "axios" doesn't exist, "npm install axios")

	- server (node.js):
		 2.2.1 change directr to your server folder 
		  2.2.2  `npm init` (Then there should automatically appear a "**package.json**" file in your server folder)
	      2.2.3 from folders we've just downloaded: 
	      add **"index.js"** in `Simple-CRUD-React-Node-MySQL-main.zip\Simple-CRUD-React-Node-MySQL-main\server`  to YOUR server folder
    
    (iii)
      Change the names of our tables and columns from index. js(in server folder) and App.js(in client folder) respecitvely
      - ask ChatGPT to change the table  and column names into what you've done in HW1
      
#### 3. For HW3:
  - Goal: using mongodb to access our data in mysql
  - useful resources:
    - [backend](https://www.tutussfunny.com/mern-full-stack-complete-application-mongodb-express-react-node-js/)
    - [mongodb tutorials](https://www.youtube.com/watch?v=gDOKSgqM-bQ)
There are two ways to get to our goal
  (i) Method 1, by installing. Referenced from my intellegent classmate [huwalli](https://github.com/Huwalli).
      Tutorial playlist that I checked : [Complete MongoDB Tutorial](https://www.youtube.com/watch?v=ojKJqNQYaOI). For this homework, we need only video 1~4 (merely for learning how to use the tool and install it)
      - notes to myself: neccessary downloading: mongadb community server & mongodb compass
  (ii) Method 2, by scripts.
      - videos that our professor recommanded us
        -  [Build app using React JS, Node Express JS and Mongo DB (MERN Stack)](https://www.youtube.com/watch?v=mDgKjb5eWPk)
        -  [Nodejs React with Mongodb (MERN) Crud App(MongoDB, Express, React, Node JS)](https://www.youtube.com/watch?v=DdzAr3TJKHg)
      
