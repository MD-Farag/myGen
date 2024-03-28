const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const scrapProduct = require('./scrape');

const app = express();
const port = process.env.PORT || 3000;
const SECRET_KEY = process.env.SECRET_KEY || 'XcTtE_eMaIl_TeMpLaTe_GeNeRaToR@SecReT_KeY$123';

// Dummy database of users
let users = [
    { username: 'jayarervin', password: '@X1-Email_Template_Wizard' },
    { username: 'anasnour', password: '#X1-Email_Template_Wizard' }
    // Add more users as needed
];

// Hash usernames and passwords
async function hashPasswords(users) {
    for (let user of users) {
        try {
            const passwordHash = await bcrypt.hash(user.password, 10);
            user.password = passwordHash;
            console.log('Updated user:', user);
        } catch (err) {
            console.error('Error generating hashed password:', err);
        }
    }
}
hashPasswords(users);

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set view engine
app.set('view engine', 'ejs');

// Middleware to authenticate token
function authenticateUser(req, res, next) {
    const token = req.query.token;
    if (!token) {
        // Redirect to login page if token is not provided
        if (req.path === '/login') {
            return next();
        } else {
            return res.render('login');
        }
    }

    // Verify JWT token
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        req.user = user;
        next();
    });
}

// Index page route (protected)
app.get('/', authenticateUser, (req, res) => {
    const apiOriginalUrl = `${req.protocol}://${req.get('host')}`;
    res.render('index', { apiOriginalUrl });
});

// Login page route
app.get('/login', (req, res) => {
    res.render('login');
});

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find user by username
    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(401).redirect('/login?error=InvalidUsernameOrPassword');
    }

    // Compare passwords
    bcrypt.compare(password, user.password, (err, result) => {
        if (err || !result) {
            return res.status(401).redirect('/login?error=InvalidUsernameOrPassword');
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });

        // Redirect to index page with token as query parameter
        res.redirect(`/?token=${token}`);
    });
});


// Endpoint to scrape products
app.post('/products', async (req, res) => {
    try {
        const data = await scrapProduct(req.body);
        console.log('Data before sending:', data);
        res.status(200).json(data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json(error);
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});











//============ WORKING CODE ================//
// const express = require('express');
// const scrapProduct = require('./scrape');
// const bodyParser = require('body-parser')
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 5000;
// const SECRET_KEY = 'XcTtE_eMaIl_TeMpLaTe_GeNeRaToR@SecReT_KeY$123'; // Change this to a long, random string


// // Dummy database of users
// let users = [
//     { username: 'jayarervin', password: '@X1-Email_Template_Wizard' }
//     // Add more users as needed
// ];

// // Hash usernames and passwords
// users.forEach(user => {
//     bcrypt.hash(user.username, 10, (err, usernameHash) => {
//         if (err) {
//             console.error('Error generating hashed username:', err);
//         } else {
//             bcrypt.hash(user.password, 10, (err, passwordHash) => {
//                 if (err) {
//                     console.error('Error generating hashed password:', err);
//                 } else {
//                     user.username = usernameHash;
//                     user.password = passwordHash;
//                     console.log('Updated user:', user);
//                 }
//             });
//         }
//     });
// });

// app.set('view engine', 'ejs')

// // using CORS 
// // app.use((req) => {
// //     cors({
// //         origin: req.originalUrl,
// //         methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
// //         credentials: true,
// //     })
// // });

// app.use(bodyParser.json());

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));

// // static files
// app.use(express.static('public'))

// // app listen to port
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

// app.use((req, res, next) => {
//     const protocol = req.get('X-Forwarded-Proto') || req.protocol;
//     const baseUrl = `${protocol}://${req.get('host')}`;
//     // req.baseUrl = baseUrl;
//     req.originalUrl = baseUrl;
//     console.log("Base URL:", baseUrl);
//     next();
// });

// // Index page route (protected)
// app.get('/', authenticateUser, (req, res) => {
//     const apiOriginalUrl = req.originalUrl;
//     res.render('index', { apiOriginalUrl });
// });

// // Login page route
// app.get('/login', (req, res) => {
//     res.render('login');
// });

// // Login endpoint
// app.post('/login', (req, res) => {
//     const { username, password } = req.body;

//     // Find user by username
//     const user = users.find(u => bcrypt.compareSync(username, u.username));
//     if (!user) {
//         return res.status(401).redirect('/login?error=InvalidUsernameOrPassword');
//     }

//     // Compare passwords
//     if (!bcrypt.compareSync(password, user.password)) {
//         return res.status(401).redirect('/login?error=InvalidUsernameOrPassword');
//     }

//     // Generate JWT token
//     const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });

//     // Redirect to index page with token as query parameter
//     res.redirect(`/?token=${token}`);
// });

// app.post('/products', async (req, res) => {
//     console.log("here is a request body from post request :", req.body)
//     try {
//         const data = await scrapProduct(req.body);
//         console.log('data before send is: ', data)
//         console.log("type of data iS: ", typeof data)
//         res.status(200).json(data);
//     }
//     catch (error) {
//         console.error('Error:', error);
//         res.status(500).json(error);
//     }
// });

// // Middleware to authenticate token
// function authenticateUser(req, res, next) {
//     const token = req.query.token;
//     if (!token) {
//         // Check if the request is for the login page
//         if (req.path === '/login') {
//             // Proceed to next middleware (or route handler) if accessing the login page without a token
//             return next();
//         } else {
//             // For other routes, redirect to the login page
//             return res.render('login');
//         }
//     }

//     jwt.verify(token, SECRET_KEY, (err, user) => {
//         if (err) {
//             return res.status(403).json({ message: 'Forbidden' });
//         }
//         req.user = user;
//         next();
//     });
// }

