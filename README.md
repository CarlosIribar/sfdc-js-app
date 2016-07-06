Javascript -  Salesforce APP
===================

This skeleton app serve as base to develop client-side app in Salesforce. The app has the minimal dependencies to  work with ES6, Webpack and JSforce.

----------


Getting Started
-------------


#### Dependencies 

 - Node
 - NPM

Tool to create the zip

  

 `brew install p7zip`


#### Install
Install package's dependencies

`npm install` 

####Run the app

`npm start`

#### Usage
Create Visualforce page pointing to: *localHost:8080/bundle.js*

Example

    <apex:page applyBodyTag="false"  docType="html-5.0">
      <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head>
        <body>
          <div id="container">
          </div>
        </body>
        <script type="text/javascript">
        </script>
        <script charset="utf-8" src="https://localhost:8080/bundle.js" type="text/javascript"></script>
      </html>
    </apex:page>

#### Deploy
The following script generate and upload the zip to salesforce

`npm deploySR`

Replace the script tag on the page pointing to the static resource. Example:
 

    <script charset="utf-8" src="{!URLFOR($Resource.mystaticresource,'bundle.js')}" type="text/javascript"></script>

### Deploy Configuration

Edit salesforce.config.js file:

    username: '',
	password: '',
	zipName:'',
	zipDescription: ''


