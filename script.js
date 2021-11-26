//elements
const pageBody = document.querySelector('body');
const headerSection = document.querySelector('header');
const mainSection = document.querySelector('main');
const mainTitle = document.getElementById('startButton');
const burgerLogo = document.getElementById('burgerLogo');
const nextButton = document.getElementById('nextScreen');

//control variables
let pageIndex = 0;
let totalOrderValue = 0;

//arrays

let bread = [];
let protein = [];
let salad = [];
let cheese = [];
let myHamburger = [];

//landing page

mainTitle.addEventListener('click', startPage);
burgerLogo.addEventListener('click', startPage);

function startPage() {
    console.log(burgerLogo.offsetWidth);
    burgerLogo.toggleAttribute('class');
    burgerLogo.className = 'animation-02';
    headerSection.style.height = 'auto';
    

    setTimeout(appendContent, 2000);
    function appendContent() {
        mainSection.innerHTML += `
        <p id="instructions">
            Nos próximos passos você irá montar seu lanche.
        </p>
        <nav id="navigationMenu">
            <button
            id="nextScreen"
            type="button"
            onclick="nextPage()"
            >continuar
            </button>
        </nav>
        `;
    }

    mainTitle.removeEventListener('click', startPage);
    burgerLogo.removeEventListener('click', startPage);
}


//navigation control

function nextPage() {
    pageIndex++;
    console.log(pageIndex);
    pageLoader(pageIndex);
}

function previousPage() {
    pageIndex--;
    console.log(pageIndex);
    pageLoader(pageIndex);
}

