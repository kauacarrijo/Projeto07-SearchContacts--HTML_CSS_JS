let p = document.querySelector("p")
let input = document.querySelector("input")

const contacts = [{ name: "Rodolfo", number: "(19) 94343-3434"}, { name: "Paulo", number: "(12) 93443-3434"}, { name: "Aline", number: "(13) 94566-3434"}, { name: "Maria", number: "(14) 94343-3476"},]

function procurarContato() {
    for (const contact of contacts) {
        if(input.value.toLowerCase() == contact.name.toLocaleLowerCase()){
            p.innerHTML = `Número: ${contact.number}`
            break
        }else{
            p.innerHTML = "Contato não encontrado, tente novamente."
        }
    }
}