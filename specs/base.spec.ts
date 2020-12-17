describe('webdriver.io page', () => {
    it('should have the right title', async () => {
        await browser.url('http://localhost:4000');
        const headerLoginButton = await $('.user_buttons button:nth-child(1)');
        const headerRegistrationButton = await $('.user_buttons button:nth-child(2)');

        await headerRegistrationButton.click();
        await browser.pause(1000);
        await headerLoginButton.click();
        await browser.pause(2000);
    })
});
