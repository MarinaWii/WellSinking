Vue.component('home', {
    template: `<div class="home">
        <img src="images/logo.png" alt="" class="logo">
        <span>Бурение скважин</span>  
        <span>на воду в Санкт-Петербурге</span>
        <span>и Ленинградской области</span>
        </div>`,
    
    
});
Vue.component('kind', {
    template: `<div class="kind">
        <div class="kind_text">
        <span>мы используем два вида скважин:</span> 
        </div> 
        <div class="kind_text">
        <span>фильтровые (на песок) и артезианские (на известняк)</span> 
        </div> 
        </div>`,
    
    
});
Vue.component('term', {
    template: `<div class="kind">
        <div class="kind_text">
        <h1 class="comp">сроки</h1>
        <h1 class="tel">сроки бурения</h1>
        <span>неглубокие (от 30 метров) — в течение двух дней;</span> 
        </div> 
        <div class="kind_text">
        <h1 class="comp">бурения</h1>
        <span>глубокие (от 100 м) потребуют в среднем 10 дней.</span> 
        </div> 
        </div>`,
    
    
});
Vue.component('advice', {
    template: `<div class="kind">
        <div class="kind_text">
        <span>Должна быть подготовлена площадка 10х5 метров, где будет буровая установка.</span> 
        </div> 
        <div class="kind_text">
        <span>Также будет необходимо подумать о беспрепят- cтвенном подъезде техники. </span> 
        </div> 
        </div>`,
    
    
});
Vue.component('guar', {
    template: `<div class="kind">
        <div class="guar_text">
        <span class="black_text">В течение трех лет действия гарантии мы обеспечиваем клиенту полное сервисное обслуживание установленного оборудования. </span> 
        </div> 
        <div class="guar_text">
        <span class="black_text">послегарантийный сервис <br>
        1. Профилактика и диагностика септика.<br>
        2. Техобслуживание станции.<br>
        3. Ремонт или замена узлов, которые вышли из строя.</span> 
        </div> 
        </div>`,
    
    
});
Vue.component('forma', {
    template: `<div class="forma">
    <div class="form_text">
    <span class="black_text">заполните форму и мы</span>
    <span class="black_text">вам перезвоним</span></div>
    <form action="" class="position">
    <input class="form_name" type="text" name="name" placeholder="имя">
    <input class="form_name" type="text" name="name" placeholder="отчество">
    <input class="form_name" type="phone" name="name" placeholder="телефон">
    <input class="form_submit" type="submit" value="отправить">
  </form>
        </div>`,
    
    
});
new Vue({
    el:"#app"
})