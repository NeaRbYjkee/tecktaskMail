import Page from "./page";

class MailboxPage extends Page {
    public get mail () {
        return $("email-item-link")
    }

    public get mailBody () {
        return $("plain-text")
    }

    public open() {
        return super.open(`http://localhost:1080`)
    }
}
export default new MailboxPage();
