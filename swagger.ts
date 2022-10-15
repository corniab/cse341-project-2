import swaggerJsDoc from "swagger-jsdoc";

const options = {
  definition: {
    info: {
      title: "My Api",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerDocs = swaggerJsDoc(options);

export default swaggerDocs;
