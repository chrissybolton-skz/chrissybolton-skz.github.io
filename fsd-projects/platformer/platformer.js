$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
        createPlatform(175, 625, 200, 20);
        createPlatform(14, 555, 100, 20);
        createPlatform(360, 525, 200, 20);
        createPlatform(600, 625, 200, 20);
        createPlatform(800, 1000, 200, 20);
        createPlatform(500, 135, 200, 20);
        createPlatform(800, 203, 200, 20);
        createPlatform(175, 303, 200, 20);
        createPlatform(495, 400, 200, 20);
        createPlatform(560, 300, 200, 20);
        createPlatform(900, 500, 200, 20);
        createPlatform(1000, 600, 200, 20);
        createPlatform(1001, 600, 200, 20);
        createPlatform(500, 0, 20, 290);
        createPlatform(1000, 400, 200, 20);
        createPlatform(800, 325, 200, 20);

    // TODO 3 - Create Collectables
        createCollectable("diamond" , 300, 160, 0.6, 0.7);
        createCollectable("steve" , 400, 170, 0.5, 0.8);
        createCollectable("database", 600, 180, 0.5, 0.6);
        createCollectable("kennedi", 900, 160, 0.6, 0.7);
        createCollectable("grace", 1000, 190, 0.9, 0.7);
        createCollectable("max", 1180, 480, 0.8, 0.8);


    
    // TODO 4 - Create Cannons
        createCannon("top", 700, 800);
        createCannon("right", 700, 700);
        createCannon("bottom", 900, 900);
        
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
