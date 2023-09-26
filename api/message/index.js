module.exports = async function (context, req) {
    context.res.json({
        //text: "Hello from the API"
        text : new Date().toISOString()
  });

    



};