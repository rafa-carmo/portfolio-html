const portfolioContainer = document.getElementById('portfolio-container')

function createPortfolio(item) 
{
    let container = document.createElement('div')
    container.className = "portfolio-box"

    let image = document.createElement('img')
    image.setAttribute("src", item.image)
    image.setAttribute('alt', item.title)
    container.appendChild(image)
    
    let layerContainer = document.createElement('div')
    layerContainer.className = "portfolio-layer"

    let title = document.createElement('h4')
    title.innerText = item.title
    layerContainer.appendChild(title)

    let description = document.createElement('p')
    description.innerText = item.description
    layerContainer.appendChild(description)
    
    if(item.url) {
        let url = document.createElement('a')
        url.setAttribute('href', item.url.link)
        url.setAttribute('target', '_blank')
        url.innerHTML = `<i class="${item.url.icon} " ></i>`
        layerContainer.appendChild(url)
    }

    container.appendChild(layerContainer)
    return container
}

const mountPortfolio = () => {
    items.slice(0,6).map((item) => {
        portfolioContainer.appendChild(createPortfolio(item))
        
    })
}

const items = [
    {
        "title": "Portfólio e Blog de Maquiagem",
        "description": "Portfólio e blog de maquiador profissional em Nextjs 13",
        "url": {
            "link": "https://github.com/rafa-carmo/js-atelier",
            "icon": "bx bxl-github bx-lg"
        },
        "image": "/assets/jobs/blog-maquiagem.jpg"
    },
    {
        "title": "Discord bot Organizador",
        "description": "Bot discord mapeador de dados em documentação",
        "url": {
            "link": "https://github.com/rafa-carmo/Edward-Bot",
            "icon": "bx bxl-github bx-lg"
        },
        "image": "/assets/jobs/discord-bot.png"
    },
    {
        "title": "Site de Assistência médica",
        "description": "Site de assinatura de assistência médica e funeral",
        "url": {
            "link": "https://vivermaisbeneficios.com.br",
            "icon": "bx bx-world bx-lg"
        },
        "image": "/assets/jobs/viver-mais-beneficios.jpg"
    },
]

mountPortfolio()