// encontrar o botão adicionar tarefa
const BtnAdicionarTarefa = document.querySelector('.app__button--add-task');
const FormAdicionarTarefa = document.querySelector(".app__form-add-task");
const textarea = document.querySelector('.app__form-textarea');
const tarefas = [] //para guardar as tarefas, como é uma lista, é um array
BtnAdicionarTarefa.addEventListener("click", () => {
    FormAdicionarTarefa.classList.toggle('hidden') //quando alguém clicar no botão, faz a alternância da classe hidden
})
FormAdicionarTarefa.addEventListener("submit", (event) =>{ event.preventDefault(); //quando clicar em salvar, a o formulário não vai sumir, ele continuará ali. Esse evento ele impede o padrão que, nesse caso, impedir que o formulário suma
    const descricaoTarefa = textarea.value //valor adicionado no textarea e guradr em uma variável. Essa variável vai receber o valor do textarea. A propriedade value pega o valor, o que foi digitado ali
    const tarefa = {          //objeto que representa uma tarefa
        descricao: textarea.value
    }
    tarefas.push[tarefa] //colocar a terefa dentro
    localStorage.setItem('tarefas', JSON.stringify(tarefas))//as variáveis que fizemos acima só existem no tempo de execução, quando a página for recarregada essas informaçÕes somem. Por isso é preciso guradá-las em algum lugar //guardar a lista de tarefas aqui dentro
})//já que tarefas é um array, e localStorage só sceita string, precisamos chamar o JSON.stringify para trasnformá-lo em uma string