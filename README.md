# Interact_tech_test

- [Interact\_tech\_test](#interact_tech_test)
  - [Set up](#set-up)
    - [Node installation](#node-installation)
    - [Project installation](#project-installation)
  - [Usage](#usage)
    - [Commands](#commands)
  - [Observations](#observations)
    - [Further additions](#further-additions)


## Set up
### Node installation
If you don't have Node installed on your machine, download and follow the installation of node guide from: https://nodejs.org/en/download/package-manager
### Project installation
Once node is on your machine in the root folder of this project run the following command:
    ```npm install```
Create a copy of the data.example.json file and name it data.json
Fill in the required details, this will be the file used for retrieveing test data.
## Usage
Once the project has been set up the folowing commands can be used to run playwright.
### Commands
- ```npm run test``` Runs Playwright in headless mode
- ```npm run test-visible``` Runs Playwright using the Playwright UI

## Observations
### Further additions
There are a few things I would like to explore if I had more time. These would be:  

**Firefox Investigaiton**  
Currently while the test does run in both Chrome and Firefox it currenlty fails in Firefox due to a page crash. Given some more time and understnading of what is happeningin PLaywright I would have liked to resolve this problem.

**Completing the clean up of the test**  
Currently I have an afterEach hook in the test spec. This while working was providing some flakiness in the test. I removed it from the running code to allow for a succesful test and to fulfill requirements but would have liked to worked out the reason for the inconsistent outcome. This would help in the long run as the test wouldn't leave behind any *mess* making the test self contained.

**Creating a lower level test**  
This test is an example of something that is predominantly done through the UI form a Users perspective. However for the actual test case it could be done through the service(s)/API(s) that control the flow of information. This would result in a test that is easier to maintain as it isn't affected by any changes to the UI and a faster test as there would be no need to load any webpages. This itself would not rule out the use of the UI for a smoke test that checks the UI is working as intended but rather assists it with more of the heavy lifting of data permutations.

**Selectors**  
I would have liked to improve some of the selectors I used. A few of them are not great. This was mostly down to timing constraint and having working code over perfect code.

**Inconsistencies**  
While working on creating this project I noticed that in the DOM elements where incosistent with how they could be identified. Some are identified with ids or with enough uniqueness to identify them while others were encapsulated in several layers of elements with little to no uniqueness. Causing the use of several types of methods in order to find the element to work with, this potentially could cause flakiness to be introduced to the test with the use of brittle selectors.

**Playwright**  
After Learning Playwright while doing this project I have noticed that it does have a few quirks. One of which was the tendency to either not run or *hang* every so often. I will take the assumption that some of the config needed tweaking or adding to resolve this issue but not worth it to spend the time to fix in a project of this size within my time constraint.