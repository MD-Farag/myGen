const express = require('express');
const scrapProduct = require('./scrape');
const bodyParser = require('body-parser')

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

// static files
// app.use(express.static('public'))

// app listen to port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// receive post body data from index.html in the public folder
// app.use(express.json({ extended: true, limit: '1mb' }));


app.get('/', async(req, res) => {
    // console.log('Base URL:', req.originalUrl);
    // console.log('Base URL:', req.baseUrl);
    // // const apiBaseUrl = req.originalUrl;
    // res.send("hello hello get request")

    // res.json({ message: 'Hello, World!' });

    const data = await scrapProduct(req.body);
        console.log('data before send is: ', data)
        console.log("type of data iS: ", typeof data)
        res.status(200).json(data);

});

app.post('/products', async (req, res) => {
    console.log("here is a request body from post request :", req.body)
    try {
        const data = await scrapProduct(req.body);
        console.log('data before send is: ', data)
        console.log("type of data iS: ", typeof data)
        res.status(200).json(data);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).send(error);
        // res.status(500).json([
        //     {
        //         pdName: "wrong Apple MacBook Air M1, RAM 8GB, 256GB SSD 13.3-inch, (2020) - MGN63AB/A - Space Grey",
        //         pdImg: "https://cdn.media.amplience.net/i/xcite/633255-01?img404=default&w=2048&qlt=75&fmt=auto",
        //         pdBfrPrice: "379.900 KD",
        //         pdAftPrice: "239.900 KD",
        //         pdSvAmnt: "37%",
        //         pdBestSeller: "Best Seller"
        //     },
        //     {
        //         pdName: "wrong Lenovo ThinkPad T14S, Intel Core i7, 16GB RAM, 512GB SSD, Intel Iris Xe Graphics, 14-inch, Windows 11 Pro, 21F6005WGR – Black",
        //         pdImg: "https://cdn.media.amplience.net/i/xcite/655306-01?img404=default&w=2048&qlt=75&fmt=auto",
        //         pdBfrPrice: "619.900 KD",
        //         pdAftPrice: "499.900 KD",
        //         pdSvAmnt: "19%",
        //         pdBestSeller: ""
        //     },
        //     {
        //         pdName: "wrong لابتوب سويفت ايدج 16 من أيسر، معالج ريزن 7 6800يو، مقاس 16-بوصة، رام 16جيجابايت، ذاكرة 512جيجابايت أس أس دي، ويندوز 11 هوم، SFA16-41-R13B - أزرق",
        //         pdImg: "https://cdn.media.amplience.net/i/xcite/540515-01?img404=default&w=2048&qlt=75&fmt=auto",
        //         pdBfrPrice: "359.900 د.ك.",
        //         pdAftPrice: "209.900 د.ك.",
        //         pdSvAmnt: "42%",
        //         pdBestSeller: ""
        //     },
        //     {
        //         pdName: "Apple MacBook Air M1, RAM 8GB, 256GB SSD 13.3-inch, (2020) - MGN63AB/A - Space Grey",
        //         pdImg: "https://cdn.media.amplience.net/i/xcite/633255-01?img404=default&w=2048&qlt=75&fmt=auto",
        //         pdBfrPrice: "379.900 KD",
        //         pdAftPrice: "239.900 KD",
        //         pdSvAmnt: "37%",
        //         pdBestSeller: "Best Seller"
        //     },
        //     {
        //         pdName: "wrong Apple MacBook Air M1, RAM 8GB, 256GB SSD 13.3-inch, (2020) - MGN63AB/A - Space Grey",
        //         pdImg: "https://cdn.media.amplience.net/i/xcite/633255-01?img404=default&w=2048&qlt=75&fmt=auto",
        //         pdBfrPrice: "379.900 KD",
        //         pdAftPrice: "239.900 KD",
        //         pdSvAmnt: "37%",
        //         pdBestSeller: "Best Seller"
        //     },
        //     {
        //         pdName: "wrong Acer Swift Edge 16 Laptop, Ryzen 7 6800U Processor, 16-inch, 16GB RAM, 512GB SSD, Windows 11 Home, SFA16-41-R13B – Blue",
        //         pdImg: "https://cdn.media.amplience.net/i/xcite/540515-01?img404=default&w=2048&qlt=75&fmt=auto",
        //         pdBfrPrice: "359.900 KD",
        //         pdAftPrice: "209.900 KD",
        //         pdSvAmnt: "42%",
        //         pdBestSeller: ""
        //     }
        // ]);
    }
});

