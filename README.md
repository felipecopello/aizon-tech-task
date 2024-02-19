# aizon-tech-task
STEPS to execute the tests:
1) Clone repository 
2) npm init -y 
3) npm install cypress 
4) npx cypress open and select the specs to run

Other option is running them from console using command: 
npx cypress run --spec "cypress/e2e/**/*.feature"


1) the tests are signUp.feature, cart.feature and placeOrder.feature
2) Explain the process and principles you’ve chosen since the very beginning:
   The automated tests were built with a focus on clarity, validation, and efficiency. Each scenario followed the Given-When-Then structure for clear representation of user actions and outcomes. Test steps were designed for readability and easy maintenance, while covering positive cases for comprehensive validation.
3) What kind of things do you have to take into account more carefully in every test (BE and FE possible issues, validations, possible external services needed):
   In every test, whether focusing on the backend (BE) or frontend (FE), meticulous attention must be paid to various critical factors. For backend tests, ensuring data integrity, thorough validation of inputs and outputs, and robust error handling. Additionally, the management of database states and seamless integration with external services, while minimizing dependencies for test reliability, are important aspects. On the frontend side, tests should prioritize user experience, verifying proper rendering, interactivity, and responsiveness across different browsers and devices. Input validation, error messaging, and navigation flows are key areas to validate.
4) In which stage of the SDLC do you think these tests could help more?:
   They are particularly important during the testing and validation stages. In the testing phase, these automated tests help in verifying the functionality and behavior of the software, ensuring that it meets the specified requirements. They aid in identifying bugs, regressions, and edge cases, allowing for timely debugging and resolution.
5) Do you have experience with component testing in isolation? How would you apply component testing in SDLC?:
   I do not have experience in Component testing but it is my understanting that it involves testing individual components or units of code in isolation, typically at a lower level than integration or end-to-end testing. In the SDLC, component testing is typically performed during the development phase, after unit testing and before integration testing.
