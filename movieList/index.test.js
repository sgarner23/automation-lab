const { Capabilities, Builder, By } = require('selenium-webdriver')

require('chromedriver');

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
  await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll(async () => {
  await driver.quit()
})



describe('add and cross off movie', async () => {
  test('Add a movie to the list', async () => {
    const input = await driver.findElement(By.xpath('//form/input'))
    
    await input.sendKeys('Step Brothers\n')
    
    await driver.sleep(2000)
    
  })
  
  test('This will cross a move off the list', async () => {
    const crossOffButton = await driver.findElement(By.xpath('//li/button'))
  
    await crossOffButton.click()

    await driver.sleep(3000)
  
  })

  test('Confirms the right message appears', async () => {

    const confirmationMessage = await driver.findElement(By.xpath(`//li/span[text()="${text}"]`))

    expect(confirmationMessage).toBe('Step Brothers')

    await driver.sleep(2000)

  })

})











