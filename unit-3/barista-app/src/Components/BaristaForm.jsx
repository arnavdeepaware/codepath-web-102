import React from "react";
import { useState } from "react";
import RecipeChoices from "./RecipeChoices";
// Fix the import path
import drinksData from "../drinks.json";

const BaristaForm = () => {
    const getNewDrink = () => {
        // Use drinksData instead of drinks
        let randomIndex = Math.floor(Math.random() * drinksData.drinks.length);
        let currentDrink = drinksData.drinks[randomIndex];
        setDrink({
            name: currentDrink.name,
            ingredients: currentDrink.ingredients
        });
        // Set the true recipe from ingredients
        setTrueRecipe(currentDrink.ingredients);
    };

    const onNewDrink = () => {
        setInputs({
            temperature: "",
            milk: "",
            syrup: "",
            blended: "",
        });

        setCorrectTemp('');
        setCorrectMilk(''); 
        setCorrectSyrup('');    
        setCorrectBlended('');

        getNewDrink();
    };

    const onCheckAnswer = () => {
        if (trueRecipe.temp != inputs['temperature']) {
            setCheckedTemperature('wrong');
        }
        else {
            setCheckedTemperature("correct");
        }

        if (trueRecipe.milk != inputs['milk']) {
            setCheckedMilk('wrong');
        }
        else {
            setCheckedMilk("correct");
        }

        if (trueRecipe.syrup != inputs['syrup']) {
            setCheckedSyrup('wrong');
        }
        else {
            setCheckedSyrup("correct");
        }

        if (trueRecipe.blended != inputs['blended']) {
            setCheckedBlended('wrong');
        }
        else {
            setCorrectBlended("correct");
        }
    };

    const [inputs, setInputs] = useState({
        temperature: "",
        milk: "",
        syrup: "",
        blended: ""
    });

    const ingredients = {
        'temperature': ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }

    const [drink, setDrink] = useState('');
    const [trueRecipe, setTrueRecipe] = useState('');

    const[correct_temp, setCorrectTemp] = useState('');
    const[correct_milk, setCorrectMilk] = useState('');
    const[correct_syrup, setCorrectSyrup] = useState('');   
    const[correct_blended, setCorrectBlended] = useState('');

    return (
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <div>
                <h2 className="mini-header">{drink.name}</h2>
                <button type="new-drink-button" className="button newdrink" onClick={onNewDrink}>🔄</button>
            </div>
            <form>
                <h3>Temperature</h3>
                <div className="answer-space" id={correct_temp}>
                    {inputs["temperature"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="temperature"
                    choices={ingredients["temperature"]}
                    checked={inputs["temperature"]}
                />

                <h3>Milk</h3>
                <div className="answer-space" id={correct_temp}>
                    {inputs["milk"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="milk"
                    choices={ingredients["milk"]}
                    checked={inputs["milk"]}
                />

                <h3>Syrup</h3>
                <div className="answer-space" id={correct_temp}>
                    {inputs["syrup"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="syrup"
                    choices={ingredients["syrup"]}
                    checked={inputs["syrup"]}
                />

                <h3>Blended</h3>
                <div className="answer-space" id={correct_temp}>
                    {inputs["blended"]}
                </div>
                <RecipeChoices
                    handleChange={(e) => setInputs((prevState) => ({
                        ...prevState,
                        [e.target.name]: e.target.value,
                    }))}
                    label="blended"
                    choices={ingredients["blended"]}
                    checked={inputs["blended"]}
                />
            </form>



            <button type="submit" className="button submit" onClick={onCheckAnswer}>Check Answer</button>
            <button type="new-drink-button" className="button submit" onClick={onNewDrink}>New Drink</button>
        </div>
    );
};

export default BaristaForm;