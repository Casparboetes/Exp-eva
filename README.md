# Student Evaluations Tool

My Final Codaisseur project:

- A tool for teachers to rate students based upon their daily performance.
- The teacher can select a random student to ask a question, check 'The Important Part'.
- Frameworks used are React.js, React-Redux with a RESTful Express API on top of MongoDB combined with Mongoose.

### Images

> Login.

![eva1](https://user-images.githubusercontent.com/34174855/38543346-a95c4508-3ca4-11e8-94d3-211b6f41781a.png)

> Select/Add Batch/Class.

![eva2](https://user-images.githubusercontent.com/34174855/38543348-a9acde82-3ca4-11e8-90eb-a1282b4cd35a.png)

> Select/Add Student &  Choose student at Random based on evaluation mark.

![eva3](https://user-images.githubusercontent.com/34174855/38543349-a9c7ac94-3ca4-11e8-9c41-d410a32ec4ae.png)

> Student Detail Page

![eva4](https://user-images.githubusercontent.com/34174855/38543350-a9e2b5d4-3ca4-11e8-8a0e-37fb9c28e6c4.png)


## The Important Part ;)
```
As a Teacher, from the class view I can click a button “ASK A QUESTION”.
It shows me the name and picture of a random student to ask a question.
Not entirely random though:
RED students get ~49% of the questions
YELLOW students ~33% and
GREEN students ~18%.
```

- Written test for the algorithm: see ../exp-eva/lib/tekstRandomizerTest.js
- Run it a 1.000.000 to check the proper percentages, or even more i you like :)


## Running Locally
```
FrontEnd
git clone https://github.com/Casparboetes/Rct-eva
cd Rct-eva
yarn install
yarn start
```

```
BackEnd
git clone https://github.com/Casparboetes/Exp-eva
cd Exp-eva
yarn install
sudo service mongod start (or whatever way you fire it up)
yarn run dev
yarn run seed (to seed batches and students)
```


## Related documentation
For more information about using React-Redux, ExpressJS and Mongoose, see these links:

* [React](https://facebook.github.io/react-native/)
* [Redux](https://redux.js.org/)
* [ExpressJS](https://expressjs.com/)
* [Mongoose](http://mongoosejs.com/)


## Authentication

Create a User with the following attributes:

| Attribute | Type   | Description   |
|-----------|--------|---------------|
| name      | string | Full name     |
| email     | string | Email address |
| password  | string | Password      |

Use the following endpoints to deal with initial authentication and the user.

| HTTP Verb | Path        | Description |
|-----------|-------------|--------------|
| `POST`    | `/users`    | Create a user account |
| `POST`    | `/sessions` | Log in with email and password, and retrieve a JWT token |
| `GET`     | `/users/me` | Retrieve own user data |

To authorize further requests, use Bearer authentication with the provided JWT token:

```
Authorization: Bearer <token here>
```

_**Note**: See `db/seed.js` for an example._
