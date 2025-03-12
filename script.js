function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

function showRecipe(recipe) {
    const recipes = {
        pasta: "Boil pasta, add sauce, and mix well. Serve hot.",
        burger: "Grill a patty, place in a bun with veggies and sauce.",
        cake: "Mix flour, sugar, eggs, and cocoa powder. Bake for 30 minutes."
    };
    
    document.getElementById("recipeTitle").innerText = recipe.charAt(0).toUpperCase() + recipe.slice(1);
    document.getElementById("recipeDetails").innerText = recipes[recipe];
    document.getElementById("recipeModal").style.display = "block";
}

function closeRecipe() {
    document.getElementById("recipeModal").style.display = "none";
}
