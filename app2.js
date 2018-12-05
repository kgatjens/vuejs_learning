
Vue.component('card',{
    template: `  <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">Vue fundamentals</h3>
                            <div class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempus nulla nisl, quis
                                tempus est vehicula a. Etiam
                                interdum tempor libero, et porta lectus dictum nec. Quisque blandit ante id varius interdum. Vestibulum eu
                                urna
                                viverra, convallis tortor non, auctor neque. Nulla vitae mi ligula.</div>
                        </div>
                    </div>`
})

new Vue({
    el: '#app',
})