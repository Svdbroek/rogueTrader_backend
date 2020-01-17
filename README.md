#RT-RPG backend 

This backend app is here to facilitate the <a href='https://github.com/Svdbroek/RogueTrader-Characterbuilder'>Rogue Trader Character Builder </a>


##instalation

after running npm install, and connecting the backend to a local database (url constant can be found in db.js) the database needs to be fed some data.
in the "database files" folder you can find two .csv files that need to be uploaded to the database-tables with the same name. 
after this is done the app can be started witn node index.js

##issues

currently not all the data in originpath.js is formatted in a way the front-end can handle. 
To see an example of the way the data should be shaped you can check the first entry in any subsection (as marked by comments)
