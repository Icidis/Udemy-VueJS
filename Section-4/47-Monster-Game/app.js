new Vue({
    el: "#app",
    data: {
        gameOver: true,
        playerHealth: 100,
        monsterHealth: 100,
        attackLog: [],
    },
    watch: {
        playerHealth: function (value) {
            if (value <= 0) {
                this.gameOver = true;
                if (confirm('Monster won!, Would you like to start a new game you sure?')) {
                    this.restartGame();
                }
            }
        },
        monsterHealth: function (value) {
            if (value <= 0) {
                this.gameOver = true;
                if (confirm('You won!, Would you like to start a new game you sure?')) {
                    this.restartGame();
                }
            }
        }
    },
    methods: {
        startNewGame: function () {
            this.restartGame();
        },
        restartGame: function () {
            this.gameOver = false;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.attackLog = []
        },
        attack: function () {
            this.playerAttack(false);
            this.monsterAttack();
        },
        specialAttack: function () {
            this.playerAttack(true);
            this.monsterAttack();
        },
        heal: function () {
            var healAmount = this.getRandomValue();
            if (this.playerHealth + healAmount >= 100) {
                this.playerHealth = 100
            } else {
                this.playerHealth = this.playerHealth + healAmount;
            }
            if (this.monsterHealth >= 0) {
                this.monsterAttack();
            }
        },
        giveUp: function () {
            this.playerHealth = 0;
        },
        getRandomValue: function (minimum = 1, maximum = 9) {
            minimum = Math.ceil(minimum);
            maximum = Math.floor(maximum);
            return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
        },
        playerAttack: function (isSpecialAttack = false) {
            var playerDamage;
            if (isSpecialAttack) {
                playerDamage = this.getRandomValue(5, 15);
            } else {
                playerDamage = this.getRandomValue();
            }
            this.logEvent(true, playerDamage);
            this.monsterHealth = this.monsterHealth - playerDamage;
        },
        monsterAttack: function () {
            var monsterDamage = this.getRandomValue();
            this.logEvent(false, monsterDamage);
            this.playerHealth = this.playerHealth - monsterDamage;
        },
        logEvent: function (isPlayerAttack, attackDamage) {
            var event = {
                attacker: isPlayerAttack ? 'Player' : 'Monster',
                damage: attackDamage,
                defender: isPlayerAttack ? 'Monster' : 'Player',
            }
            this.attackLog.unshift(event);
        }
    }
})