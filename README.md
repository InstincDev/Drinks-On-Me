# Drinks On Me

Application that allows users to input a type of alcohol and view a carousel of cocktails containing that alcohol.

Each Cocktail includes
* an image of the drink
* a list of ingredients
* mixing instructions

## Tech Stack


![HTML5 BADGE](https://img.shields.io/static/v1?label=|&message=HTML5&color=03989E&style=plastic&logo=html5)  ![CSS BADGE](https://img.shields.io/static/v1?label=|&message=CSS3&color=03989e&style=plastic&logo=css3)  ![JAVASCRIPT BADGE](https://img.shields.io/static/v1?label=|&message=JAVASCRIPT&color=03989e&style=plastic&logo=javascript)



## API Reference

https://www.thecocktaildb.com

#### Get item

```http
  GET https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `drink`      | `string` | **Required**. Type of alcohol to fetch |


## Optimizations
* Utilize OOP to make code less 'WET'
* Refactor CSS so that the next and previous buttons do not shift 
* Automate carousel

## Lessons Learned ##

Always check for edge cases.  
