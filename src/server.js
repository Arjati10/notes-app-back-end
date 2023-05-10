// Server.js berfungsi memuat kode untuk membuat,
// mengkonfigurasi dan menjalankan server HTTP menggunakan Hapi

// console.log("Hallo kita akan membuat RESTful APIs");

const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
