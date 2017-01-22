class MainController {
    constructor(Game) {
        this.isLoaded = false;
        Game.loader(this.showLoader);

    }


    showLoader (p) {
        console.log(p);
    }
}

MainController.$inject = ["Game"];
export default MainController;
