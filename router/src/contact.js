import React from "react";

export default function Contact(){
return(
    <form method="post" action="page.php">
        <fieldset id="section1" >
            <legend>Personal Informations</legend>
            <div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name"/><br></br>

            <label for="birth">Date of birth</label>
            <input type="date" id="birth" name="birth"/><br></br>
            </div>

            <span className="sex">Your sexe</span><br></br>
            <input type="radio" id="homme" name="sex"/>
            <label for="homme">Male</label><br></br>
            <input type="radio" id="femme" name="sex"/>
            <label for="femme">Female</label><br></br>

        </fieldset>

        <fieldset id="section2" >
            <legend>Other Info</legend>
            <div>
                <span>Hobbies</span><br></br>
                <input type="checkbox" id="sports" name="hobbies" value="sports"/>
                <label for="sports">Programming</label><br></br>

                <input type="checkbox" id="reading" name="hobbies" value="reading"/>
                <label for="reading">sports</label><br></br>

                <input type="checkbox" id="traveling" name="hobbies" value="traveling"/>
                <label for="traveling">Traveling</label><br></br>

                <input type="checkbox" id="drawing" name="hobbies" value="drawing"/>
                <label for="drawing">Drawing</label><br></br>
                </div>
            <label for="supptext">Express yourself</label>
            <input id="supptext" name="supptext"/>
            <input type="submit"/>

        </fieldset>
    </form>
)
}