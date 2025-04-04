const express = require("express");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const cookieParser = require('cookie-parser');
const app = express();
const DB = require('./database.js');
const { peerProxy } = require('./peerProxy.js');

class Recipe {
    constructor(title, url, submitter, likes) {
        this.id = uuid.v4();
        this.title = title;
        this.url = url;
        this.submitter = submitter;
        this.likes = likes;
    }
}

const authCookieName = "cookieToken";

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(cookieParser());

app.use(express.static('public'));

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

const checkAuth = async(req, res, next) => {
  try {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        next();
    } else {
        res.status(401).send({ msg: 'Unauthorized' });
    }
  } catch (error) {
    res.status(500).send({msg: error});
  }
};

apiRouter.post("/like", checkAuth, async (req, res) => {
    try {
      await addLike(req.body.id);
      res.send({msg: 'like received' });
    } catch (error) {
        res.send( {msg: error} );
    }
})

apiRouter.post("/submit", checkAuth, async (req, res) => {
    try {
    AddRecipe(req.body.title, req.body.url, req.body.submitter);
    res.send({ msg: "worked" });
    } catch (error) {
        res.send({ msg: "didn't work" });
    }
});

function AddRecipe(title, url, submitter) {
        const likes = 0;
        console.log(likes);
        let newRecipe = new Recipe(title, url, submitter, likes)
        console.log(newRecipe);
        // recipes = [...recipes, newRecipe];
        DB.addRecipe(newRecipe);
    }

apiRouter.get("/recipes", checkAuth, async (req, res) => {
    try {
      const curRecipes = await DB.getRecipes();
        res.send(JSON.stringify(curRecipes));
    } catch (error) {
        res.send({ msg: "couldn't send 🤷"});
    }
})

apiRouter.post("/register", async (req, res) => {
  try {
  if (req.body.email === "" || req.body.password === "") {
    res.status(409).send({ msg: "username or password blank" });
  }
  else if (await findUser("email", req.body.email)) {
    res.status(409).send({ msg: "User already exists" });
  } else {
    let user;
    try {
      console.log("trying..");
      user = await createUser(req.body.email, req.body.password);
    } catch (error) {
      res.send("big issue: ", error);
    }
    setAuthCookie(res, user.token);
    res.send({ email: user.email });
  }
} catch (error) {
  res.send({msg: error});
}
});

apiRouter.post("/login", async (req, res) => {
    try {
  if (req.body.email === "" || req.body.password === "") {
    res.status(409).send({ msg: "username or password blank" });
  }
    const user = await findUser('email', req.body.email);
    if (user) {
        if (await bcrypt.compare(req.body.password, user.password)) { // todo: is this the hashed pw?
            user.token = uuid.v4();
            DB.updateUser(user);
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
  try {
  fetch("https://quote.cs260.click")
    .then((response) => response.json())
    .then((data) => {
      res.send(data);
    });
  } catch (error) {
    res.status(500).send({ msg: error });
  }
});

apiRouter.delete('/logout', async (req, res) => {
  try {
    const user = await findUser('token', req.cookies[authCookieName]);
    if (user) {
        delete user.token;
      DB.updateUser(user)
    }
    res.clearCookie(authCookieName);
    res.status(204).end();
  } catch (error) {
    res.status(500).send({msg: error});
  }
});

app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
});

app.get("*", (req, res) => {
  res.status(404).end(); //send("<h1>this is anything else</h1>");
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
  //users.push(user);
  await DB.addUser(user);

  return user;
}

async function findUser(field, value) {
  if (!value) return null;

  //return users.find((u) => u[field] === value);
  if (field === "token") {
    return DB.getUserByToken(value);
  } else if (field === "email") {
    return DB.getUser(value);
  } else {
    console.error("big error in index.js in find user?");
  }
}

async function addLike(id) {
  return DB.likeRecipe(id);
}

function setAuthCookie(res, authToken) {
    res.cookie(authCookieName, authToken, {
        secure: true,
        httpOnly: true,
        samSite: 'strict',
    });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);