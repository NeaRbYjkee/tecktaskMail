import {Given, When, Then} from '@wdio/cucumber-framework';

import {NodeMail} from "../../src/NodeMail";
import SecurePage from '../pageobjects/secure.page';
import LoginPage from "../pageobjects/login.page";
import MailboxPage from "../pageobjects/mailbox.page";
import GooglePage from "../pageobjects/google.page";

const pages = {
    login: LoginPage,
    mailbox: MailboxPage,
    google: GooglePage
}

Given(/^User goes to (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await pages.login.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

Given(/^A mail was sent$/, () => {
    NodeMail.send()
})

When('User opens the mail', async () => {
    await $("//span[contains(.,'" + `${NodeMail.mail.subject}` + "')and@class='title ng-binding']").click()
})

When(/^Mail contains the link$/, async () => {
    const iframeClass = 'preview-iframe.panel-html'
    await browser.switchToFrame(await $(`iframe.${iframeClass}`))
    const selector = await $('.verifyLink')
    await expect(selector).toHaveLink(NodeMail.mail.link)
    await expect(selector).toHaveText(NodeMail.mail.text)
    await selector.click()
    await browser.switchToParentFrame()
})

Then(/^User is on (\w+) page with title (.+)$/, async (page: string, title: string) => {
        const windows = await browser.getWindowHandles()
        await browser.switchToWindow(windows[1])
        await browser.pause(1000)
        await expect(await pages[page].getTitle()).toEqual(title)
    }
)