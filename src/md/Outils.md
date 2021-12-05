# Fonctionnalité début 
```
import { React, useState } from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import database from "../auth/backend/database";
import '../server/components/home.css'
```
----
# Button avec Link
- Padding : "Largeur px Longueur px" (d'abord la longueur, puis la largeur)
- BackgroundColor : La couleur
- FontFamily : La police d'écriture principale 
- Pour rédiriger vers un lien, il faut utilisé le link !
- Changé la couleur, change le color:
```
<Link className="text-none" to="/ton-lien">
      <Button variant="contained" style={{color: 'white', padding: "7px 80px", backgroundColor: '#F6AE99', fontFamily: 'Poppins'}}> Texte </Button>
</Link>
```
----
# Géré Routes

- Mettre tout les routes dans l'app
- Quand je veux mettre un private route (l'utilisateur doit être login pour y accédé), je met juste un PrivateRoute 
à l'app.
- Je peux mettre n'importe quoi aux path="ex/example", ce qui compte c'est le component. 
----
# StarterPack fichier 

```
// Fonctionnalité 
import { React, useState } from "react";
import { Route, Redirect, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import database from "../auth/backend/database";
import '../server/components/home.css'

// L'affichage 
// Post-Scriptum : Si il le faut, à la place du const on met une fonction.
const Exemple = () => { 

  return (
    <>
      <h1>Hi</h1>
  </>
     );
};

export default Exemple;
```

# Je rajoute une image 
----
```
// J'importe le logo
import ex from 'assets/ex.png'
<img src={ex} alt="ex" />;

// Mon css file ressemble à ça
.ex {
  background-image: url(./logo.png);
}
```
# Texte en haut à droite
----
```
     <p style={{  margin: '0', padding: '0', textAlign: 'left'}}>cool.chat</p>
```
----
# Outils pas très mal 

- Espacement en saut de ligne

```
<br></br>
```

- Espacement dans la ligne

```
{' '}
```
----
# Font Awesome
- Début de page 
```
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLenom } from '@fortawesome/free-solid-svg-icons/faLeom';
```

### Bouton

- Tu utilise le `` startIcon={<FontAwesomeIcon icon={faTontruc} />} ``
```
<Button startIcon={<FontAwesomeIcon icon={faTontruc} />} variant="contained" style={{color: 'white', padding: "6px 60px", backgroundColor: '#A2CDCD', fontFamily: 'Poppins'}}> Home </Button>
```

# Site 

- https://mui.com/getting-started/usage/

- https://colorhunt.co/palettes/pastel


https://stackoverflow.com/questions/36113367/how-to-make-image-buttons-in-jsx


Utilise 

/* */