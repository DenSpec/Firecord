# DiscordClone
<img src="assets/discordclone.PNG" width="10000">

# Framework
- [React for front-end](https://reactjs.org/)
- [Firebase for server](https://firebase.google.com/) (Firestore is a gold mine!)
- And other bookstores, the list will be too long. I quote only the main ones...

# Utils 
 - [Live Demo](https://livedemo)
 
 
 - [Youtube Video](https://youtube.com)


# General Structure

<img src="assets/general.PNG" width="10000">

```
src 
  └──server
     └── components 
        └── channel
                └── chat
                └── list
                └── show

        └── server
           └── assets

        └── test
        └── UI
           └── CSS
           └── Sidebar 
     └── assets
        └── img
        └── audio
        └── video
 
  └── utils
     └── assets
     └── audio
     └── route

  └── store 
     └── Channel
     └── Server

  └── auth 
     └── backend 

  └── page 
     └── components 
```

# Run Locally (basic instruction)

Install all packages

- ``npm install``

Launch app.

- ``npm start``

N.B : You cannot edit Firebase data because the file that contains it (.env) is deleted.
