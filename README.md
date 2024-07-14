
# Microservice E-Commerce with Kafka and Elastic Search

This project demonstrates the creation and integration of microservices using Node.js, Kafka, and Elastic Search in an E-Commerce application.

## Installation and Running the Project

Running the Microservice E-Commerce on your local machine is a simple task.

### Global Dependencies

You need to have two main dependencies installed:

-   Node.js LTS v18  (or any higher version)

-   Docker Engine v17.12.0 with Docker Compose v1.24.1  (or any higher version)

Using nvm? You can run  nvm install in the project folder to install and use the most appropriate Node.js version.

### Local Dependencies

After cloning the repository, don't forget to install the project's local dependencies:

```
npm  install
```

### Start Database and its Image

To run the database image, simply execute the following command:
```
docker  compose  up
```

Finally, to set up the tables and associate them with this image, you need to run another command:
```
npx  prisma  db  push
```
### Running the Project

To run the project locally, execute the following command:
```
npm  run  dev
```
This will automatically start services like the database  (including migrations) and make the server accessible at the following address:

http://localhost:3001/api/

## Notes

-   To shut down all services, simply use the CTRL+C keys, which is the standard way in terminals to kill processes.

-   You can check the addresses of other services within the  .env file located at the root of the project, such as the address and credentials of the local database.

## Conclusion

That's it! Now you can enjoy and use the project!
