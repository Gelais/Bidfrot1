function search_menu() {
    let input = document.getElementById('searchbar').value;
    input=input.toLowerCase();
    
    li = document.querySelector("#cartoes").children;

    for (i = 0; i < li.length; i++) { 
        if (!li[i].innerHTML.toLowerCase().includes(input)) {
            li[i].style.display = "none"

        }
        else {
            li[i].style.display="flex";
        }
    }
}

var mysrc = "capa.html";

var request = {};
var pairs = location.search.substring(1).split('&');
for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=');
    request[pair[0]] = pair[1];
}
var BI = request["BI"];

function setactive(BI) {
    if (BI != "") document.getElementById("a_" + BI).className = "mm-active";
}
switch (BI) {

    case "Checklist":
        setactive(BI)
        mysrc = "https://app.powerbi.com/view?r=eyJrIjoiMDM0ZjBjNzctNzAwNi00Nzg5LTk1YjctNGI1MDc1MjcwMDY3IiwidCI6Ijk5YTI4ZjRmLTk3ZWMtNDA1Ny1hZTg0LTUxYTM1ZDRjN2UyNiJ9";
        document.title = "Checklist";
        break;
        
    case "mapa-de-implantacao":
        setactive(BI)
        document.getElementById("myFrame").style.minWidth = "77.35%";
        document.getElementById("myFrame").style.right = "80%";
        document.getElementById("myFrame").style.left = "12%";
        
        larguraTela = window.innerWidth;
        alturaTela = window.innerHeight;
    
        if (larguraTela < 1400) {
            if (larguraTela < 500) {
                mysrc = "./assets/images/mapa-de-implantacao-300.svg";
            }
            else if (larguraTela >= 500 && larguraTela <= 950 && alturaTela < 500){
                mysrc = "./assets/images/mapa-de-implantacao-450.svg";
            } 
            else if (larguraTela > 450 && larguraTela <= 850){
                mysrc = "./assets/images/mapa-de-implantacao-600.svg";
            } 
            else if (larguraTela > 800 && larguraTela < 1100 && alturaTela > 500){
                mysrc = "./assets/images/mapa-de-implantacao-800.svg";
            }
            else {
                mysrc = "./assets/images/mapa-de-implantacao-1000.svg";
            } 
        }
        else if (larguraTela > 1400 && larguraTela < 2500){
            mysrc = "./assets/images/mapa-de-implantacao-1400.svg";
        }
        else if (larguraTela > 2500 && larguraTela < 3600){
            mysrc = "./assets/images/mapa-de-implantacao-2k.svg";
        }
        else {
            mysrc = "./assets/images/mapa-de-implantacao-4k.svg";
        }

        // Função para adicionar um parâmetro de consulta único à URL
        function atualizarCache(url) {
            const timestamp = new Date().getTime();
            return `${url}?timestamp=${timestamp}`;
        }
        
        // Exemplo de uso
        const imageUrl = mysrc;
        const updatedImageUrl = atualizarCache(imageUrl);
        
        // Use a URL atualizada para carregar a imagem
        const imgElement = document.getElementById("myFrame");
        imgElement.src = updatedImageUrl;

        document.title = "Mapa de Implantação de BI";
        break;


    case "estatisticas-laboratorio":
        setactive(BI)
        document.getElementById("myFrame").style.minWidth = "77.35%";
        document.getElementById("myFrame").style.right = "5%";
        document.getElementById("myFrame").style.left = "12%";
        mysrc = "https://datastudio.google.com/embed/u/0/reporting/bd2ea098-c8e7-4e2d-a23f-82c806c46574/page/v1k8C";
        document.title = "Estatísticas do Laboratório de Inovação";
        break;


    case "":
        mysrc = "capa.html";
        break;
}
//alert(mysrc);
document.getElementById("myFrame").src = mysrc;