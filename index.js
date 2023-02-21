import { faker } from 'https://cdn.skypack.dev/@faker-js/faker'
    
Array.from(document.querySelectorAll('.bs')).forEach(element => element.textContent = faker.company.bs())
Array.from(document.querySelectorAll('.bsBuzz')).forEach(element => element.textContent = faker.company.bsBuzz())
Array.from(document.querySelectorAll('.lorem')).forEach(element => element.textContent = faker.lorem.lines())
Array.from(document.querySelectorAll('.fullName')).forEach(element => element.textContent = faker.name.fullName())
