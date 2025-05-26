// LANÇAMENTOS

function passarMouse() {
    const lgn1 = document.getElementById('lgn1');

    lgn1.style.visibility = 'visible';

}

function tirarMouse() {
    const lgn1 = document.getElementById('lgn1');

    lgn1.style.visibility = 'hidden';

}

const lancamento = document.getElementById('icn1');

lancamento.addEventListener('click', () => {
    const lanches = ['.lyN1', '.lyB1', '.lyT1', '.lyF1', '.lyM1', '.lyA1'];
    const grupos = lanches.map(lanche => document.querySelectorAll(lanche));
    const [Lan, Nov, Bov, Fam, Fra, Meq, sob] = grupos;
    const lan = document.querySelectorAll('.lyL1');

    grupos.forEach(grupos => {
        grupos.forEach(el => el.classList.add('desaparecer'));
    });

    lan.forEach(el => el.classList.remove('desaparecer'));


});

// NOVOS_BRABOS

function passarMouse1() {
    const lgn1 = document.getElementById('lgn2');

    lgn1.style.visibility = 'visible';

}

function tirarMouse1() {
    const lgn1 = document.getElementById('lgn2');

    lgn1.style.visibility = 'hidden';

}

const novos_brabos = document.getElementById('icn2');

novos_brabos.addEventListener('click', () => {
    const lanches = ['.lyL1', '.lyB1', '.lyT1', '.lyF1', '.lyM1', '.lyA1'];
    const grupos = lanches.map(lanche => document.querySelectorAll(lanche));
    const [Lan, Nov, Bov, Fam, Fra, Meq, sob] = grupos;
    const lan = document.querySelectorAll('.lyN1');

    grupos.forEach(grupos => {
        grupos.forEach(el => el.classList.add('desaparecer'));
    });

    lan.forEach(el => el.classList.remove('desaparecer'));


});


// CARNE_BOVINA

function passarMouse2() {
    const lgn1 = document.getElementById('lgn3');

    lgn1.style.visibility = 'visible';

}

function tirarMouse2() {
    const lgn1 = document.getElementById('lgn3');

    lgn1.style.visibility = 'hidden';

}

const carne_bovina = document.getElementById('icn3');

carne_bovina.addEventListener('click', () => {
    const lanches = ['.lyL1', '.lyN1', '.lyT1', '.lyF1', '.lyM1', '.lyA1'];
    const grupos = lanches.map(lanche => document.querySelectorAll(lanche));
    const [Lan, Nov, Bov, Fam, Fra, Meq, sob] = grupos;
    const lan = document.querySelectorAll('.lyB1');

    grupos.forEach(grupos => {
        grupos.forEach(el => el.classList.add('desaparecer'));
    });

    lan.forEach(el => el.classList.remove('desaparecer'));


});

//

function passarMouse3() {
    const lgn1 = document.getElementById('lgn4');

    lgn1.style.visibility = 'visible';

}

function tirarMouse3() {
    const lgn1 = document.getElementById('lgn4');

    lgn1.style.visibility = 'hidden';

}

const familia_fasty = document.getElementById('icn4');

familia_fasty.addEventListener('click', () => {
    const lanches = ['.lyL1', '.lyN1', '.lyB1', '.lyF1', '.lyM1', '.lyA1'];
    const grupos = lanches.map(lanche => document.querySelectorAll(lanche));
    const [Lan, Nov, Bov, Fam, Fra, Meq, sob] = grupos;
    const lan = document.querySelectorAll('.lyT1');

    grupos.forEach(grupos => {
        grupos.forEach(el => el.classList.add('desaparecer'));
    });

    lan.forEach(el => el.classList.remove('desaparecer'));


});

//

function passarMouse4() {
    const lgn1 = document.getElementById('lgn5');

    lgn1.style.visibility = 'visible';

}

function tirarMouse4() {
    const lgn1 = document.getElementById('lgn5');

    lgn1.style.visibility = 'hidden';

}

const frango = document.getElementById('icn5');

frango.addEventListener('click', () => {
    const lanches = ['.lyL1', '.lyN1', '.lyB1', '.lyT1', '.lyM1', '.lyA1'];
    const grupos = lanches.map(lanche => document.querySelectorAll(lanche));
    const [Lan, Nov, Bov, Fam, Fra, Meq, sob] = grupos;
    const lan = document.querySelectorAll('.lyF1');

    grupos.forEach(grupos => {
        grupos.forEach(el => el.classList.add('desaparecer'));
    });

    lan.forEach(el => el.classList.remove('desaparecer'));


});

//

function passarMouse5() {
    const lgn1 = document.getElementById('lgn6');

    lgn1.style.visibility = 'visible';

}

function tirarMouse5() {
    const lgn1 = document.getElementById('lgn6');

    lgn1.style.visibility = 'hidden';

}

const Mequi_1000 = document.getElementById('icn6');

Mequi_1000.addEventListener('click', () => {
    const lanches = ['.lyL1', '.lyN1', '.lyB1', '.lyF1', '.lyT1', '.lyA1'];
    const grupos = lanches.map(lanche => document.querySelectorAll(lanche));
    const [Lan, Nov, Bov, Fam, Fra, Meq, sob] = grupos;
    const lan = document.querySelectorAll('.lyM1');

    grupos.forEach(grupos => {
        grupos.forEach(el => el.classList.add('desaparecer'));
    });

    lan.forEach(el => el.classList.remove('desaparecer'));


});

function passarMouse6() {
    const lgn1 = document.getElementById('lgn7');

    lgn1.style.visibility = 'visible';

}

function tirarMouse6() {
    const lgn1 = document.getElementById('lgn7');

    lgn1.style.visibility = 'hidden';

}

const Acompanhamentos = document.getElementById('icn7');

Acompanhamentos.addEventListener('click', () => {
    const lanches = ['.lyL1', '.lyN1', '.lyB1', '.lyF1', '.lyM1', '.lyT1'];
    const grupos = lanches.map(lanche => document.querySelectorAll(lanche));
    const [Lan, Nov, Bov, Fam, Fra, Meq, sob] = grupos;
    const lan = document.querySelectorAll('.lyA1');

    grupos.forEach(grupos => {
        grupos.forEach(el => el.classList.add('desaparecer'));
    });

    lan.forEach(el => el.classList.remove('desaparecer'));


});

function passarMouse7() {
    const lgn1 = document.getElementById('lgn8');

    lgn1.style.visibility = 'visible';

}

function tirarMouse7() {
    const lgn1 = document.getElementById('lgn8');

    lgn1.style.visibility = 'hidden';

}

const sobremesas = document.getElementById('icn8');

sobremesas.addEventListener('click', () => {
    const lanches = ['.lyL1', '.lyN1', '.lyB1', '.lyF1', '.lyM1', '.lyA1'];
    const grupos = lanches.map(lanche => document.querySelectorAll(lanche));
    const [Lan, Nov, Bov, Fam, Fra, Meq] = grupos;
    const lan = document.querySelectorAll('.lyT1');

    lan.forEach(all => all.classList.add('desaparecer'));

    grupos.forEach(grupos => {
        grupos.forEach(el => el.classList.add('desaparecer'));
    });

    const layout = document.querySelector('.layLancamentos');

    layout.style.overflowX = 'hidden';
    

});

