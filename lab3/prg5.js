import http from "http"

const server = http.createServer((req , res) => {

    if(req.url=="/"){
        res.end("<h1>Home Page</h1>");
    }else if(req.url=="/product"){
        res.write(`
            <h1>Iphone XL</h1>
            <h2>Price: 90000</h2>
            <h3>DiscountL30%</h3>`);
    res.end();
    }
    else if (req.url =="/contact"){
        res.end("<h1>Contact US</h1>");
    } else{
        res.statusCode=404 ; 
        res.end(`
            <h1>Page Not found</h1>
            <a href="/">Home</a>`);
    }

});


server.listen(3000 , () =>Console.log("server run in "))