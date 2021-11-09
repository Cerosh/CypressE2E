FROM cypress/included:8.7.0
RUN npm install cypress-cucumber-preprocessor
RUN mkdir /cypress-docker
ENV DBUS_SESSION_BUS_ADDRESS=/dev/null
WORKDIR /cypress-docker
COPY ./package.json .
COPY ./package-lock.json .
COPY ./cypress.json .
COPY ./report.js .
COPY ./cypress ./cypress
RUN npm install
ENTRYPOINT ["npm", "run"]