function pageLoader(index) {
    switch(String(index)) {
        //load menu
        case '1':
            mainSection.innerHTML = `
                <form id="breadPicker" class="choices">

                    <fieldset class="menuField">

                        <legend><img src="assets/images/hamburger-01-icon.png" alt="escolha seu pão" /></legend>

                        <div>
                        <input id="frenchBread"
                            type="radio"
                            name="bread"
                            value="a"
                            checked
                        />
                        <label for="frenchBread">pão francês - R$3,00</label>
                        </div>

                        <div>
                        <input id="australianBread"
                            type="radio"
                            name="bread"
                            value="b" 
                        />
                        <label for="australianBread">pão australiano - R$8,00</label>
                        </div>
                        
                        <div>
                        <input id="lastBread"
                            type="radio"
                            name="bread"
                            value="c" 
                        />
                        <label for="lastBread">pão de brioche - R$6,00</label>
                        </div>

                    </fieldset>
                </form>

                <form id="hamburgerPicker" class="choices">
                    <fieldset class="menuField">

                        <legend><img src="assets/images/hamburger-02-icon.png" alt="escolha uma proteína" /></legend>

                        <div>
                        <input id="rumpBurger"
                            type="radio"
                            name="burger"
                            value="a" 
                        />
                        <label for="rumpBurger">hambúrguer de picanha - R$13,00</label>
                        </div>

                        <div>
                        <input id="ribBurger"
                            type="radio"
                            name="burger"
                            value="b" 
                        />
                        <label for="ribBurger">hambúrguer de costela - R$10,00</label>
                        </div>
                        
                        <div>
                        <input id="veganBurger"
                            type="radio"
                            name="burger"
                            value="c"
                            checked 
                        />
                        <label for="veganBurger">hambúrguer vegano - R$12,00</label>
                        </div>
                    </fieldset>
                </form>

                <form id="saladPicker" class="choices">
                    <fieldset class="menuField">

                        <legend><img src="assets/images/hamburger-03-icon.png" alt="escolha uma salada" /></legend>

                        <div>
                        <input id="letuceSalad"
                            type="radio"
                            name="salad"
                            value="a"
                            checked 
                        />
                        <label for="letuceSalad">alface - R$1,50</label>
                        </div>

                        <div>
                        <input id="tomatoSalad"
                            type="radio"
                            name="salad"
                            value="b" 
                        />
                        <label for="tomatoSalad">tomate - R$1,50</label>
                        </div>
                        
                        <div>
                        <input id="noSalad"
                            type="radio"
                            name="salad"
                            value="c" 
                        />
                        <label for="noSalad">sem salada - R$0,00</label>
                        </div>
                    </fieldset>
                </form>

                <form id="cheesePicker" class="choices">
                    <fieldset class="menuField">

                        <legend><img src="assets/images/hamburger-04a-icon.png" alt="escolha seu queijo" /></legend>

                        <div>
                        <input id="mozzarella"
                            type="radio"
                            name="cheese"
                            value="a"
                            checked 
                        />
                        <label for="mozzarella">mussarela - R$3,00</label>
                        </div>

                        <div>
                        <input id="dishCheese"
                            type="radio"
                            name="cheese"
                            value="b" 
                        />
                        <label for="dishCheese">prato - R$3,00</label>
                        </div>
                        
                        <div>
                        <input id="cheddar"
                            type="radio"
                            name="cheese"
                            value="c" 
                        />
                        <label for="cheddar">cheddar - R$5,00</label>
                        </div>
                    </fieldset>
                </form>

                <nav id="navigationMenu">
                    <button
                    id="nextScreen"
                    type="button"
                    onclick="nextPage()"
                    >continuar
                    </button>
                </nav>
                `;

                mainTitle.innerHTML = `Monte seu hambúrguer`;
                break;

        //prepare order
        case '2':
            let breadChoice = document.querySelector('input[name="bread"]:checked').value;
            let proteinChoice = document.querySelector('input[name="burger"]:checked').value;
            let saladChoice = document.querySelector('input[name="salad"]:checked').value;
            let cheeseChoice = document.querySelector('input[name="cheese"]:checked').value;

            totalOrderValue = 0;

            switch(breadChoice) {
                case'a':
                    bread = ['pão francês', 3];
                    break;
                case 'b':
                    bread = ['pão australiano', 8];
                    break;
                case 'c':
                    bread = ['pão de brioche', 6];
                    break;
            }
            console.log(bread);

            switch(proteinChoice) {
                case'a':
                    protein = ['hambúrger de picanha', 13];
                    break;
                case 'b':
                    protein = ['hambúrguer de costela', 10];
                    break;
                case 'c':
                    protein = ['hambúrguer vegano', 12];
                    break;
            }
            console.log(protein);

            switch(saladChoice) {
                case'a':
                    salad = ['alface', 1.5];
                    break;
                case 'b':
                    salad = ['tomate', 1.5];
                    break;
                case 'c':
                    salad = ['sem salada', 0];
                    break;
            }
            console.log(salad);

            switch(cheeseChoice) {
                case'a':
                    cheese = ['mussarela', 3];
                    break;
                case 'b':
                    cheese = ['prato', 3];
                    break;
                case 'c':
                    cheese = ['cheddar', 5];
                    break;
            }
            console.log(cheese);

            myHamburger = [bread, protein, salad, cheese];

            console.log(myHamburger);
            
            myHamburger.forEach(item => totalOrderValue += item[1]);
            

            //load last page
            mainSection.innerHTML = `
                <p id="bill">
                    Total a pagar: R$<span id="totalValue">${totalOrderValue.toString()}</span>
                </p>
                
                <dl id="cheffOrder">
                    <dt>
                        Pão:
                    </dt>
                    <dd>
                        <span id="bread">${myHamburger[0][0]}</span>
                    </dd>

                    <dt>
                        Proteína:
                    </dt>
                    <dd>
                        <span id="protein">${myHamburger[1][0]}</span>
                    </dd>

                    <dt>
                        Salada:
                    </dt>
                    <dd>
                        <span id="salad">${myHamburger[2][0]}</span>
                    </dd>

                    <dt>
                        Queijo:
                    </dt>
                    <dd>
                        <span id="cheese">${myHamburger[3][0]}</span>
                    </dd>

                </dl>
                
                <nav id="navigationMenu">
                    <button
                    id="nextScreen"
                    type="button"
                    onclick="previousPage()"
                    >voltar
                    </button>
                </nav>
            `;

            mainTitle.innerHTML = `Ótima escolha!`;

            break;
    }
}