<!DOCTYPE html>

<html>
    <head>
        <title>Wordle Remake</title>
        <link rel="stylesheet" href="./styles/game.css">
        <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
        <script src="./javascript/board.js"></script>
        <script src="./javascript/driver.js"></script>
    </head>
    <body>
        <div id="header">
            <p id="title">Wordle</p>
        </div>
        <div class="reveal hide"></div>
        <div class="messages"></div>
        <br>
        <div id="game"></div>
        <br>
        <div id="keyboard">
            <div class="keyRow" id="r1">
                <div class="key" id="Q"><p>Q</p></div>
                <div class="key" id="W"><p>W</p></div>
                <div class="key" id="E"><p>E</p></div>
                <div class="key" id="R"><p>R</p></div>
                <div class="key" id="T"><p>T</p></div>
                <div class="key" id="Y"><p>Y</p></div>
                <div class="key" id="U"><p>U</p></div>
                <div class="key" id="I"><p>I</p></div>
                <div class="key" id="O"><p>O</p></div>
                <div class="key" id="P"><p>P</p></div>
            </div>
            <div class="keyRow" id="r2">
                <div class="key" id="A"><p>A</p></div>
                <div class="key" id="S"><p>S</p></div>
                <div class="key" id="D"><p>D</p></div>
                <div class="key" id="F"><p>F</p></div>
                <div class="key" id="G"><p>G</p></div>
                <div class="key" id="H"><p>H</p></div>
                <div class="key" id="J"><p>J</p></div>
                <div class="key" id="K"><p>K</p></div>
                <div class="key" id="L"><p>L</p></div>
            </div>
            <div class="keyRow" id="r3">
                <div class="key" id="Z"><p>Z</p></div>
                <div class="key" id="X"><p>X</p></div>
                <div class="key" id="C"><p>C</p></div>
                <div class="key" id="V"><p>V</p></div>
                <div class="key" id="B"><p>B</p></div>
                <div class="key" id="N"><p>N</p></div>
                <div class="key" id="M"><p>M</p></div>
            </div>
        </div>
    </body>
</html>