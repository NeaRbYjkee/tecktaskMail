import Page from "./page";

class GooglePage extends Page{

    getTitle(){
        return browser.getTitle()
    }

    public open() {
        return super.open(`https://google.com`)
    }
}
export default new GooglePage();