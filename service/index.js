const express = require("express");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const app = express();

let users = [];
let recipes = [];

const authCookieName = "cookieToken";

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

// TODO: add cookie parser here.

app.use(express.static("public"));

var apiRouter = express.Router();
app.use("/api", apiRouter);

apiRouter.post("/register", async (req, res) => {
  if (await findUser("email", req.body.email)) {
    res.status(409).send({ msg: "User already exists" });
  } else {
    let user;
    // TODO: first check if user already existsuserName
    try {
      console.log("trying..");
      user = await createUser(req.body.email, req.body.password);
    } catch (error) {
      res.send("big issue: ", error);
    }
    setAuthCookie(res, user.token);
    res.send({ email: user.email });
  }
});

apiRouter.post("/login", async (req, res) => {
    try {
    const user = await findUser('email', req.body.email);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) { // todo: is this the hashed pw?
            user.token = uuid.v4();
            setAuthCookie(res, user.token);
            res.send({email: user.email });
            return;
        }
    }
        res.status(401).send({ msg: "unauthorized" });
  } catch (error) {
    res.send("big issue: ", error);
  }
});

apiRouter.get("/quote", (req, res) => {
  fetch("https://quote.cs260.click")
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
});

apiRouter.delete('/logout', async (req, res) => {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
})

app.get("*", (req, res) => {
  res.send("<h1>this is anything else</h1>");
});

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

async function createUser(email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: hashedPassword,
    token: uuid.v4(),
  };
  users.push(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  return users.find((u) => u[field] === value);
}

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        samSite: 'strict',
    });
}

// app.use((_req, res) => {
//     res.sendFile('index.html', { root: 'public' });
// })

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
