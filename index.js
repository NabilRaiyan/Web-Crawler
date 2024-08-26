const puppeteer = require("puppeteer")
const fs = require('fs/promises')


async function start(){
    const browser = await puppeteer.launch()
    const page = await browser.newPage();
    await page.goto("https://chaldal.com/diabetic-food")
    const names = await page.evaluate(()=>{
        return Array.from(document.querySelectorAll(".product .imageWrapper .name")).map(x => x.textContent)
    })
    console.log(names);

    // names.forEach(name => {
    //     // if (name === "Quaker Oats Jar"){
    //     //     console.log("matched")
    //     // }else{
    //     //     console.log("not matched")
    //     // }
    //     console.log(name)
    // })

    // await fs.writeFile("name.txt", names.join("\r\n"))

    // await page.screenshot({path: "amazing.png", fullPage: true})
    await browser.close()
}
start()