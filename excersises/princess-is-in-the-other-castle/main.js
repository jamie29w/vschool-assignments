class Player {
    constructor(name, totalCoins, status, star) {
        this.name = name;
        this.totalCoins = totalCoins || 0;
        this.status = status;
        this.star = star || false;
        this.gameActive = true;
    }

    setName(namePicked) {
        this.name = Luigi;
    };
    gotHit() {
        if (this.status === "Powered Up") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Small";
        } else if (this.status === "Small") {
            this.status = "Dead";
            this.gameActive = false;
        };

    };
    gotPowerup() {
        if (this.status === "Dead") {
            this.status = "Small";
        } else if (this.status === "Small") {
            this.status = "Big";
        } else if (this.status === "Big") {
            this.status = "Powered Up";
        };
    };
    addCoin() {
        this.totalCoins++;
    };
    print() {
        console.log(`Name: ${this.name}, Total Coins: ${this.totalCoins}, Status: ${this.status}, Star Status: ${this.star}`)
    };
};

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const actionTime = (player) => {
    let action = getRandomInt(0, 2);
    if (action === 0) {
        player.gotHit();
    } else if (action === 1) {
        player.gotPowerup();
    } else if (action === 2) {
        player.addCoin();
    };
};

const tyler = new Player("Luigi", 5, "Small", true);
tyler.print();

actionTime(tyler);
tyler.print();
actionTime(tyler)
tyler.print();
actionTime(tyler);
tyler.print();
