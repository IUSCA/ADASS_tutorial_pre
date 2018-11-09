### ***New instructions added on 11/9, please view the last items before attending tutorial session

# ADASS 2018 MEAN Tutorial Setup and Validation

Follow these directions to make sure your computer is ready to participate in the 2018 ADASS MEAN Tutorial

1. Install (links to installation pages):
   * [Node.js/npm (package manager)](https://nodejs.org/en/download/package-manager/) or [Node.js/npm (binary)](https://nodejs.org/en/download/)
   * [MongoDB](https://docs.mongodb.com/manual/administration/install-community/)
  
2. Start MongoDB following the directions for your OS
3. Open a terminal window and clone this repository:
   * `git clone https://github.com/IUSCA/ADASS_tutorial_pre.git`
  
4. Run `cd ADASS_tutorial_pre`
5. Run `npm install && npm start`
6. Open http://localhost:3000 in a browser and check the verification results.  
   * You should see three "Success" messages at the top and a list of software versions below.  Please ensure that your installed Node.js is at least v8, and your installed MongoDB is at least v3.4.
   * If your verification fails, send the output of the web page and the console log to [youngmd@iu.edu](mailto:youngmd@iu.edu?subject=ADASS%20Tutorial%202018) for assistance.  We will also be onsite for a period before the tutorial session begins to provide setup help.
 
7. Return to the terminal window and terminate the running `npm start` process with `CTRL+c`
8. Run `npm install express-generator -g`
   * You may need to run this command as root/admin if you encounter an `EACESS` error 
   

We *highly recommend* that you install and become familiar with an IDE suited for web development, such as:

*  [WebStorm](https://www.jetbrains.com/webstorm/)
*  [Visual Studio Code](https://code.visualstudio.com/)


###  Added 11/9
*  [MEAN Stack Cheatsheet](https://docs.google.com/document/d/1mv8JhqXlggjaWaHEIa6vSQStE2_4Nn5Cxk_ksHihaQ0/edit?usp=sharing) - Useful list of commands, file descriptions, and code snippets.  A printed copy of the cheatsheet will be handed out at the start of the tutorial
*  [mean-stack Tutorial Repository](https://github.com/IUSCA/mean-stack) - A repository of the code that will be produced during the tutorial, with checkpoint branches corresponding to different development points.  The sample dataset needed for the tutorial is also in this repository.

