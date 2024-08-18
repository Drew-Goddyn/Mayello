body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

.spinner-container {
    display: flex;
    justify-content: space-around;
    width: 600px;
    margin-bottom: 20px;
}

.wheel-container {
    position: relative;
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
    text-align: center;
}

.wheel {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 5px solid #333;
    position: relative;
    overflow: hidden;
    transform: rotate(0deg);
    transition: transform 4s cubic-bezier(0.33, 1, 0.68, 1);
}

.segment {
    position: absolute;
    width: 50%;
    height: 50%;
    background-color: #ffcc00;
    border: 1px solid #333;
    transform-origin: 100% 100%;
    text-align: center;
    line-height: 100px;
    font-weight: bold;
}

.segment:nth-child(1) { transform: rotate(0deg); background-color: #ffcc00; }
.segment:nth-child(2) { transform: rotate(60deg); background-color: #ff9900; }
.segment:nth-child(3) { transform: rotate(120deg); background-color: #ff6666; }
.segment:nth-child(4) { transform: rotate(180deg); background-color: #66cc66; }
.segment:nth-child(5) { transform: rotate(240deg); background-color: #66cccc; }
.segment:nth-child(6) { transform: rotate(300deg); background-color: #9999cc; }

#spinButton {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

#result {
    margin-top: 20px;
    font-size: 20px;
    font-weight: bold;
}

#fireworksCanvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    display: none;
}
